const GAMES = {
  mw5:{ name:"Modern Warfare II (2022)",  short:"MW2", color:"#8899ff", year:2022 },
  mw6:{ name:"Modern Warfare III (2023)", short:"MW3", color:"#6677ff", year:2023 },
  bo6:{ name:"Black Ops 6",               short:"BO6", color:"#ff2244", year:2024 },
  bo7:{ name:"Black Ops 7",               short:"BO7", color:"#cc00ff", year:2025 },
};

// ── Skin display names ─────────────────────────────────────────────────────
// Key = filename without path or extension. null = use auto-label fallback.
const SKIN_NAMES = {
  // Ghost
  "ui_loot_operator_west_ghost_1_1_lg":           "TF 141 Red Team Ghost",
  "ui_loot_operator_west_ghost_2_1_lg":           "Loch Ghost",
  "ui_loot_operator_west_ghost_3_1_lg":           "Classic Ghost",
  "ui_loot_operator_west_ghost_3_2_lg":           "Hood Up Classic",
  "ui_loot_operator_west_ghost_4_1_lg":           "Gilded Reaper",
  "ui_loot_operator_west_ghost_5_1_lg":           "Pyro",
  "ui_loot_operator_west_ghost_6_1_lg":           "Ghost Senpai",
  "ui_loot_operator_west_ghost_7_1_lg":           "Spectral Ghost",
  "ui_loot_operator_west_ghost_8_1_lg":           "The Marshal",
  "ui_loot_operator_west_ghost_9_1_lg":           "The Rook",
  "ui_loot_operator_west_ghost_9_2_lg":           "The Rook (BlackCell)",
  "ui_loot_operator_west_ghost_10_1_lg":          "Possessed",
  "ui_loot_operator_west_ghost_11_1_lg":          "Death's Right Hand",
  "ui_loot_operator_west_ghost_12_1_lg":          "Zombie Ghost",
  "ui_loot_operator_west_ghost_desert_lg":        "Desert Ghost",
  "ui_loot_operator_west_ghost_desert_1_2_lg":    "Desert Ghost (BlackCell)",
  "ui_loot_operator_west_ghost_nightwar_lg":      "Nightwar",
  "ui_loot_operator_west_ghost_nightwar_1_2_lg":  "Nightwar (BlackCell)",
  // Price
  "ui_loot_operator_west_price_1_1_lg":        "TF 141 Red Team Price",
  "ui_loot_operator_west_price_2_1_lg":        "Mil-The King",
  "ui_loot_operator_west_price_3_1_lg":        "Old School Price",
  "ui_loot_operator_west_price_desert_lg":     "Bad Boonie",
  "ui_loot_operator_west_price_highrise_lg":   "High Rise",
  "ui_loot_operator_west_price_intercept_lg":  "Ghillied Up",
  // Soap
  "ui_loot_operator_west_soap_1_1_lg":         "Soap",
  "ui_loot_operator_west_soap_2_1_lg":         "Mil-Sim",
  "ui_loot_operator_west_soap_3_1_lg":         "Urban",
  "ui_loot_operator_west_soap_4_1_lg":         "Tactical",
  "ui_loot_operator_west_soap_4_2_lg":         "Tactical (Variant)",
  "ui_loot_operator_west_soap_mexico_lg":      "Mexico",
  "ui_loot_operator_west_soap_nightwar_lg":    "Nightwar",
  "ui_loot_operator_west_soap_nightwar_1_2_lg":"Nightwar (Variant)",
  // Gaz
  "ui_loot_operator_west_kyle_con_lg":         "Convoy",
  "ui_loot_operator_west_kyle_highrise_lg":    "Takedown",
  "ui_loot_operator_west_kyle_highrise_1_2_lg":"Takedown (BlackCell)",
  "ui_loot_operator_west_kyle_int_lg":         "Grass Ops",
  "ui_loot_operator_west_kyle_mar_lg":         "Aquatic",
  // Farah
  "ui_loot_operator_west_farah_1_1_lg":        "Farah",
  "ui_loot_operator_west_farah_1_2_lg":        "Farah (Variant)",
  "ui_loot_operator_west_farah_2_1_lg":        "Mil-Sim",
  "ui_loot_operator_west_farah_convoy_lg":     "Convoy",
  "ui_loot_operator_west_farah_convoy_bc_lg":  "Convoy BlackCell",
  // König
  "ui_loot_operator_east_koenig_4_1_lg":       "König",
  "ui_loot_operator_east_koenig_5_1_lg":       "Mil-Sim",
  "ui_loot_operator_east_koenig_6_1_lg":       "Alpine",
  "ui_loot_operator_east_koenig_7_1_lg":       "Urban",
  "ui_loot_operator_east_koenig_8_1_lg":       "Shadow",
  "ui_loot_operator_east_koenig_10_1_lg":      "Hunter",
  "ui_loot_operator_east_koenig_11_1_lg":      "Phantom",
  "ui_loot_operator_east_koenig_12_1_lg":      "Blackout",
  "ui_loot_operator_east_koenig_12_2_lg":      "Blackout (Variant)",
  // Homelander
  "ui_loot_operator_east_homelander_1_1_lg":   "Homelander",
  // Black Noir
  "ui_loot_operator_east_blacknoir_1_1_lg":    "Black Noir",
  // Graves
  "ui_loot_operator_east_graves_pmc_lg":       "Graves PMC",
  "ui_loot_operator_east_graves_pmc_bc_lg":    "Graves PMC BlackCell",
  "ui_loot_operator_east_graves_sc_lg":        "Shadow Company",
  "ui_loot_operator_east_graves_sc_bc_lg":     "Shadow Company BlackCell",
  // Ronin
  "ui_loot_operator_west_ronin_1_1_lg":        "Ronin",
  "ui_loot_operator_west_ronin_2_1_lg":        "Mil-Sim",
  "ui_loot_operator_west_ronin_3_1_lg":        "Urban",
  "ui_loot_operator_west_ronin_4_1_lg":        "Shadow",
  "ui_loot_operator_west_ronin_5_1_lg":        "Storm",
  // Snoop Dogg
  "ui_loot_operator_west_snoop_1_1_lg":        "Snoop Dogg",
  "ui_loot_operator_west_snoop_1_2_lg":        "Snoop Dogg (Variant)",
  // Lara Croft
  "ui_loot_operator_west_lc_1_1_lg":           "Lara Croft",
  // Spawn
  "ui_loot_operator_west_spawn_1_1_lg":        "Spawn",
  "ui_loot_operator_west_spawn_1_2_lg":        "Spawn (Variant)",
  "ui_loot_operator_west_spawn_2_1_lg":        "Hellspawn",
  "ui_loot_operator_west_spawn_2_2_lg":        "Hellspawn (Variant)",
  // Alucard
  "ui_loot_operator_west_hellsing_1_1_lg":     "Alucard",
  // Io
  "ui_loot_operator_west_blackcell_2_1_lg":    "Io",
  // Inarius
  "ui_loot_operator_west_inarius_1_1_lg":      "Inarius",
  // Lilith
  "ui_loot_operator_east_lilith_1_1_lg":       "Lilith",
  // Skeletor
  "ui_loot_operator_east_skeletor_1_1_lg":     "Skeletor",
  "ui_loot_operator_east_skeletor_2_1_lg":     "Snake Mountain",
  "ui_loot_operator_east_skeletor_3_1_lg":     "Evil Warriors",
  // Sardaukar
  "ui_loot_operator_east_dune_1_1_lg":         "Sardaukar",
  // Shredder
  "ui_loot_operator_east_shredder_1_1_lg":     "Shredder",
  // Nicki Minaj
  "ui_loot_operator_east_nima_1_1_lg":         "Nicki Minaj",
  // 21 Savage
  "ui_loot_operator_east_tws_1_1_lg":          "21 Savage",
  // Neymar
  "ui_loot_operator_east_neymar_1_1_lg":       "Neymar",
  "ui_loot_operator_east_neymar_1_1":          "Neymar (Alt)",
  // Nick Mercs
  "ui_loot_operator_east_nick_mercs_1_1_lg":   "Nick Mercs",
  "ui_loot_operator_east_nick_mercs_1_1":      "Nick Mercs (Alt)",
  "ui_loot_operator_east_nick_mercs_2_1_lg":   "Nick Mercs II",
  "ui_loot_operator_east_nick_mercs_2_1":      "Nick Mercs II (Alt)",
  // Izzy (Anime)
  "ui_loot_operator_east_anime_1_1_lg":        "Izzy",
  // Mila (Bullitt)
  "ui_loot_operator_east_bullitt_1_1_lg":      "Mila",
  // Butch (Freedom)
  "ui_loot_operator_west_freedom_2_1_lg":      "Butch",
  // Arthur
  "ui_loot_operator_west_arthur_1_1_lg":       "Arthur",
  // Starlight
  "ui_loot_operator_west_starlight_1_1_lg":    "Starlight",
  // Ash
  "ui_loot_operator_west_ash_1_1_lg":          "Ash",
  // Kevin Durant
  "ui_loot_operator_west_kevin_durant_1_1_lg": "Kevin Durant",
  // Tim
  "ui_loot_operator_west_tim_1_1_lg":          "Tim",
  // Messi
  "ui_loot_operator_west_messi_1_1_lg":        "Messi",
  // Pogba
  "ui_loot_operator_west_pogba_1_1_lg":        "Pogba",
  // Luna
  "ui_loot_operator_west_luna_3_1_lg":         "Luna",
  // Alejandro
  "ui_loot_operator_west_alejandro_1_1_lg":    "Alejandro",
  "ui_loot_operator_west_alejandro_1_2_lg":    "Alejandro (Variant)",
  "ui_loot_operator_west_alejandro_2_1_lg":    "El General",
  "ui_loot_operator_west_alejandro_2_2_lg":    "El General (Variant)",
  "ui_loot_operator_west_alejandro_3_1_lg":    "Cartel",
  "ui_loot_operator_west_alejandro_3_2_lg":    "Cartel (Variant)",
};

