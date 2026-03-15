const GAMES = {
  mw5:{ name:"Modern Warfare II (2022)",  short:"MW2", color:"#8899ff", year:2022 },
  mw6:{ name:"Modern Warfare III (2023)", short:"MW3", color:"#6677ff", year:2023 },
  bo6:{ name:"Black Ops 6",               short:"BO6", color:"#ff2244", year:2024 },
  bo7:{ name:"Black Ops 7",               short:"BO7", color:"#cc00ff", year:2025 },
};

let OPERATORS = [];

// ── CSV loader ────────────────────────────────────────────────────────────────
function parseCSV(text){
  const rows=[], lines=text.trim().split('\n');
  const headers=lines[0].split(';');
  for(let i=1;i<lines.length;i++){
    // Handle quoted fields with semicolons inside
    const fields=[], line=lines[i];
    let cur='', inQ=false;
    for(let c=0;c<line.length;c++){
      const ch=line[c];
      if(ch==='"' && !inQ){ inQ=true; }
      else if(ch==='"' && inQ){ inQ=false; }
      else if(ch===';' && !inQ){ fields.push(cur); cur=''; }
      else { cur+=ch; }
    }
    fields.push(cur);
    const row={};
    headers.forEach((h,j)=>{ row[h.trim()]=(fields[j]||'').trim(); });
    rows.push(row);
  }
  return rows;
}

async function loadData(){
  const [opsText, apText, skText] = await Promise.all([
    fetch('mw5/data/operators.csv').then(r=>r.text()),
    fetch('mw5/data/appearances.csv').then(r=>r.text()),
    fetch('mw5/data/skins.csv').then(r=>r.text()),
  ]);

  const opsRows  = parseCSV(opsText);
  const apRows   = parseCSV(apText);
  const skinRows = parseCSV(skText);

  // Index appearances and skins by operator_id
  const apMap={}, skMap={};
  apRows.forEach(r=>{
    if(!apMap[r.operator_id]) apMap[r.operator_id]=[];
    apMap[r.operator_id].push({ game:r.game, faction:r.faction, season:r.season||null });
  });
  skinRows.forEach(r=>{
    if(!skMap[r.operator_id]) skMap[r.operator_id]=[];
    skMap[r.operator_id].push({ name:r.skin_name, path:r.skin_path });
  });

  OPERATORS = opsRows.map(r=>({
    id:           r.id,
    name:         r.name,
    alias:        r.alias||null,
    icon:         r.icon||null,
    internalName: r.internalName||null,
    bio: (r.citizenship||r.language||r.status||r.background) ? {
      citizenship: r.citizenship||null,
      language:    r.language||null,
      status:      r.status||null,
      background:  r.background||null,
    } : null,
    appearances:  apMap[r.id]||[],
    skins:        skMap[r.id]||[],
  }));

  render();
}

loadData();

// ── Helpers ───────────────────────────────────────────────────────────────────
function ini(name){ return name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase(); }

function badge(gameKey,small){
  const g=GAMES[gameKey]; if(!g) return "";
  return '<span class="game-badge '+(small?"sm":"md")+'" style="color:'+g.color+';border:1px solid '+g.color+'44;background:'+g.color+'18">'+g.short+'</span>';
}

function apLine(ap){
  return '<div class="appearance-line">'+badge(ap.game,true)+(ap.season?'<span class="season-tag">'+ap.season+'</span>':'')+'</div>';
}

function patternSVG(seed,color){
  let r=seed*9301+49297;
  const rng=()=>{ r=(r*9301+49297)%233280; return r/233280; };
  let s="";
  for(let i=0;i<6;i++){
    const x=rng()*100,y=rng()*100,sz=15+rng()*35,t=Math.floor(rng()*3);
    if(t===0) s+='<rect x="'+(x-sz/2)+'" y="'+(y-sz/2)+'" width="'+sz+'" height="'+sz+'" fill="'+color+'" transform="rotate('+(sz*3)+' '+x+' '+y+')"/>';
    else if(t===1) s+='<circle cx="'+x+'" cy="'+y+'" r="'+(sz/2)+'" fill="'+color+'"/>';
    else s+='<polygon points="'+x+','+(y-sz/2)+' '+(x+sz/2)+','+(y+sz/2)+' '+(x-sz/2)+','+(y+sz/2)+'" fill="'+color+'"/>';
  }
  return '<svg class="skin-pattern" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"><rect width="100" height="100" fill="'+color+'"/>'+s+'</svg>';
}

// ── State ─────────────────────────────────────────────────────────────────────
var S={ game:"all", search:"", view:"grid" };

const gameCount={};
OPERATORS.forEach(op=>{
  const seen=new Set();
  op.appearances.forEach(a=>{ if(!seen.has(a.game)){ gameCount[a.game]=(gameCount[a.game]||0)+1; seen.add(a.game); } });
});
const multiCount=OPERATORS.filter(op=>op.appearances.length>1).length;

// ── Tabs ──────────────────────────────────────────────────────────────────────
function buildTabs(){
  const c=document.getElementById("game-tabs");
  c.innerHTML="";
  const allB=document.createElement("button");
  allB.className="game-tab all"+(S.game==="all"?" active-all":"");
  allB.textContent="ALL ("+OPERATORS.length+")";
  allB.onclick=()=>{ S.game="all"; render(); };
  c.appendChild(allB);
  Object.entries(GAMES).forEach(([k,g])=>{
    const b=document.createElement("button");
    b.className="game-tab";
    b.textContent=g.short+" ("+(gameCount[k]||0)+")";
    b.style.color=S.game===k?g.color:"";
    b.style.borderBottomColor=S.game===k?g.color:"transparent";
    b.onclick=()=>{ S.game=k; render(); };
    c.appendChild(b);
  });
}

function getFiltered(){
  return OPERATORS.filter(op=>{
    if(S.game!=="all"&&!op.appearances.some(a=>a.game===S.game)) return false;
    if(S.search){ const q=S.search.toLowerCase(); return op.name.toLowerCase().includes(q)||op.appearances.some(a=>a.faction&&a.faction.toLowerCase().includes(q)); }
    return true;
  });
}