const SKINS = {
  "21savage":["mw5/operator/ui_loot_operator_east_tws_1_1_lg.png"],
  "aksel":["mw5/operator/ui_loot_operator_east_aksel_1_1_lg.png","mw5/operator/ui_loot_operator_east_aksel_2_1_lg.png","mw5/operator/ui_loot_operator_east_aksel_4_1_lg.png","mw5/operator/ui_loot_operator_east_aksel_5_1_lg.png","mw5/operator/ui_loot_operator_east_aksel_5_2_lg.png","mw5/operator/ui_loot_operator_east_aksel_6_1_lg.png","mw5/operator/ui_loot_operator_east_aksel_6_2_lg.png","mw5/operator/ui_loot_operator_east_aksel_7_1_lg.png","mw5/operator/ui_loot_operator_east_aksel_8_1_lg.png"],
  "alejandro":["mw5/operator/ui_loot_operator_west_alejandro_1_1_lg.png","mw5/operator/ui_loot_operator_west_alejandro_1_2_lg.png","mw5/operator/ui_loot_operator_west_alejandro_2_1_lg.png","mw5/operator/ui_loot_operator_west_alejandro_2_2_lg.png","mw5/operator/ui_loot_operator_west_alejandro_3_1_lg.png","mw5/operator/ui_loot_operator_west_alejandro_3_2_lg.png"],
  "alex":["mw5/operator/ui_loot_operator_west_alex_1_1_lg.png","mw5/operator/ui_loot_operator_west_alex_2_1_lg.png","mw5/operator/ui_loot_operator_west_alex_3_1_lg.png","mw5/operator/ui_loot_operator_west_alex_4_1_lg.png","mw5/operator/ui_loot_operator_west_alex_5_1_lg.png","mw5/operator/ui_loot_operator_west_alex_5_2_lg.png"],
  "alucard":["mw5/operator/ui_loot_operator_west_hellsing_1_1_lg.png"],
  "arthur":["mw5/operator/ui_loot_operator_west_arthur_1_1_lg.png"],
  "ash":["mw5/operator/ui_loot_operator_west_ash_1_1_lg.png"],
  "blacknoir":["mw5/operator/ui_loot_operator_east_blacknoir_1_1_lg.png"],
  "butch":["mw5/operator/ui_loot_operator_west_freedom_2_1_lg.png"],
  "calisto":["mw5/operator/ui_loot_operator_east_calisto_1_1_lg.png","mw5/operator/ui_loot_operator_east_calisto_2_1_lg.png","mw5/operator/ui_loot_operator_east_calisto_3_1_lg.png","mw5/operator/ui_loot_operator_east_calisto_4_1_lg.png","mw5/operator/ui_loot_operator_east_calisto_5_1_lg.png","mw5/operator/ui_loot_operator_east_calisto_6_1_lg.png","mw5/operator/ui_loot_operator_east_calisto_7_1_lg.png"],
  "cdl_af":["mw5/operator/ui_loot_operator_east_cdl_female_breach_lg.png","mw5/operator/ui_loot_operator_east_cdl_female_faze_lg.png","mw5/operator/ui_loot_operator_east_cdl_female_guerrillas_lg.png","mw5/operator/ui_loot_operator_east_cdl_female_legion_lg.png","mw5/operator/ui_loot_operator_east_cdl_female_mutineers_lg.png","mw5/operator/ui_loot_operator_east_cdl_female_optic_lg.png","mw5/operator/ui_loot_operator_east_cdl_female_ravens_lg.png","mw5/operator/ui_loot_operator_east_cdl_female_rokkr_lg.png","mw5/operator/ui_loot_operator_east_cdl_female_subliners_lg.png","mw5/operator/ui_loot_operator_east_cdl_female_surge_lg.png","mw5/operator/ui_loot_operator_east_cdl_female_thieves_lg.png","mw5/operator/ui_loot_operator_east_cdl_female_ultra_lg.png","mw5/operator/ui_loot_operator_east_cdl_female_unbranded_lg.png"],
  "cdl_am":["mw5/operator/ui_loot_operator_east_cdl_male_breach_lg.png","mw5/operator/ui_loot_operator_east_cdl_male_faze_lg.png","mw5/operator/ui_loot_operator_east_cdl_male_guerrillas_lg.png","mw5/operator/ui_loot_operator_east_cdl_male_legion_lg.png","mw5/operator/ui_loot_operator_east_cdl_male_mutineers_lg.png","mw5/operator/ui_loot_operator_east_cdl_male_optic_lg.png","mw5/operator/ui_loot_operator_east_cdl_male_ravens_lg.png","mw5/operator/ui_loot_operator_east_cdl_male_rokkr_lg.png","mw5/operator/ui_loot_operator_east_cdl_male_subliners_lg.png","mw5/operator/ui_loot_operator_east_cdl_male_surge_lg.png","mw5/operator/ui_loot_operator_east_cdl_male_thieves_lg.png","mw5/operator/ui_loot_operator_east_cdl_male_ultra_lg.png","mw5/operator/ui_loot_operator_east_cdl_male_unbranded_lg.png"],
  "cdl_hf":["mw5/operator/ui_loot_operator_west_cdl_female_breach_lg.png","mw5/operator/ui_loot_operator_west_cdl_female_faze_lg.png","mw5/operator/ui_loot_operator_west_cdl_female_guerrillas_lg.png","mw5/operator/ui_loot_operator_west_cdl_female_legion_lg.png","mw5/operator/ui_loot_operator_west_cdl_female_mutineers_lg.png","mw5/operator/ui_loot_operator_west_cdl_female_optic_lg.png","mw5/operator/ui_loot_operator_west_cdl_female_ravens_lg.png","mw5/operator/ui_loot_operator_west_cdl_female_rokkr_lg.png","mw5/operator/ui_loot_operator_west_cdl_female_subliners_lg.png","mw5/operator/ui_loot_operator_west_cdl_female_surge_lg.png","mw5/operator/ui_loot_operator_west_cdl_female_thieves_lg.png","mw5/operator/ui_loot_operator_west_cdl_female_ultra_lg.png","mw5/operator/ui_loot_operator_west_cdl_female_unbranded_lg.png"],
  "cdl_hm":["mw5/operator/ui_loot_operator_west_cdl_male_breach_lg.png","mw5/operator/ui_loot_operator_west_cdl_male_faze_lg.png","mw5/operator/ui_loot_operator_west_cdl_male_guerrillas_lg.png","mw5/operator/ui_loot_operator_west_cdl_male_legion_lg.png","mw5/operator/ui_loot_operator_west_cdl_male_mutineers_lg.png","mw5/operator/ui_loot_operator_west_cdl_male_optic_lg.png","mw5/operator/ui_loot_operator_west_cdl_male_ravens_lg.png","mw5/operator/ui_loot_operator_west_cdl_male_rokkr_lg.png","mw5/operator/ui_loot_operator_west_cdl_male_subliners_lg.png","mw5/operator/ui_loot_operator_west_cdl_male_surge_lg.png","mw5/operator/ui_loot_operator_west_cdl_male_thieves_lg.png","mw5/operator/ui_loot_operator_west_cdl_male_ultra_lg.png","mw5/operator/ui_loot_operator_west_cdl_male_unbranded_lg.png"],
  "chuy":["mw5/operator/ui_loot_operator_west_chili_10_1_lg.png","mw5/operator/ui_loot_operator_west_chili_1_1_lg.png","mw5/operator/ui_loot_operator_west_chili_2_1_lg.png","mw5/operator/ui_loot_operator_west_chili_3_1_lg.png","mw5/operator/ui_loot_operator_west_chili_4_1_lg.png","mw5/operator/ui_loot_operator_west_chili_5_1_lg.png","mw5/operator/ui_loot_operator_west_chili_6_1_lg.png","mw5/operator/ui_loot_operator_west_chili_7_1_lg.png","mw5/operator/ui_loot_operator_west_chili_7_2_lg.png","mw5/operator/ui_loot_operator_west_chili_8_1_lg.png","mw5/operator/ui_loot_operator_west_chili_8_2_lg.png","mw5/operator/ui_loot_operator_west_chili_9_1_lg.png"],
  "conor":["mw5/operator/ui_loot_operator_east_conor_1_1_lg.png","mw5/operator/ui_loot_operator_east_conor_2_1_lg.png","mw5/operator/ui_loot_operator_east_conor_3_1_lg.png","mw5/operator/ui_loot_operator_east_conor_5_1_lg.png","mw5/operator/ui_loot_operator_east_conor_6_1_lg.png","mw5/operator/ui_loot_operator_east_conor_8_1_lg.png"],
  "farah":["mw5/operator/ui_loot_operator_west_farah_1_1_lg.png","mw5/operator/ui_loot_operator_west_farah_1_2_lg.png","mw5/operator/ui_loot_operator_west_farah_2_1_lg.png","mw5/operator/ui_loot_operator_west_farah_convoy_bc_lg.png","mw5/operator/ui_loot_operator_west_farah_convoy_lg.png"],
  "fender":["mw5/operator/ui_loot_operator_west_fender_1_1_lg.png","mw5/operator/ui_loot_operator_west_fender_2_1_lg.png","mw5/operator/ui_loot_operator_west_fender_4_1_lg.png","mw5/operator/ui_loot_operator_west_fender_5_1_lg.png","mw5/operator/ui_loot_operator_west_fender_6_1_lg.png","mw5/operator/ui_loot_operator_west_fender_7_1_lg.png","mw5/operator/ui_loot_operator_west_fender_8_1_lg.png","mw5/operator/ui_loot_operator_west_fender_9_1_lg.png"],
  "gaz":[         "mw5/operator/ui_loot_operator_west_kyle_highrise_lg.png",
                  "mw5/operator/ui_loot_operator_west_kyle_highrise_1_2_lg.png",
                  "mw5/operator/ui_loot_operator_west_kyle_con_lg.png",
                  "mw5/operator/ui_loot_operator_west_kyle_mar_lg.png",
                  "mw5/operator/ui_loot_operator_west_kyle_int_lg.png"],
  "ghost":[       "mw5/operator/ui_loot_operator_west_ghost_1_1_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_2_1_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_3_1_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_3_2_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_4_1_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_5_1_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_6_1_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_7_1_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_8_1_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_9_1_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_9_2_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_10_1_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_11_1_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_12_1_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_desert_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_desert_1_2_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_nightwar_lg.png",
                  "mw5/operator/ui_loot_operator_west_ghost_nightwar_1_2_lg.png"],
  "graves":["mw5/operator/ui_loot_operator_east_graves_pmc_bc_lg.png","mw5/operator/ui_loot_operator_east_graves_pmc_lg.png","mw5/operator/ui_loot_operator_east_graves_sc_bc_lg.png","mw5/operator/ui_loot_operator_east_graves_sc_lg.png"],
  "gromsko":["mw5/operator/ui_loot_operator_west_gromsko_4_1_lg.png","mw5/operator/ui_loot_operator_west_gromsko_5_1_lg.png"],
  "gus":["mw5/operator/ui_loot_operator_west_gus_1_1_lg.png","mw5/operator/ui_loot_operator_west_gus_2_1_lg.png","mw5/operator/ui_loot_operator_west_gus_3_1_lg.png","mw5/operator/ui_loot_operator_west_gus_4_1_lg.png","mw5/operator/ui_loot_operator_west_gus_5_1_lg.png","mw5/operator/ui_loot_operator_west_gus_5_2_lg.png","mw5/operator/ui_loot_operator_west_gus_6_1_lg.png","mw5/operator/ui_loot_operator_west_gus_6_2_lg.png","mw5/operator/ui_loot_operator_west_gus_7_1_lg.png","mw5/operator/ui_loot_operator_west_gus_8_1_lg.png"],
  "homelander":["mw5/operator/ui_loot_operator_east_homelander_1_1_lg.png"],
  "horangi":["mw5/operator/ui_loot_operator_east_horangi_2_1_lg.png","mw5/operator/ui_loot_operator_east_horangi_3_1_lg.png","mw5/operator/ui_loot_operator_east_horangi_4_1_lg.png","mw5/operator/ui_loot_operator_east_horangi_5_1_lg.png","mw5/operator/ui_loot_operator_east_horangi_6_1_lg.png","mw5/operator/ui_loot_operator_east_horangi_7_1_lg.png","mw5/operator/ui_loot_operator_east_horangi_8_1_lg.png","mw5/operator/ui_loot_operator_east_horangi_8_2_lg.png"],
  "hutch":["mw5/operator/ui_loot_operator_west_hutch_10_1_lg.png","mw5/operator/ui_loot_operator_west_hutch_1_1_lg.png","mw5/operator/ui_loot_operator_west_hutch_2_1_lg.png","mw5/operator/ui_loot_operator_west_hutch_3_1_lg.png","mw5/operator/ui_loot_operator_west_hutch_4_1_lg.png","mw5/operator/ui_loot_operator_west_hutch_5_1_lg.png","mw5/operator/ui_loot_operator_west_hutch_6_1_lg.png","mw5/operator/ui_loot_operator_west_hutch_7_1_lg.png","mw5/operator/ui_loot_operator_west_hutch_8_1_lg.png"],
  "inarius":["mw5/operator/ui_loot_operator_west_inarius_1_1_lg.png"],
  "io":["mw5/operator/ui_loot_operator_west_blackcell_2_1_lg.png"],
  "izzy":["mw5/operator/ui_loot_operator_east_anime_1_1_lg.png"],
  "kevin_durant":["mw5/operator/ui_loot_operator_west_kevin_durant_1_1_lg.png"],
  "kleo":["mw5/operator/ui_loot_operator_west_kleo_1_1_lg.png","mw5/operator/ui_loot_operator_west_kleo_1_2_lg.png","mw5/operator/ui_loot_operator_west_kleo_1_3_lg.png","mw5/operator/ui_loot_operator_west_kleo_2_1_lg.png","mw5/operator/ui_loot_operator_west_kleo_3_1_lg.png","mw5/operator/ui_loot_operator_west_kleo_4_1_lg.png","mw5/operator/ui_loot_operator_west_kleo_5_1_lg.png","mw5/operator/ui_loot_operator_west_kleo_6_1_lg.png","mw5/operator/ui_loot_operator_west_kleo_7_1_lg.png","mw5/operator/ui_loot_operator_west_kleo_7_2_lg.png","mw5/operator/ui_loot_operator_west_kleo_8_1_lg.png"],
  "konig":["mw5/operator/ui_loot_operator_east_koenig_10_1_lg.png","mw5/operator/ui_loot_operator_east_koenig_11_1_lg.png","mw5/operator/ui_loot_operator_east_koenig_12_1_lg.png","mw5/operator/ui_loot_operator_east_koenig_12_2_lg.png","mw5/operator/ui_loot_operator_east_koenig_4_1_lg.png","mw5/operator/ui_loot_operator_east_koenig_5_1_lg.png","mw5/operator/ui_loot_operator_east_koenig_6_1_lg.png","mw5/operator/ui_loot_operator_east_koenig_7_1_lg.png","mw5/operator/ui_loot_operator_east_koenig_8_1_lg.png"],
  "lara":["mw5/operator/ui_loot_operator_west_lc_1_1_lg.png"],
  "lilith":["mw5/operator/ui_loot_operator_east_lilith_1_1_lg.png"],
  "luna":["mw5/operator/ui_loot_operator_west_luna_3_1_lg.png"],
  "messi":["mw5/operator/ui_loot_operator_west_messi_1_1_lg.png"],
  "mila":["mw5/operator/ui_loot_operator_east_bullitt_1_1_lg.png"],
  "neymar":["mw5/operator/ui_loot_operator_east_neymar_1_1.png","mw5/operator/ui_loot_operator_east_neymar_1_1_lg.png"],
  "nick_mercs":["mw5/operator/ui_loot_operator_east_nick_mercs_1_1.png","mw5/operator/ui_loot_operator_east_nick_mercs_1_1_lg.png","mw5/operator/ui_loot_operator_east_nick_mercs_2_1.png","mw5/operator/ui_loot_operator_east_nick_mercs_2_1_lg.png"],
  "nicki":["mw5/operator/ui_loot_operator_east_nima_1_1_lg.png"],
  "nova":["mw5/operator/ui_loot_operator_east_nova_1_1_lg.png","mw5/operator/ui_loot_operator_east_nova_2_1_lg.png","mw5/operator/ui_loot_operator_east_nova_3_1_lg.png","mw5/operator/ui_loot_operator_east_nova_4_1_lg.png","mw5/operator/ui_loot_operator_east_nova_6_1_lg.png","mw5/operator/ui_loot_operator_east_nova_7_1_lg.png","mw5/operator/ui_loot_operator_east_nova_8_1_lg.png","mw5/operator/ui_loot_operator_east_nova_cq_lg.png"],
  "oni":["mw5/operator/ui_loot_operator_east_oni_1_1_lg.png","mw5/operator/ui_loot_operator_east_oni_2_1_lg.png","mw5/operator/ui_loot_operator_east_oni_3_1_lg.png","mw5/operator/ui_loot_operator_east_oni_4_1_lg.png","mw5/operator/ui_loot_operator_east_oni_5_1_lg.png","mw5/operator/ui_loot_operator_east_oni_6_1_lg.png","mw5/operator/ui_loot_operator_east_oni_7_1_lg.png"],
  "oz":["mw5/operator/ui_loot_operator_east_oz_2_1_lg.png","mw5/operator/ui_loot_operator_east_oz_2_2_lg.png","mw5/operator/ui_loot_operator_east_zoltan_1_1_lg.png","mw5/operator/ui_loot_operator_east_zoltan_1_2_lg.png"],
  "pogba":["mw5/operator/ui_loot_operator_west_pogba_1_1_lg.png"],
  "price":[       "mw5/operator/ui_loot_operator_west_price_1_1_lg.png",
                  "mw5/operator/ui_loot_operator_west_price_2_1_lg.png",
                  "mw5/operator/ui_loot_operator_west_price_3_1_lg.png",
                  "mw5/operator/ui_loot_operator_west_price_desert_lg.png",
                  "mw5/operator/ui_loot_operator_west_price_highrise_lg.png",
                  "mw5/operator/ui_loot_operator_west_price_intercept_lg.png"],
  "ranger_kt":["mw5/operator/ui_loot_operator_east_milsim_1_1_lg.png","mw5/operator/ui_loot_operator_east_milsim_1_2_lg.png","mw5/operator/ui_loot_operator_east_milsim_1_3_lg.png","mw5/operator/ui_loot_operator_east_milsim_2_1_lg.png","mw5/operator/ui_loot_operator_east_milsim_3_1_lg.png","mw5/operator/ui_loot_operator_east_milsim_4_1_lg.png"],
  "ranger_sg":["mw5/operator/ui_loot_operator_west_milsim_1_1_lg.png","mw5/operator/ui_loot_operator_west_milsim_1_2_lg.png","mw5/operator/ui_loot_operator_west_milsim_1_3_lg.png","mw5/operator/ui_loot_operator_west_milsim_2_1_lg.png","mw5/operator/ui_loot_operator_west_milsim_3_1_lg.png","mw5/operator/ui_loot_operator_west_milsim_4_1_lg.png","mw5/operator/ui_loot_operator_west_milsim_anti_terror_1_1_lg.png"],
  "reyes":["mw5/operator/ui_loot_operator_west_reyes_1_1_lg.png","mw5/operator/ui_loot_operator_west_reyes_2_1_lg.png","mw5/operator/ui_loot_operator_west_reyes_3_1_lg.png","mw5/operator/ui_loot_operator_west_reyes_4_1_lg.png","mw5/operator/ui_loot_operator_west_reyes_5_1_lg.png","mw5/operator/ui_loot_operator_west_reyes_6_1_lg.png","mw5/operator/ui_loot_operator_west_reyes_7_1_lg.png","mw5/operator/ui_loot_operator_west_reyes_8_1_lg.png"],
  "ronin":["mw5/operator/ui_loot_operator_west_ronin_1_1_lg.png","mw5/operator/ui_loot_operator_west_ronin_2_1_lg.png","mw5/operator/ui_loot_operator_west_ronin_3_1_lg.png","mw5/operator/ui_loot_operator_west_ronin_4_1_lg.png","mw5/operator/ui_loot_operator_west_ronin_5_1_lg.png"],
  "sardaukar":["mw5/operator/ui_loot_operator_east_dune_1_1_lg.png"],
  "shredder":["mw5/operator/ui_loot_operator_east_shredder_1_1_lg.png"],
  "skeletor":["mw5/operator/ui_loot_operator_east_skeletor_1_1_lg.png","mw5/operator/ui_loot_operator_east_skeletor_2_1_lg.png","mw5/operator/ui_loot_operator_east_skeletor_3_1_lg.png"],
  "snoop":["mw5/operator/ui_loot_operator_west_snoop_1_1_lg.png","mw5/operator/ui_loot_operator_west_snoop_1_2_lg.png"],
  "soap":["mw5/operator/ui_loot_operator_west_soap_1_1_lg.png","mw5/operator/ui_loot_operator_west_soap_2_1_lg.png","mw5/operator/ui_loot_operator_west_soap_3_1_lg.png","mw5/operator/ui_loot_operator_west_soap_4_1_lg.png","mw5/operator/ui_loot_operator_west_soap_4_2_lg.png","mw5/operator/ui_loot_operator_west_soap_mexico_lg.png","mw5/operator/ui_loot_operator_west_soap_nightwar_1_2_lg.png","mw5/operator/ui_loot_operator_west_soap_nightwar_lg.png"],
  "spawn":["mw5/operator/ui_loot_operator_west_spawn_1_1_lg.png","mw5/operator/ui_loot_operator_west_spawn_1_2_lg.png","mw5/operator/ui_loot_operator_west_spawn_2_1_lg.png","mw5/operator/ui_loot_operator_west_spawn_2_2_lg.png"],
  "starlight":["mw5/operator/ui_loot_operator_west_starlight_1_1_lg.png"],
  "stiletto":["mw5/operator/ui_loot_operator_east_stiletto_1_1_lg.png","mw5/operator/ui_loot_operator_east_stiletto_2_1_lg.png","mw5/operator/ui_loot_operator_east_stiletto_8_1.png","mw5/operator/ui_loot_operator_west_stiletto_3_1_lg.png","mw5/operator/ui_loot_operator_west_stiletto_4_1_lg.png","mw5/operator/ui_loot_operator_west_stiletto_7_1_lg.png","mw5/operator/ui_loot_operator_west_stiletto_9_1_lg.png","mw5/operator/ui_loot_operator_west_stiletto_9_2_lg.png"],
  "tim":["mw5/operator/ui_loot_operator_west_tim_1_1_lg.png"],
  "v4l3ria":["mw5/operator/ui_loot_operator_east_valeria_1_1_lg.png","mw5/operator/ui_loot_operator_east_valeria_1_2_lg.png","mw5/operator/ui_loot_operator_east_valeria_2_1_lg.png","mw5/operator/ui_loot_operator_east_valeria_2_2_lg.png","mw5/operator/ui_loot_operator_east_valeria_3_1_lg.png","mw5/operator/ui_loot_operator_east_valeria_4_1_lg.png","mw5/operator/ui_loot_operator_east_valeria_5_1_lg.png","mw5/operator/ui_loot_operator_east_valeria_5_2_lg.png","mw5/operator/ui_loot_operator_east_valeria_6_1_lg.png","mw5/operator/ui_loot_operator_east_valeria_7_1_lg.png","mw5/operator/ui_loot_operator_east_valeria_8_1_lg.png"],
  "vega":["mw5/operator/ui_loot_operator_east_blair_1_1_lg.png","mw5/operator/ui_loot_operator_east_blair_2_1_lg.png","mw5/operator/ui_loot_operator_east_blair_3_1_lg.png","mw5/operator/ui_loot_operator_east_blair_3_2_lg.png"],
  "zero":["mw5/operator/ui_loot_operator_east_jinn_1_1_lg.png","mw5/operator/ui_loot_operator_east_jinn_2_1_lg.png","mw5/operator/ui_loot_operator_east_jinn_4_1_lg.png","mw5/operator/ui_loot_operator_east_jinn_4_2_lg.png","mw5/operator/ui_loot_operator_east_zero_3_1_lg.png","mw5/operator/ui_loot_operator_east_zero_4_1_lg.png","mw5/operator/ui_loot_operator_east_zero_4_2_lg.png","mw5/operator/ui_loot_operator_east_zero_5_1_lg.png","mw5/operator/ui_loot_operator_east_zero_6_1_lg.png","mw5/operator/ui_loot_operator_east_zero_7_1_lg.png"],
  "zeus":["mw5/operator/ui_loot_operator_east_zeus_1_1_lg.png","mw5/operator/ui_loot_operator_east_zeus_2_1_lg.png","mw5/operator/ui_loot_operator_east_zeus_3_1_lg.png","mw5/operator/ui_loot_operator_east_zeus_4_1_lg.png"],
  "zimo":["mw5/operator/ui_loot_operator_west_zimo_1_1_lg.png","mw5/operator/ui_loot_operator_west_zimo_1_2_lg.png","mw5/operator/ui_loot_operator_west_zimo_1_3_lg.png","mw5/operator/ui_loot_operator_west_zimo_1_5_lg.png","mw5/operator/ui_loot_operator_west_zimo_3_1_lg.png","mw5/operator/ui_loot_operator_west_zimo_4_1_lg.png"],
};

const OPERATORS = [
  { id:"ranger_sg", name:"Ranger",      icon:"mw5/icons/ui_operator_west_milsim_portrait_1_1_lg.png",        internalName:"milsim",       appearances:[{ game:"mw5", faction:"SpecGru",  season:null }] },
  { id:"ghost",     name:"Ghost",       icon:"mw5/icons/ui_operator_west_ghost_portrait_1_1_lg.png",       internalName:"ghost",        bio:{ citizenship:"United Kingdom", language:"English", status:"Active", background:"Simon Riley, known as Ghost, is a British special forces operator assigned to Task Force 141. Renowned for his skull-painted balaclava and cold professionalism, Ghost serves as Price's most trusted lieutenant. His past is marked by tragedy and betrayal, forging him into one of the most formidable operators in the field." }, appearances:[{ game:"mw5", faction:"SpecGru",         season:null }] },
  { id:"price",     name:"Price",       icon:"mw5/icons/ui_operator_west_price_portrait_1_1_lg.png",       internalName:"price",        bio:{ citizenship:"United Kingdom", language:"English", status:"Active", background:"Captain John Price is a veteran SAS officer and commander of Task Force 141. With decades of combat experience spanning multiple theatres, Price is one of the most decorated and feared operators in Western special forces. His calm under fire and tactical genius have saved countless lives." }, appearances:[{ game:"mw5", faction:"SpecGru",         season:null }] },
  { id:"gaz",       name:"Gaz",         icon:"mw5/icons/ui_operator_west_gaz_con_portrait_1_1_lg.png",    internalName:"gaz_con",      bio:{ citizenship:"United Kingdom", language:"English", status:"Active", background:"Sergeant Kyle Garrick, callsign Gaz, is a British SAS operator and core member of Task Force 141. A skilled marksman and close-quarters combatant, Gaz brings sharp instincts and easy rapport to the team. His loyalty to Price and the mission is absolute." }, appearances:[{ game:"mw5", faction:"SpecGru",         season:"S1" }] },
  { id:"soap",      name:"Soap",        icon:"mw5/icons/ui_operator_west_soap_portrait_1_1_lg.png",        internalName:"soap",         bio:{ citizenship:"United Kingdom", language:"English", status:"Active", background:"Sergeant John MacTavish, known as Soap, is a Scottish SAS operator handpicked by Captain Price for Task Force 141. Exceptionally capable in both close-quarters combat and explosives, Soap's natural talent and aggression make him one of the unit's most effective assets." }, appearances:[{ game:"mw5", faction:"SpecGru",         season:null }] },
  { id:"domino",    name:"Domino",      appearances:[{ game:"bo6", faction:"Warzone",          season:"S3" }] },
  { id:"ronin",     name:"Ronin",       icon:"mw5/icons/ui_operator_west_ronin_portrait_1_1_lg.png",       internalName:"ronin",        appearances:[{ game:"mw5", faction:"SpecGru",         season:"S2" }] },
  { id:"alex",      name:"Alex",        icon:"mw5/icons/ui_operator_west_alex_portrait_1_1_lg.png",        internalName:"alex",         appearances:[{ game:"mw5", faction:"SpecGru",         season:"S3" }] },
  { id:"woods",     name:"Woods",       appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:null },{ game:"mw6", faction:"SpecGru", season:"S4" }] },
  { id:"nikto",     name:"Nikto",       icon:"mw5/icons/ui_operator_east_nikto_portrait_1_1_lg.png",       internalName:"nikto",        appearances:[{ game:"mw5", faction:"KorTac",          season:"S4" }] },
  { id:"mace",      name:"Mace",        icon:"mw5/icons/ui_operator_east_mace_portrait_1_1_lg.png",        internalName:"mace",         appearances:[{ game:"mw5", faction:"KorTac",          season:"S5" },{ game:"bo6", faction:"Crimson One", season:"S3" }] },
  { id:"farah",     name:"Farah",       icon:"mw5/icons/ui_operator_west_farah_portrait_1_1_lg.png",       internalName:"farah",        appearances:[{ game:"mw5", faction:"SpecGru",         season:null }] },
  { id:"roze",      name:"Roze",        icon:"mw5/icons/ui_operator_east_roze_portrait_1_1_lg.png",        internalName:"roze",         appearances:[{ game:"mw5", faction:"KorTac",          season:null }] },
  { id:"velikan",   name:"Velikan",     icon:"mw5/icons/ui_operator_east_velikan_portrait_1_1_lg.png",     internalName:"velikan",      appearances:[{ game:"mw5", faction:"KorTac",          season:"S5" }] },
  { id:"park",      name:"Park",        appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:null }] },
  { id:"adler",     name:"Adler",       appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:null }] },
  { id:"sims",      name:"Sims",        appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S5" }] },
  { id:"weaver",    name:"Weaver",      appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:null },{ game:"bo7", faction:"JSOC", season:null }] },
  { id:"hudson",    name:"Hudson",      appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S3" }] },
  { id:"stone",     name:"Stone",       appearances:[{ game:"bo6", faction:"Crimson One",     season:null }] },
  { id:"stitch",    name:"Stitch",      appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S4" }] },
  { id:"snoop",     name:"Snoop Dogg",  icon:"mw5/icons/ui_operator_west_snoop_portrait_1_1_lg.png",       internalName:"snoop",        appearances:[{ game:"mw5", faction:"SpecGru",         season:"S5" }] },
  { id:"t800",      name:"T-800",       appearances:[{ game:"bo6", faction:"Crimson One",     season:"S2" }] },
  { id:"chuy",      name:"Jesus Ordaz", alias:"Chuy", icon:"mw5/icons/ui_operator_west_chili_portrait_1_1_lg.png", internalName:"chili", appearances:[{ game:"mw5", faction:"SpecGru",  season:null }] },
  { id:"gus",       name:"Gus",         icon:"mw5/icons/ui_operator_west_gus_portrait_1_1_lg.png",         internalName:"gus",          appearances:[{ game:"mw5", faction:"SpecGru",  season:null }] },
  { id:"zimo",      name:"Zimo",        icon:"mw5/icons/ui_operator_west_zimo_portrait_1_1_lg.png",         internalName:"zimo",         appearances:[{ game:"mw5", faction:"SpecGru",  season:null }] },
  { id:"kleo",      name:"Kleo",        icon:"mw5/icons/ui_operator_west_kleo_portrait_1_1_lg.png",         internalName:"kleo",         appearances:[{ game:"mw5", faction:"SpecGru",  season:null }] },
  { id:"nova",      name:"Nova",        icon:"mw5/icons/ui_operator_west_nova_portrait_1_1_lg.png",         internalName:"nova",         appearances:[{ game:"mw5", faction:"SpecGru",  season:null }] },
  { id:"gromsko",   name:"Gromsko",     icon:"mw5/icons/ui_operator_west_gromsko_portrait_3_1_lg.png",     internalName:"gromsko",      appearances:[{ game:"mw5", faction:"SpecGru",  season:null }] },
  { id:"reyes",     name:"Reyes",       icon:"mw5/icons/ui_operator_west_reyes_portrait_1_1_lg.png",       internalName:"reyes",        appearances:[{ game:"mw5", faction:"SpecGru",  season:null }] },
  { id:"luna",      name:"Luna",        icon:"mw5/icons/ui_operator_west_luna_portrait_1_1_lg.png",         internalName:"luna",         appearances:[{ game:"mw5", faction:"SpecGru",  season:null }] },
  { id:"pogba",     name:"Paul Pogba",  icon:"mw5/icons/ui_operator_west_pogba_portrait_1_1_lg.png",       internalName:"pogba",        appearances:[{ game:"mw5", faction:"SpecGru",  season:"S1" }] },
  { id:"messi",     name:"Messi",       icon:"mw5/icons/ui_operator_west_messi_portrait_1_1_lg.png",       internalName:"messi",        appearances:[{ game:"mw5", faction:"SpecGru",  season:"S1" }] },
  { id:"alejandro", name:"Alejandro",   icon:"mw5/icons/ui_operator_west_alejandro_portrait_1_1_lg.png",   internalName:"alejandro",    appearances:[{ game:"mw5", faction:"SpecGru",  season:"S3" }] },
  { id:"durant",    name:"Kevin Durant",icon:"mw5/icons/ui_operator_west_kevin_durant_portrait_1_1_lg.png", internalName:"kevin_durant", appearances:[{ game:"mw5", faction:"SpecGru",  season:"S3" }] },
  { id:"tim",       name:"TimTheTatman",icon:"mw5/icons/ui_operator_west_tim_portrait_1_1_lg.png",          internalName:"tim",          appearances:[{ game:"mw5", faction:"SpecGru",  season:"S3" }] },
  { id:"io",        name:"Io",          icon:"mw5/icons/ui_operator_west_blackcell_portrait_2_1_lg.png", internalName:"blackcell", appearances:[{ game:"mw5", faction:"SpecGru",  season:"S4" }] },
  { id:"butch",     name:"Butch",       icon:"mw5/icons/ui_operator_west_freedom_portrait_2_1_lg.png", internalName:"freedom", appearances:[{ game:"mw5", faction:"SpecGru",  season:"S4" }] },
  { id:"starlight", name:"Starlight",   icon:"mw5/icons/ui_operator_west_starlight_portrait_1_1_lg.png",   internalName:"starlight",    appearances:[{ game:"mw5", faction:"SpecGru",  season:"S4" }] },
  { id:"arthur_mw5",name:"Arthur",      icon:"mw5/icons/ui_operator_west_arthur_portrait_1_1_lg.png",      internalName:"arthur",       appearances:[{ game:"mw5", faction:"SpecGru",  season:"S5" }] },
  { id:"lara",      name:"Lara Croft",  icon:"mw5/icons/ui_operator_west_lc_portrait_1_1_lg.png",          internalName:"lc",           appearances:[{ game:"mw5", faction:"SpecGru",  season:"S5" }] },
  { id:"spawn",     name:"Spawn",       icon:"mw5/icons/ui_operator_west_spawn_portrait_2_1_lg.png",        internalName:"spawn",        appearances:[{ game:"mw5", faction:"SpecGru",  season:"S6" }] },
  { id:"alucard",   name:"Alucard",     icon:"mw5/icons/ui_operator_west_hellsing_portrait_1_1_lg.png",    internalName:"hellsing",     appearances:[{ game:"mw5", faction:"SpecGru",  season:"S6" }] },
  { id:"ash",       name:"Ash Williams",icon:"mw5/icons/ui_operator_west_ash_portrait_1_1_lg.png",          internalName:"ash",          appearances:[{ game:"mw5", faction:"SpecGru",  season:"S6" }] },
  { id:"inarius",   name:"Inarius",     icon:"mw5/icons/ui_operator_west_inarius_portrait_1_1_lg.png",     internalName:"inarius",      appearances:[{ game:"mw5", faction:"SpecGru",  season:"S6" }] },
  { id:"cdl_hf",    name:"CDL Home Female", icon:"mw5/icons/ui_operator_west_cdl_home_female_portrait_1_1_lg.png", internalName:"cdl_home_female", appearances:[{ game:"mw5", faction:"SpecGru",  season:null }] },
  { id:"cdl_hm",    name:"CDL Home Male",   icon:"mw5/icons/ui_operator_west_cdl_home_male_portrait_1_1_lg.png",   internalName:"cdl_home_male",   appearances:[{ game:"mw5", faction:"SpecGru",  season:null }] },
  { id:"ranger_kt", name:"Ranger",      icon:"mw5/icons/ui_operator_east_milsim_portrait_1_1_lg.png",        internalName:"milsim",       appearances:[{ game:"mw5", faction:"KorTac",   season:null }] },
  { id:"fender",    name:"Fender",      icon:"mw5/icons/ui_operator_east_fender_portrait_1_1_lg.png",      internalName:"fender",       appearances:[{ game:"mw5", faction:"KorTac",   season:null }] },
  { id:"konig",     name:"Konig",       icon:"mw5/icons/ui_operator_east_koenig_portrait_1_1_lg.png",      internalName:"koenig",       bio:{ citizenship:"Austria", language:"German", status:"Active", background:"König (age unknown) suffers from severe social anxiety. Unfortunately for him, it's hard to go unnoticed when you're the size of a mountain.\n\nBullied as a child, König found acceptance only when fighting — an activity at which he excelled. After volunteering for the military at 17, König was selected to an elite commando unit. While he'd hoped to join as a sniper, his size made concealment nearly impossible." }, appearances:[{ game:"mw5", faction:"KorTac",   season:null }] },
  { id:"calisto",   name:"Calisto",     icon:"mw5/icons/ui_operator_east_calisto_portrait_1_1_lg.png",     internalName:"calisto",      appearances:[{ game:"mw5", faction:"KorTac",   season:null }] },
  { id:"hutch",     name:"Hutch",       icon:"mw5/icons/ui_operator_east_hutch_portrait_1_1_lg.png",       internalName:"hutch",        appearances:[{ game:"mw5", faction:"KorTac",   season:null }] },
  { id:"horangi",   name:"Horangi",     icon:"mw5/icons/ui_operator_east_horangi_portrait_2_1_lg.png",     internalName:"horangi",      appearances:[{ game:"mw5", faction:"KorTac",   season:null }] },
  { id:"oni",       name:"Oni",         icon:"mw5/icons/ui_operator_east_oni_portrait_1_1_lg.png",          internalName:"oni",          appearances:[{ game:"mw5", faction:"KorTac",   season:null }] },
  { id:"zero",      name:"Zero",        icon:"mw5/icons/ui_operator_east_jinn_portrait_1_1_lg.png",        internalName:"jinn",       appearances:[{ game:"mw5", faction:"KorTac",   season:null }] },
  { id:"conor",     name:"Conor",       icon:"mw5/icons/ui_operator_east_conor_portrait_1_1_lg.png",       internalName:"conor",        appearances:[{ game:"mw5", faction:"KorTac",   season:null }] },
  { id:"aksel",     name:"Aksel",       icon:"mw5/icons/ui_operator_east_aksel_portrait_1_1_lg.png",       internalName:"aksel",        appearances:[{ game:"mw5", faction:"KorTac",   season:null }] },
  { id:"stiletto",  name:"Stiletto",    icon:"mw5/icons/ui_operator_east_stiletto_portrait_1_1_lg.png",    internalName:"stiletto",     appearances:[{ game:"mw5", faction:"KorTac",   season:null }] },
  { id:"zeus",      name:"Zeus",        icon:"mw5/icons/ui_operator_east_zeus_portrait_1_1_lg.png",         internalName:"zeus",         appearances:[{ game:"mw5", faction:"KorTac",   season:"S1" }] },
  { id:"neymar",    name:"Neymar Jr",   icon:"mw5/icons/ui_operator_east_neymar_portrait_1_1_lg.png",      internalName:"neymar",       appearances:[{ game:"mw5", faction:"KorTac",   season:"S1" }] },
  { id:"klaus_mw5", name:"Klaus",       icon:"mw5/icons/ui_operator_east_klaus_portrait_1_1_lg.png",       internalName:"klaus",        appearances:[{ game:"mw5", faction:"KorTac",   season:"S1" }] },
  { id:"shredder",  name:"Shredder",    icon:"mw5/icons/ui_operator_east_shredder_portrait_1_1_lg.png",    internalName:"shredder",     appearances:[{ game:"mw5", faction:"KorTac",   season:"S2" }] },
  { id:"valeria",   name:"Valeria",     icon:"mw5/icons/ui_operator_east_valeria_portrait_1_1_lg.png",     internalName:"valeria",      appearances:[{ game:"mw5", faction:"KorTac",   season:"S3" }] },
  { id:"atom",      name:"Atom",        icon:"mw5/icons/ui_operator_east_black_cell_portrait_1_1_lg.png",  internalName:"black_cell", appearances:[{ game:"mw5", faction:"KorTac",   season:"S3" }] },
  { id:"nickmercs", name:"Nickmercs",   icon:"mw5/icons/ui_operator_east_nick_mercs_portrait_1_1_lg.png",  internalName:"nick_mercs",   appearances:[{ game:"mw5", faction:"KorTac",   season:"S3" }] },
  { id:"vega",      name:"Vega",        icon:"mw5/icons/ui_operator_east_blair_portrait_1_1_lg.png",       internalName:"blair",      appearances:[{ game:"mw5", faction:"KorTac",   season:"S4" }] },
  { id:"homelander",name:"Homelander",  icon:"mw5/icons/ui_operator_east_homelander_portrait_1_1_lg.png",  internalName:"homelander",   appearances:[{ game:"mw5", faction:"KorTac",   season:"S4" }] },
  { id:"blacknoir", name:"Black Noir",  icon:"mw5/icons/ui_operator_east_blacknoir_portrait_1_1_lg.png",   internalName:"blacknoir",    appearances:[{ game:"mw5", faction:"KorTac",   season:"S4" }] },
  { id:"izzy",      name:"Izzy",        icon:"mw5/icons/ui_operator_east_anime_portrait_1_1_lg.png",       internalName:"anime",      appearances:[{ game:"mw5", faction:"KorTac",   season:"S4" }] },
  { id:"oz",        name:"Oz",          icon:"mw5/icons/ui_operator_east_zoltan_portrait_1_1_lg.png",      internalName:"zoltan",     appearances:[{ game:"mw5", faction:"KorTac",   season:"S5" }] },
  { id:"graves",    name:"Graves",      icon:"mw5/icons/ui_operator_east_graves_portrait_pmc_lg.png",       internalName:"graves",       appearances:[{ game:"mw5", faction:"KorTac",   season:"S5" }] },
  { id:"mila",      name:"Mila",        icon:"mw5/icons/ui_operator_east_bullitt_portrait_1_1_lg.png",     internalName:"bullitt",    appearances:[{ game:"mw5", faction:"KorTac",   season:"S5" }] },
  { id:"nicki",     name:"Nicki Minaj", icon:"mw5/icons/ui_operator_east_nima_portrait_1_1_lg.png",        internalName:"nima",       appearances:[{ game:"mw5", faction:"KorTac",   season:"S5" }] },
  { id:"21savage",  name:"21 Savage",   icon:"mw5/icons/ui_operator_east_tws_portrait_1_1_lg.png",         internalName:"tws",        appearances:[{ game:"mw5", faction:"KorTac",   season:"S5" }] },
  { id:"v4l3ria",   name:"V4L3RIA",     icon:"mw5/icons/ui_operator_east_valeria_portrait_8_1_lg.png",     internalName:"valeria",    appearances:[{ game:"mw5", faction:"KorTac",   season:"S6" }] },
  { id:"lilith",    name:"Lilith",      icon:"mw5/icons/ui_operator_east_lilith_portrait_1_1_lg.png",       internalName:"lilith",       appearances:[{ game:"mw5", faction:"KorTac",   season:"S6" }] },
  { id:"skeletor",  name:"Skeletor",    icon:"mw5/icons/ui_operator_east_skeletor_portrait_1_1_lg.png",     internalName:"skeletor",     appearances:[{ game:"mw5", faction:"KorTac",   season:"S6" }] },
  { id:"sardaukar", name:"Sardaukar",   icon:"mw5/icons/ui_operator_east_dune_portrait_1_1_lg.png",         internalName:"dune",         appearances:[{ game:"mw5", faction:"KorTac",   season:"S6" }] },
  { id:"cdl_af",    name:"CDL Away Female", icon:"mw5/icons/ui_operator_east_cdl_away_female_portrait_1_1_lg.png", internalName:"cdl_away_female", appearances:[{ game:"mw5", faction:"KorTac",   season:null }] },
  { id:"cdl_am",    name:"CDL Away Male",   icon:"mw5/icons/ui_operator_east_cdl_away_male_portrait_1_1_lg.png",   internalName:"cdl_away_male",   appearances:[{ game:"mw5", faction:"KorTac",   season:null }] },
  { id:"blueprint",   name:"Blueprint",    appearances:[{ game:"mw6", faction:"SpecGru", season:null }] },
  { id:"rocket",      name:"Rocket",       appearances:[{ game:"mw6", faction:"SpecGru", season:null }] },
  { id:"byline",      name:"Byline",       appearances:[{ game:"mw6", faction:"SpecGru", season:null }] },
  { id:"scorch",      name:"Scorch",       appearances:[{ game:"mw6", faction:"SpecGru", season:null }] },
  { id:"ripper",      name:"Ripper",       appearances:[{ game:"mw6", faction:"SpecGru", season:null }] },
  { id:"pathfinder",  name:"Pathfinder",   appearances:[{ game:"mw6", faction:"SpecGru", season:null }] },
  { id:"warrior",     name:"Warrior",      appearances:[{ game:"mw6", faction:"SpecGru", season:null }] },
  { id:"riptide",     name:"Riptide",      appearances:[{ game:"mw6", faction:"SpecGru", season:null }] },
  { id:"bbq",         name:"BBQ",          appearances:[{ game:"mw6", faction:"SpecGru", season:null }] },
  { id:"jabber",      name:"Jabber",       appearances:[{ game:"mw6", faction:"SpecGru", season:null }] },
  { id:"jet",         name:"Jet",          appearances:[{ game:"mw6", faction:"SpecGru", season:null }] },
  { id:"lockpick",    name:"Lockpick",     appearances:[{ game:"mw6", faction:"SpecGru", season:null }] },
  { id:"abolisher",   name:"Abolisher",    appearances:[{ game:"mw6", faction:"SpecGru", season:"S1" }] },
  { id:"paulatreides",name:"Paul Atreides",appearances:[{ game:"mw6", faction:"SpecGru", season:"S1" }] },
  { id:"atrain",      name:"A-Train",      appearances:[{ game:"mw6", faction:"SpecGru", season:"S1" }] },
  { id:"laswell",     name:"Laswell",      appearances:[{ game:"mw6", faction:"SpecGru", season:"S2" }] },
  { id:"rickgrimes",  name:"Rick Grimes",  appearances:[{ game:"mw6", faction:"SpecGru", season:"S2" }] },
  { id:"johndoe",     name:"John Doe",     appearances:[{ game:"mw6", faction:"SpecGru", season:"S2" }] },
  { id:"chong",       name:"Chong",        appearances:[{ game:"mw6", faction:"SpecGru", season:"S3" }] },
  { id:"dbook",       name:"D Book",       appearances:[{ game:"mw6", faction:"SpecGru", season:"S3" }] },
  { id:"dupe",        name:"Dupe",         appearances:[{ game:"mw6", faction:"SpecGru", season:"S4" }] },
  { id:"codyrhodes",  name:"Cody Rhodes",  appearances:[{ game:"mw6", faction:"SpecGru", season:"S5" }] },
  { id:"reymysterio", name:"Rey Mysterio", appearances:[{ game:"mw6", faction:"SpecGru", season:"S5" }] },
  { id:"thecrow",     name:"The Crow",     appearances:[{ game:"mw6", faction:"SpecGru", season:"S5" }] },
  { id:"slamfire",    name:"Slamfire",     appearances:[{ game:"mw6", faction:"SpecGru", season:"S6" }] },
  { id:"daryldixon",  name:"Daryl Dixon",  appearances:[{ game:"mw6", faction:"SpecGru", season:"S6" }] },
  { id:"sam_mw6",     name:"Sam",          appearances:[{ game:"mw6", faction:"SpecGru", season:"S6" }] },
  { id:"blaze",       name:"Blaze",        appearances:[{ game:"mw6", faction:"KorTac",  season:null }] },
  { id:"thirst",      name:"Thirst",       appearances:[{ game:"mw6", faction:"KorTac",  season:null }] },
  { id:"warden",      name:"Warden",       appearances:[{ game:"mw6", faction:"KorTac",  season:null }] },
  { id:"makarov",     name:"Makarov",      appearances:[{ game:"mw6", faction:"KorTac",  season:null }] },
  { id:"alpine",      name:"Alpine",       appearances:[{ game:"mw6", faction:"KorTac",  season:null }] },
  { id:"enigma",      name:"Enigma",       appearances:[{ game:"mw6", faction:"KorTac",  season:null }] },
  { id:"bantam",      name:"Bantam",       appearances:[{ game:"mw6", faction:"KorTac",  season:null }] },
  { id:"doc",         name:"Doc",          appearances:[{ game:"mw6", faction:"KorTac",  season:null }] },
  { id:"raptor",      name:"Raptor",       appearances:[{ game:"mw6", faction:"KorTac",  season:null }] },
  { id:"corso",       name:"Corso",        appearances:[{ game:"mw6", faction:"KorTac",  season:null }] },
  { id:"swagger",     name:"Swagger",      appearances:[{ game:"mw6", faction:"KorTac",  season:null }] },
  { id:"nolan",       name:"Nolan",        appearances:[{ game:"mw6", faction:"KorTac",  season:"S1" }] },
  { id:"dokkaebi",    name:"Dokkaebi",     appearances:[{ game:"mw6", faction:"KorTac",  season:"S1" }] },
  { id:"feydrautha",  name:"Feyd-Rautha",  appearances:[{ game:"mw6", faction:"KorTac",  season:"S1" }] },
  { id:"firecracker", name:"Firecracker",  appearances:[{ game:"mw6", faction:"KorTac",  season:"S1" }] },
  { id:"michonne",    name:"Michonne",     appearances:[{ game:"mw6", faction:"KorTac",  season:"S2" }] },
  { id:"banshee",     name:"Banshee",      appearances:[{ game:"mw6", faction:"KorTac",  season:"S3" }] },
  { id:"hush",        name:"Hush",         appearances:[{ game:"mw6", faction:"KorTac",  season:"S3" }] },
  { id:"stasis",      name:"Stasis",       appearances:[{ game:"mw6", faction:"KorTac",  season:"S3" }] },
  { id:"cheech",      name:"Cheech",       appearances:[{ game:"mw6", faction:"KorTac",  season:"S3" }] },
  { id:"hammer",      name:"Hammer",       appearances:[{ game:"mw6", faction:"KorTac",  season:"S4" }] },
  { id:"void",        name:"Void",         appearances:[{ game:"mw6", faction:"KorTac",  season:"S4" }] },
  { id:"copy",        name:"Copy",         appearances:[{ game:"mw6", faction:"KorTac",  season:"S4" }] },
  { id:"rhearipley",  name:"Rhea Ripley",  appearances:[{ game:"mw6", faction:"KorTac",  season:"S5" }] },
  { id:"ares",        name:"Ares",         appearances:[{ game:"mw6", faction:"KorTac",  season:"S5" }] },
  { id:"reckoner",    name:"Reckoner",     appearances:[{ game:"mw6", faction:"KorTac",  season:"S5" }] },
  { id:"myers",       name:"Michael Myers",appearances:[{ game:"mw6", faction:"KorTac",  season:"S6" }] },
  { id:"alone",       name:"Alone",        appearances:[{ game:"mw6", faction:"KorTac",  season:"S6" }] },
  { id:"artclown",    name:"Art the Clown",appearances:[{ game:"mw6", faction:"KorTac",  season:"S6" }] },
  { id:"nazir",       name:"Nazir",        appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:null }] },
  { id:"westpoint",   name:"Westpoint",    appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:null }] },
  { id:"bayan",       name:"Bayan",        appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:null }] },
  { id:"alvarez",     name:"Alvarez",      appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:null }] },
  { id:"payne",       name:"Payne",        appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:null }] },
  { id:"marshall",    name:"Marshall",     appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:null }] },
  { id:"maya",        name:"Maya",         appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:null },{ game:"bo7", faction:"JSOC", season:null }] },
  { id:"sev",         name:"Sev",          appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S1" }] },
  { id:"goliath",     name:"Goliath",      appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S1" }] },
  { id:"replacer_s",  name:"The Replacer", appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S1" },{ game:"bo7", faction:"JSOC", season:"S1" }] },
  { id:"samuels",     name:"Samuels",      appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S1" },{ game:"bo7", faction:"JSOC", season:null }] },
  { id:"lionmask",    name:"Lion Mask VIP",appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S1" }] },
  { id:"leonardo",    name:"Leonardo",     appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S2" }] },
  { id:"donatello",   name:"Donatello",    appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S2" }] },
  { id:"raphael",     name:"Raphael",      appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S2" }] },
  { id:"michelangelo",name:"Michelangelo", appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S2" }] },
  { id:"splinter",    name:"Splinter",     appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S2" }] },
  { id:"jay",         name:"Jay",          appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S3" }] },
  { id:"silentbob",   name:"Silent Bob",   appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S3" }] },
  { id:"sethrogen",   name:"Seth Rogen",   appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S3" }] },
  { id:"beavis",      name:"Beavis",       appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S4" }] },
  { id:"butthead",    name:"Butt-Head",    appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S4" }] },
  { id:"roger",       name:"Roger",        appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S4" }] },
  { id:"solace",      name:"Solace",       appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S5" }] },
  { id:"reznov",      name:"Reznov",       appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S5" }] },
  { id:"predator",    name:"Predator",     appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S6" }] },
  { id:"feralpred",   name:"Feral Predator",appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S6" }] },
  { id:"dread",       name:"Dread",        appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S6" }] },
  { id:"dek",         name:"Dek",          appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S6" }] },
  { id:"tiffany",     name:"Tiffany",      appearances:[{ game:"bo6", faction:"Rogue Black Ops", season:"S6" }] },
  { id:"brutus",      name:"Brutus",       appearances:[{ game:"bo6", faction:"Crimson One", season:null }] },
  { id:"klausbo6",    name:"Klaus",        appearances:[{ game:"bo6", faction:"Crimson One", season:null }] },
  { id:"rossi",       name:"Rossi",        appearances:[{ game:"bo6", faction:"Crimson One", season:null }] },
  { id:"caine",       name:"Caine",        appearances:[{ game:"bo6", faction:"Crimson One", season:null }] },
  { id:"niran",       name:"Niran",        appearances:[{ game:"bo6", faction:"Crimson One", season:null }] },
  { id:"toro",        name:"Toro",         appearances:[{ game:"bo6", faction:"Crimson One", season:null }] },
  { id:"bailey",      name:"Bailey",       appearances:[{ game:"bo6", faction:"Crimson One", season:null }] },
  { id:"carver",      name:"Carver",       appearances:[{ game:"bo6", faction:"Crimson One", season:null },{ game:"bo7", faction:"The Guild", season:null }] },
  { id:"grey",        name:"Grey",         appearances:[{ game:"bo6", faction:"Crimson One", season:null },{ game:"bo7", faction:"The Guild", season:null }] },
  { id:"frontman",    name:"Front Man",    appearances:[{ game:"bo6", faction:"Crimson One", season:"S1" }] },
  { id:"maskedsol",   name:"Masked Soldier",appearances:[{ game:"bo6", faction:"Crimson One", season:"S1" }] },
  { id:"maskedmgr",   name:"Masked Manager",appearances:[{ game:"bo6", faction:"Crimson One", season:"S1" }] },
  { id:"maskedwkr",   name:"Masked Worker", appearances:[{ game:"bo6", faction:"Crimson One", season:"S1" }] },
  { id:"younghee",    name:"Young-hee",    appearances:[{ game:"bo6", faction:"Crimson One", season:"S1" }] },
  { id:"panthermask", name:"Panther Mask VIP",appearances:[{ game:"bo6", faction:"Crimson One", season:"S1" }] },
  { id:"nocturne",    name:"Nocturne",     appearances:[{ game:"bo6", faction:"Crimson One", season:"S2" }] },
  { id:"vortex",      name:"Vortex",       appearances:[{ game:"bo6", faction:"Crimson One", season:"S2" }] },
  { id:"r0z3",        name:"R0-Z3",        appearances:[{ game:"bo6", faction:"Crimson One", season:"S3" }] },
  { id:"johnbo",      name:"John Black Ops",appearances:[{ game:"bo6", faction:"Crimson One", season:"S3" }] },
  { id:"omen",        name:"Omen",         appearances:[{ game:"bo6", faction:"Crimson One", season:"S4" }] },
  { id:"evemacarro",  name:"Eve Macarro",  appearances:[{ game:"bo6", faction:"Crimson One", season:"S4" }] },
  { id:"buzzcut",     name:"Coach Buzzcut",appearances:[{ game:"bo6", faction:"Crimson One", season:"S4" }] },
  { id:"todd",        name:"Todd",         appearances:[{ game:"bo6", faction:"Crimson One", season:"S4" }] },
  { id:"stansmith",   name:"Stan Smith",   appearances:[{ game:"bo6", faction:"Crimson One", season:"S4" }] },
  { id:"fisherman",   name:"The Fisherman",appearances:[{ game:"bo6", faction:"Crimson One", season:"S5" }] },
  { id:"jason",       name:"Jason Voorhees",appearances:[{ game:"bo6", faction:"Crimson One", season:"S6" }] },
  { id:"chucky",      name:"Chucky",       appearances:[{ game:"bo6", faction:"Crimson One", season:"S6" }] },
  { id:"harper",      name:"Harper",       appearances:[{ game:"bo7", faction:"JSOC", season:null }] },
  { id:"karma",       name:"Karma",        appearances:[{ game:"bo7", faction:"JSOC", season:null }] },
  { id:"mason_sec",   name:"Mason",        appearances:[{ game:"bo7", faction:"JSOC", season:null }] },
  { id:"5050",        name:"50/50",        appearances:[{ game:"bo7", faction:"JSOC", season:null }] },
  { id:"anderson",    name:"Anderson",     appearances:[{ game:"bo7", faction:"JSOC", season:null }] },
  { id:"weilin",      name:"Wei Lin",      appearances:[{ game:"bo7", faction:"JSOC", season:null }] },
  { id:"vermaak",     name:"Vermaak",      appearances:[{ game:"bo7", faction:"JSOC", season:null }] },
  { id:"dempsey",     name:"Dempsey",      appearances:[{ game:"bo7", faction:"JSOC", season:null }] },
  { id:"takeo",       name:"Takeo",        appearances:[{ game:"bo7", faction:"JSOC", season:null }] },
  { id:"scorn",       name:"Scorn",        appearances:[{ game:"bo7", faction:"JSOC", season:"S1" }] },
  { id:"replacer_g",  name:"The Replacer (Glaser)",appearances:[{ game:"bo7", faction:"JSOC", season:"S1" }] },
  { id:"lucy",        name:"Lucy",         appearances:[{ game:"bo7", faction:"JSOC", season:"S1" }] },
  { id:"reaperewr3",  name:"Reaper EWR-3", appearances:[{ game:"bo7", faction:"The Guild", season:null }] },
  { id:"tedd",        name:"T.E.D.D.",     appearances:[{ game:"bo7", faction:"The Guild", season:null }] },
  { id:"zaveri",      name:"Zaveri",       appearances:[{ game:"bo7", faction:"The Guild", season:null }] },
  { id:"jurado",      name:"Jurado",       appearances:[{ game:"bo7", faction:"The Guild", season:null }] },
  { id:"grimm",       name:"Grimm",        appearances:[{ game:"bo7", faction:"The Guild", season:null }] },
  { id:"falkner",     name:"Falkner",      appearances:[{ game:"bo7", faction:"The Guild", season:null }] },
  { id:"razor",       name:"Razor",        appearances:[{ game:"bo7", faction:"The Guild", season:null }] },
  { id:"kagan",       name:"Kagan",        appearances:[{ game:"bo7", faction:"The Guild", season:null }] },
  { id:"nikolai_bo7", name:"Nikolai",      appearances:[{ game:"bo7", faction:"The Guild", season:null }] },
  { id:"richtofen",   name:"Richtofen",    appearances:[{ game:"bo7", faction:"The Guild", season:null }] },
  { id:"dorne",       name:"Dorne",        appearances:[{ game:"bo7", faction:"The Guild", season:"S1" }] },
  { id:"maximus",     name:"Maximus",      appearances:[{ game:"bo7", faction:"The Guild", season:"S1" }] },
  { id:"theghoul",    name:"The Ghoul",    appearances:[{ game:"bo7", faction:"The Guild", season:"S1" }] },
  { id:"atwood",      name:"Atwood",       appearances:[{ game:"bo7", faction:"The Guild", season:"S2" }] },
  { id:"phantom",     name:"Phantom",      appearances:[{ game:"bo7", faction:"The Guild", season:"S2" }] },
];

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
  var opSkins=SKINS[op.id]||[];
  document.getElementById("skins-count").textContent=opSkins.length+" SKIN"+(opSkins.length!==1?"S":"");
  if(opSkins.length===0){
    document.getElementById("skins-grid").innerHTML='<div style="font-family:\'Courier New\',monospace;font-size:10px;color:#2a3040;letter-spacing:.12em;padding:12px 0">// NO SKIN DATA</div>';
  } else {
    document.getElementById("skins-grid").innerHTML=opSkins.map(function(skinPath){
      var fname=skinPath.split('/').pop().replace('.png','');
      // Named label first, fallback to cleaned filename
      var label=SKIN_NAMES[fname]||fname
        .replace('ui_loot_operator_east_','')
        .replace('ui_loot_operator_west_','')
        .replace(/_lg$/,'')
        .replace(/_bc$/,' BC')
        .replace(/_/g,' ')
        .toUpperCase();
      var seed=skinPath.split('').reduce(function(a,c){return a+c.charCodeAt(0);},0);
      return '<div class="skin-card" style="border-color:'+ac+'33" data-gc="'+ac+'">'
        +'<img class="skin-bg" src="'+skinPath+'" alt="" onerror="this.style.display=\'none\'">'
        +'<div class="skin-overlay"></div>'
        +'<div class="skin-name">'+label+'</div>'
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

render();