// ── Render ────────────────────────────────────────────────────────────────────
function render(){
  buildTabs();
  document.getElementById("header-sub").textContent=OPERATORS.length+" OPERATORS \u00b7 "+multiCount+" CROSS-GAME \u00b7 "+Object.keys(GAMES).length+" TITLES";
  const ops=getFiltered();
  document.getElementById("ops-count").textContent=ops.length+" OPS";

  const banner=document.getElementById("game-banner");
  if(S.game!=="all"){
    const g=GAMES[S.game];
    banner.className="game-banner visible";
    banner.style.cssText="display:flex;margin-bottom:16px;padding:10px 16px;align-items:center;gap:12px;background:"+g.color+"0a;border:1px solid "+g.color+"22;border-left:3px solid "+g.color;
    document.getElementById("banner-year").textContent=g.year;
    document.getElementById("banner-year").style.color=g.color;
    document.getElementById("banner-name").textContent="Call of Duty: "+g.name;
  } else { banner.className="game-banner"; banner.style.cssText=""; }

  const gridEl=document.getElementById("grid-view");
  const listEl=document.getElementById("list-view");
  const emptyEl=document.getElementById("empty-msg");
  if(ops.length===0){ emptyEl.style.display="block"; gridEl.style.display="none"; listEl.style.display="none"; return; }
  emptyEl.style.display="none";

  // MW5 faction split
  if(S.game==="mw5"){
    const ac=GAMES.mw5.color;
    const specgru=ops.filter(op=>op.appearances.some(a=>a.game==="mw5"&&a.faction==="SpecGru"));
    const kortac =ops.filter(op=>op.appearances.some(a=>a.game==="mw5"&&a.faction==="KorTac"));

    if(S.view==="grid"){
      gridEl.style.display="block"; listEl.style.display="none";      gridEl.innerHTML=
        '<div class="faction-split">'
        +'<div class="faction-col">'
        +'<div class="faction-header" style="color:'+ac+';border-color:'+ac+'44"><span class="fh-dot" style="background:'+ac+'"></span>SPECGRU</div>'
        +'<div class="faction-col-grid" id="sg-grid">'+specgru.map(op=>cardHTML(op)).join("")+'</div>'
        +'</div>'
        +'<div class="faction-col">'
        +'<div class="faction-header" style="color:'+ac+';border-color:'+ac+'44"><span class="fh-dot" style="background:'+ac+'"></span>KORTAC</div>'
        +'<div class="faction-col-grid" id="kt-grid">'+kortac.map(op=>cardHTML(op)).join("")+'</div>'
        +'</div>'
        +'</div>';
      // attach click listeners across both columns
      const allOps=[...specgru,...kortac];
      gridEl.querySelectorAll(".op-card").forEach((el,i)=>{ el.addEventListener("click",()=>openDetail(allOps[i])); });
    } else {
      gridEl.style.display="none"; listEl.style.display="block"; listEl.style.flexDirection=""; listEl.style.gap="";
      listEl.innerHTML=
        '<div class="faction-split">'
        +'<div class="faction-col">'
        +'<div class="faction-header" style="color:'+ac+';border-color:'+ac+'44"><span class="fh-dot" style="background:'+ac+'"></span>SPECGRU</div>'
        +'<div class="faction-col-list" id="sg-list">'+specgru.map(op=>rowHTML(op)).join("")+'</div>'
        +'</div>'
        +'<div class="faction-col">'
        +'<div class="faction-header" style="color:'+ac+';border-color:'+ac+'44"><span class="fh-dot" style="background:'+ac+'"></span>KORTAC</div>'
        +'<div class="faction-col-list" id="kt-list">'+kortac.map(op=>rowHTML(op)).join("")+'</div>'
        +'</div>'
        +'</div>';
      const allOps=[...specgru,...kortac];
      listEl.querySelectorAll(".list-row").forEach((el,i)=>{ el.addEventListener("click",()=>openDetail(allOps[i])); });
    }
    return;
  }

  if(S.view==="grid"){
    gridEl.style.display="grid"; listEl.style.display="none";
    gridEl.innerHTML=ops.map(op=>cardHTML(op)).join("");
    gridEl.querySelectorAll(".op-card").forEach((el,i)=>{ el.addEventListener("click",()=>openDetail(ops[i])); });
  } else {
    gridEl.style.display="none"; listEl.style.display="flex"; listEl.style.flexDirection="column"; listEl.style.gap="3px";
    listEl.innerHTML=ops.map(op=>rowHTML(op)).join("");
    listEl.querySelectorAll(".list-row").forEach((el,i)=>{ el.addEventListener("click",()=>openDetail(ops[i])); });
  }
}

function cardHTML(op){
  const isM=op.appearances.length>1;
  const vis=S.game!=="all"?op.appearances.filter(a=>a.game===S.game):op.appearances;
  const pg=vis[0]?vis[0].game:op.appearances[0].game;
  const ac=GAMES[pg]?GAMES[pg].color:"#aaa";
  const mb=isM?'<span class="multi-badge">'+op.appearances.length+'</span>':"";
  const inGame=S.game!=="all";
  // Name: use alias when on a specific tab, real name on ALL
  const displayName=inGame?(op.alias||op.name):op.name;
  // Faction + game badges: only on ALL tab
  const fc=!inGame&&vis[0]&&vis[0].faction?'<div class="card-faction">'+vis[0].faction+'</div>':"";
  const apsHTML=!inGame?vis.map(apLine).join(""):"";
  const iname=op.internalName?'<div class="card-iname">'+op.internalName+'</div>':"";
  var avInner;
  if(op.icon){
    avInner='<img src="'+op.icon+'" alt="" onerror="this.style.display=\'none\';this.nextSibling.style.display=\'flex\'">'
           +'<span class="av-ini" style="display:none;color:'+ac+'">'+ini(displayName)+'</span>';
  } else {
    avInner='<span class="av-ini" style="color:'+ac+'">'+ini(displayName)+'</span>';
  }
  return '<div class="op-card" style="border-top:2px solid '+ac+'55" data-ac="'+ac+'">'
    +'<div class="card-scanlines"></div>'
    +'<div class="card-inner">'
    +'<div class="card-avatar" style="background:linear-gradient(135deg,'+ac+'22,'+ac+'08);border:1px solid '+ac+'44;font-family:\'Courier New\',monospace;font-weight:700;font-size:13px;letter-spacing:.05em;">'+avInner+mb+'</div>'
    +'<div class="card-info"><div class="card-name">'+displayName+'</div>'+fc+iname+apsHTML+'</div>'
    +'</div></div>';
}

function rowHTML(op){
  const vis=S.game!=="all"?op.appearances.filter(a=>a.game===S.game):op.appearances;
  const ac=GAMES[vis[0]?vis[0].game:""]?GAMES[vis[0].game].color:"#aaa";
  const inGame=S.game!=="all";
  const displayName=inGame?(op.alias||op.name):op.name;
  const faction=!inGame?(vis[0]?vis[0].faction:""):"";
  const aps=!inGame?vis.map(ap=>'<div class="list-ap">'+(ap.season?'<span class="season-tag">'+ap.season+'</span>':"")+badge(ap.game,true)+'</div>').join(""):"";
  return '<div class="list-row" style="border-left:3px solid '+ac+'44" data-ac="'+ac+'">'
    +'<span class="list-name">'+displayName+'</span>'
    +'<span class="list-faction">'+faction+'</span>'
    +'<div class="list-aps">'+aps+'</div></div>';
}

// hover delegation
document.addEventListener("mouseover",function(e){
  const r=e.target.closest(".list-row"); if(r) r.style.borderLeftColor=r.dataset.ac;
  const c=e.target.closest(".op-card"); if(c){ c.style.borderTopColor=c.dataset.ac; c.style.boxShadow="0 8px 32px "+c.dataset.ac+"22"; c.style.transform="translateY(-2px)"; }
  const s=e.target.closest(".skin-card"); if(s){ s.style.borderColor=s.dataset.gc+"88"; s.style.boxShadow="0 8px 32px "+s.dataset.gc+"33"; }
});
document.addEventListener("mouseout",function(e){
  const r=e.target.closest(".list-row"); if(r) r.style.borderLeftColor=r.dataset.ac+"44";
  const c=e.target.closest(".op-card"); if(c){ c.style.borderTopColor=c.dataset.ac+"55"; c.style.boxShadow=""; c.style.transform=""; }
  const s=e.target.closest(".skin-card"); if(s){ s.style.borderColor=s.dataset.gc+"33"; s.style.boxShadow=""; }
});

// ── Detail ────────────────────────────────────────────────────────────────────
function openDetail(op){
  document.getElementById("view-registry").style.display="none";
  var dv=document.getElementById("view-detail");
  dv.style.display="block"; dv.classList.add("page-in");
  setTimeout(function(){ dv.classList.remove("page-in"); },200);

  var pg=op.appearances[0].game;
  var ac=GAMES[pg]?GAMES[pg].color:"#aaa";
  var isM=op.appearances.length>1;

  // glow
  document.getElementById("detail-glow").style.background=
    "radial-gradient(ellipse 80% 400px at 50% -80px,"+ac+"14 0%,transparent 70%)";
  document.getElementById("detail-breadcrumb").textContent="OPERATOR REGISTRY / "+(op.alias||op.name).toUpperCase();

  // portrait
  var port=document.getElementById("detail-portrait");
  port.style.background="linear-gradient(160deg,"+ac+"22,"+ac+"06)";
  port.style.border="1px solid "+ac+"33";
  if(op.icon){
    port.innerHTML='<img src="'+op.icon+'" alt="" onerror="this.style.display=\'none\';this.nextSibling.style.display=\'flex\'">'
      +'<div class="av-ini" style="display:none;color:'+ac+'">'+ini(op.name)+'</div>'
      +(isM?'<div class="detail-portrait-badge">'+op.appearances.length+'</div>':"");
  } else {
    port.innerHTML='<div class="av-ini" style="color:'+ac+'">'+ini(op.name)+'</div>'
      +(isM?'<div class="detail-portrait-badge">'+op.appearances.length+'</div>':"");
  }

  // game badges
  var uniqG=[...new Set(op.appearances.map(function(a){return a.game;}))];
  document.getElementById("detail-game-badges").innerHTML=uniqG.map(function(g){
    return '<div class="detail-game-badge-row" style="border-color:'+GAMES[g].color+'33;background:'+GAMES[g].color+'0a">'+badge(g,false)+'</div>';
  }).join("");

  // name
  document.getElementById("detail-name").textContent=(op.alias||op.name);
  var dn=document.getElementById("detail-iname");
  if(dn){ dn.textContent=op.internalName?"// "+op.internalName:""; dn.style.display=op.internalName?"block":"none"; }

  // bio fields
  var b=op.bio||{};
  var faction=op.appearances[0].faction||"—";

  document.getElementById("bio-citizenship").textContent=b.citizenship||"—";
  document.getElementById("bio-language").textContent=b.language||"—";
  document.getElementById("bio-faction").textContent=b.faction||faction;

  var statusEl=document.getElementById("bio-status");
  var statusVal=b.status||"—";
  statusEl.textContent=statusVal;
  statusEl.className="bio-cell-value";
  if(statusVal==="Active")  statusEl.classList.add("status-active");
  else if(statusVal==="KIA") statusEl.classList.add("status-kia");
  else if(statusVal!=="—")   statusEl.classList.add("status-unknown");

  // background text (supports \n for paragraph breaks)
  var bgEl=document.getElementById("bio-background");
  if(b.background){
    bgEl.innerHTML=b.background.split("\n").filter(function(l){return l.trim();}).map(function(p){
      return '<p>'+p+'</p>';
    }).join("");
  } else {
    bgEl.innerHTML='<span class="bio-classified">// BACKGROUND CLASSIFIED</span>';
  }

  // skins
  document.getElementById("skins-label").style.color=ac;
  var opSkins=op.skins||[];
  document.getElementById("skins-count").textContent=opSkins.length+" SKIN"+(opSkins.length!==1?"S":"");
  if(opSkins.length===0){
    document.getElementById("skins-grid").innerHTML='<div style="font-family:\'Courier New\',monospace;font-size:10px;color:#2a3040;letter-spacing:.12em;padding:12px 0">// NO SKIN DATA</div>';
  } else {
    document.getElementById("skins-grid").innerHTML=opSkins.map(function(skin){
      return '<div class="skin-card" style="border-color:'+ac+'33" data-gc="'+ac+'">'
        +'<img class="skin-bg" src="'+skin.path+'" alt="" onerror="this.style.display=\'none\'">'
        +'<div class="skin-overlay"></div>'
        +'<div class="skin-name">'+skin.name+'</div>'
        +'</div>';
    }).join("");
  }

  window.scrollTo(0,0);
}

document.getElementById("back-btn").addEventListener("click",function(){
  document.getElementById("view-detail").style.display="none";
  document.getElementById("view-registry").style.display="block";
});
document.getElementById("back-btn").addEventListener("mouseenter",function(){
  var ac=(document.getElementById("detail-glow").style.background.match(/#[0-9a-f]{6}/i)||["#8899ff"])[0];
  this.style.borderColor=ac; this.style.color=ac;
});
document.getElementById("back-btn").addEventListener("mouseleave",function(){ this.style.borderColor=""; this.style.color=""; });

// ── Controls ──────────────────────────────────────────────────────────────────
document.getElementById("search-input").addEventListener("input",function(e){ S.search=e.target.value; render(); });
document.getElementById("btn-grid").addEventListener("click",function(){ S.view="grid"; this.classList.add("active"); document.getElementById("btn-list").classList.remove("active"); render(); });
document.getElementById("btn-list").addEventListener("click",function(){ S.view="list"; this.classList.add("active"); document.getElementById("btn-grid").classList.remove("active"); render(); });