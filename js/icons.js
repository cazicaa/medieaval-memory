/* Card face icons: 52 unique medieval subjects (no recolors), drawn in a
   unified muted palette with dark outlines and simple shading.
   Each face: { id, label, svg } — svg is a full inline <svg> string, viewBox 0 0 100 100. */

const O = '#2e2418';        // outline
const STEEL = '#aeb9c2';
const STEEL_D = '#6c7a86';
const IRON = '#7d8790';
const IRON_D = '#4d565e';
const WOOD = '#8a5a33';
const WOOD_D = '#5c3a20';
const GOLD = '#d9a92f';
const GOLD_D = '#9a7315';
const GOLD_L = '#eecb6a';
const STONE = '#a8a193';
const STONE_D = '#736c5e';
const CLOTH = '#993024';
const LEATHER = '#96683c';
const IVORY = '#e7dcc3';
const CREAM = '#efe6cc';
const GREEN = '#3e8f4e';
const STRING = '#d8cdb4';

const ICONS = [

/* ============ Weapons ============ */

{ id: 'longsword', label: 'Longsword', svg: `
  <polygon points="50,3 45.5,13 45.5,60 54.5,60 54.5,13" fill="${STEEL}" stroke="${O}" stroke-width="1.8"/>
  <polygon points="50,3 45.5,13 45.5,60 50,60" fill="${STEEL_D}" opacity="0.5"/>
  <line x1="50" y1="15" x2="50" y2="57" stroke="${STEEL_D}" stroke-width="1.4"/>
  <path d="M31 60 Q50 54 69 60 L69 66 Q50 60 31 66 Z" fill="${GOLD}" stroke="${O}" stroke-width="1.8"/>
  <rect x="46" y="65" width="8" height="17" fill="${LEATHER}" stroke="${O}" stroke-width="1.8"/>
  <line x1="46" y1="69.5" x2="54" y2="71" stroke="${WOOD_D}" stroke-width="1.4"/>
  <line x1="46" y1="74" x2="54" y2="75.5" stroke="${WOOD_D}" stroke-width="1.4"/>
  <circle cx="50" cy="87" r="5.5" fill="${GOLD}" stroke="${O}" stroke-width="1.8"/>
  <circle cx="48.3" cy="85.3" r="1.7" fill="${GOLD_L}"/>` },

{ id: 'dagger', label: 'Dagger', svg: `
  <path d="M50 12 C44 22 45.5 40 47 54 L53 54 C54.5 40 56 22 50 12 Z" fill="${STEEL}" stroke="${O}" stroke-width="1.8"/>
  <path d="M50 12 C44 22 45.5 40 47 54 L50 54 C49.4 38 49.2 24 50 12 Z" fill="${STEEL_D}" opacity="0.5"/>
  <rect x="37" y="54" width="26" height="5" rx="2" fill="${IRON_D}" stroke="${O}" stroke-width="1.6"/>
  <rect x="45.5" y="59" width="9" height="14" fill="${LEATHER}" stroke="${O}" stroke-width="1.8"/>
  <line x1="45.5" y1="63" x2="54.5" y2="64.5" stroke="${WOOD_D}" stroke-width="1.3"/>
  <line x1="45.5" y1="67.5" x2="54.5" y2="69" stroke="${WOOD_D}" stroke-width="1.3"/>
  <circle cx="50" cy="77.5" r="4.5" fill="${IRON}" stroke="${O}" stroke-width="1.7"/>` },

{ id: 'battleaxe', label: 'Battle Axe', svg: `
  <rect x="47.5" y="8" width="5" height="84" rx="2" fill="${WOOD}" stroke="${O}" stroke-width="1.8"/>
  <line x1="50" y1="14" x2="50" y2="88" stroke="${WOOD_D}" stroke-width="1" opacity="0.6"/>
  <path d="M48 12 Q18 14 15 42 Q30 34 48 40 Z" fill="${STEEL}" stroke="${O}" stroke-width="1.9"/>
  <path d="M44 16 Q26 19 21 37" fill="none" stroke="${STEEL_D}" stroke-width="1.8"/>
  <polygon points="52,20 64,24 52,30" fill="${STEEL_D}" stroke="${O}" stroke-width="1.7"/>
  <line x1="45" y1="44" x2="55" y2="45.5" stroke="${LEATHER}" stroke-width="2.2"/>
  <line x1="45" y1="48" x2="55" y2="49.5" stroke="${LEATHER}" stroke-width="2.2"/>` },

{ id: 'doubleaxe', label: 'Double Axe', svg: `
  <rect x="47.5" y="8" width="5" height="84" rx="2" fill="${WOOD}" stroke="${O}" stroke-width="1.8"/>
  <path d="M47 14 Q20 18 19 46 Q31 38 47 42 Z" fill="${STEEL}" stroke="${O}" stroke-width="1.9"/>
  <path d="M53 14 Q80 18 81 46 Q69 38 53 42 Z" fill="${STEEL}" stroke="${O}" stroke-width="1.9"/>
  <path d="M43 18 Q26 22 24 41" fill="none" stroke="${STEEL_D}" stroke-width="1.8"/>
  <path d="M57 18 Q74 22 76 41" fill="none" stroke="${STEEL_D}" stroke-width="1.8"/>
  <line x1="45" y1="46" x2="55" y2="47.5" stroke="${LEATHER}" stroke-width="2.2"/>
  <line x1="45" y1="50" x2="55" y2="51.5" stroke="${LEATHER}" stroke-width="2.2"/>` },

{ id: 'mace', label: 'Flanged Mace', svg: `
  <rect x="47.5" y="40" width="5" height="52" rx="2" fill="${WOOD}" stroke="${O}" stroke-width="1.8"/>
  <rect x="43.5" y="36" width="13" height="5" rx="1.5" fill="${IRON_D}" stroke="${O}" stroke-width="1.5"/>
  <path d="M41 6 Q30 21 41 36 L46 32 Q39.5 21 46 10 Z" fill="${STEEL_D}" stroke="${O}" stroke-width="1.7"/>
  <path d="M59 6 Q70 21 59 36 L54 32 Q60.5 21 54 10 Z" fill="${STEEL_D}" stroke="${O}" stroke-width="1.7"/>
  <ellipse cx="50" cy="21" rx="8" ry="16" fill="${STEEL}" stroke="${O}" stroke-width="1.9"/>
  <line x1="50" y1="7" x2="50" y2="35" stroke="${STEEL_D}" stroke-width="1.6"/>
  <circle cx="50" cy="3.5" r="3" fill="${STEEL}" stroke="${O}" stroke-width="1.6"/>
  <circle cx="50" cy="88" r="4" fill="${IRON_D}" stroke="${O}" stroke-width="1.6"/>` },

{ id: 'flail', label: 'Flail', svg: `
  <rect x="43" y="56" width="7" height="36" rx="2" fill="${WOOD}" stroke="${O}" stroke-width="1.8"/>
  <rect x="41.5" y="88" width="10" height="5" rx="2" fill="${IRON_D}" stroke="${O}" stroke-width="1.5"/>
  <circle cx="52" cy="50" r="3" fill="none" stroke="${IRON_D}" stroke-width="2.4"/>
  <circle cx="57" cy="42" r="3" fill="none" stroke="${IRON_D}" stroke-width="2.4"/>
  <circle cx="62" cy="34" r="3" fill="none" stroke="${IRON_D}" stroke-width="2.4"/>
  <polygon points="68,6.5 64.5,14 71.5,14" fill="${IRON}" stroke="${O}" stroke-width="1.4"/>
  <polygon points="82,13 74.5,16 79.5,21" fill="${IRON}" stroke="${O}" stroke-width="1.4"/>
  <polygon points="84,25 76,23.5 78,30" fill="${IRON}" stroke="${O}" stroke-width="1.4"/>
  <polygon points="77,36 72.5,29.5 69,36" fill="${IRON}" stroke="${O}" stroke-width="1.4"/>
  <polygon points="54,12 57.5,19 61.5,14" fill="${IRON}" stroke="${O}" stroke-width="1.4"/>
  <circle cx="68" cy="22" r="9.5" fill="${IRON}" stroke="${O}" stroke-width="1.8"/>
  <path d="M62.5 18 Q64 15 67.5 14.5" fill="none" stroke="${STEEL}" stroke-width="1.8"/>` },

{ id: 'warhammer', label: 'Warhammer', svg: `
  <rect x="47.5" y="12" width="5" height="80" rx="2" fill="${WOOD}" stroke="${O}" stroke-width="1.8"/>
  <polygon points="50,2 46,13 54,13" fill="${STEEL}" stroke="${O}" stroke-width="1.6"/>
  <polygon points="52,15 76,20.5 52,26" fill="${STEEL_D}" stroke="${O}" stroke-width="1.7"/>
  <rect x="30" y="13" width="20" height="15" rx="2" fill="${STEEL}" stroke="${O}" stroke-width="1.8"/>
  <line x1="35" y1="15" x2="35" y2="26" stroke="${STEEL_D}" stroke-width="1.4"/>
  <line x1="40" y1="15" x2="40" y2="26" stroke="${STEEL_D}" stroke-width="1.4"/>
  <line x1="45" y1="15" x2="45" y2="26" stroke="${STEEL_D}" stroke-width="1.4"/>
  <line x1="45" y1="31" x2="55" y2="32.5" stroke="${LEATHER}" stroke-width="2.2"/>
  <line x1="45" y1="35" x2="55" y2="36.5" stroke="${LEATHER}" stroke-width="2.2"/>` },

{ id: 'spear', label: 'Spear', svg: `
  <rect x="48" y="28" width="4.5" height="64" rx="2" fill="${WOOD}" stroke="${O}" stroke-width="1.7"/>
  <path d="M50 3 Q43.5 16 46.5 28 L53.5 28 Q56.5 16 50 3 Z" fill="${STEEL}" stroke="${O}" stroke-width="1.8"/>
  <line x1="50" y1="8" x2="50" y2="27" stroke="${STEEL_D}" stroke-width="1.3"/>
  <rect x="45" y="28" width="10" height="5" rx="1.5" fill="${IRON_D}" stroke="${O}" stroke-width="1.5"/>
  <line x1="46" y1="38" x2="54.5" y2="39.5" stroke="${LEATHER}" stroke-width="2"/>` },

{ id: 'halberd', label: 'Halberd', svg: `
  <rect x="48" y="12" width="4.5" height="80" rx="2" fill="${WOOD}" stroke="${O}" stroke-width="1.7"/>
  <polygon points="50,2 45.5,16 54.5,16" fill="${STEEL}" stroke="${O}" stroke-width="1.6"/>
  <path d="M54 20 Q78 19 75 47 Q64 39 54 44 Z" fill="${STEEL}" stroke="${O}" stroke-width="1.8"/>
  <path d="M58 24 Q71 25 70 40" fill="none" stroke="${STEEL_D}" stroke-width="1.6"/>
  <path d="M46 24 Q33 28 32 40 Q40 38 46 40 Z" fill="${STEEL_D}" stroke="${O}" stroke-width="1.7"/>
  <circle cx="50" cy="22" r="1.3" fill="${IRON_D}"/>
  <circle cx="50" cy="40" r="1.3" fill="${IRON_D}"/>` },

{ id: 'bow', label: 'Bow &amp; Arrow', svg: `
  <line x1="36" y1="7" x2="36" y2="93" stroke="${STRING}" stroke-width="1.5"/>
  <path d="M36 5 C62 22 62 78 36 95" fill="none" stroke="${WOOD}" stroke-width="5" stroke-linecap="round"/>
  <path d="M36 5 C62 22 62 78 36 95" fill="none" stroke="${WOOD_D}" stroke-width="1.2" opacity="0.6"/>
  <rect x="50" y="45" width="6.5" height="12" rx="2.5" fill="${LEATHER}" stroke="${O}" stroke-width="1.5"/>
  <line x1="16" y1="50" x2="62" y2="50" stroke="${WOOD_D}" stroke-width="2.6"/>
  <polygon points="75,50 60,44.5 60,55.5" fill="${STEEL}" stroke="${O}" stroke-width="1.7"/>
  <polygon points="16,50 23,44 28,49" fill="${CLOTH}" stroke="${O}" stroke-width="1.3"/>
  <polygon points="16,50 23,56 28,51" fill="${CLOTH}" stroke="${O}" stroke-width="1.3"/>` },

{ id: 'crossbow', label: 'Crossbow', svg: `
  <rect x="46" y="24" width="8" height="60" rx="2.5" fill="${WOOD}" stroke="${O}" stroke-width="1.8"/>
  <path d="M12 34 C28 16 72 16 88 34" fill="none" stroke="${STEEL}" stroke-width="5.5" stroke-linecap="round"/>
  <line x1="12" y1="34" x2="88" y2="34" stroke="${STRING}" stroke-width="1.5"/>
  <line x1="50" y1="12" x2="50" y2="56" stroke="${WOOD_D}" stroke-width="2.6"/>
  <polygon points="50,4 45,14 55,14" fill="${STEEL}" stroke="${O}" stroke-width="1.6"/>
  <rect x="42" y="58" width="16" height="5" rx="2" fill="${IRON_D}" stroke="${O}" stroke-width="1.4"/>
  <rect x="54" y="66" width="8" height="4.5" rx="2" fill="${IRON_D}" stroke="${O}" stroke-width="1.4"/>
  <line x1="46" y1="76" x2="54" y2="77.5" stroke="${LEATHER}" stroke-width="2"/>` },

{ id: 'trident', label: 'Trident', svg: `
  <rect x="48" y="32" width="4.5" height="60" rx="2" fill="${IRON}" stroke="${O}" stroke-width="1.7"/>
  <rect x="33" y="28" width="34" height="4.5" rx="2" fill="${IRON_D}" stroke="${O}" stroke-width="1.6"/>
  <polygon points="50,4 46,28 54,28" fill="${STEEL}" stroke="${O}" stroke-width="1.7"/>
  <polygon points="37,8 33.5,28 41.5,28" fill="${STEEL}" stroke="${O}" stroke-width="1.7"/>
  <polygon points="63,8 58.5,28 66.5,28" fill="${STEEL}" stroke="${O}" stroke-width="1.7"/>
  <circle cx="50" cy="88" r="3.5" fill="${IRON_D}" stroke="${O}" stroke-width="1.5"/>` },

/* ============ Armor ============ */

{ id: 'greathelm', label: 'Great Helm', svg: `
  <path d="M31 22 Q31 8 50 8 Q69 8 69 22 L69 80 L31 80 Z" fill="${STEEL}" stroke="${O}" stroke-width="2"/>
  <path d="M58 8 Q69 10 69 22 L69 80 L58 80 Z" fill="${STEEL_D}" opacity="0.35"/>
  <line x1="31" y1="21" x2="69" y2="21" stroke="${STEEL_D}" stroke-width="1.6"/>
  <rect x="34" y="33" width="13.5" height="5.5" rx="1.5" fill="#1d150e"/>
  <rect x="52.5" y="33" width="13.5" height="5.5" rx="1.5" fill="#1d150e"/>
  <line x1="50" y1="21" x2="50" y2="80" stroke="${STEEL_D}" stroke-width="2"/>
  <circle cx="41" cy="52" r="1.3" fill="${O}"/><circle cx="46" cy="52" r="1.3" fill="${O}"/>
  <circle cx="54" cy="52" r="1.3" fill="${O}"/><circle cx="59" cy="52" r="1.3" fill="${O}"/>
  <circle cx="41" cy="58" r="1.3" fill="${O}"/><circle cx="46" cy="58" r="1.3" fill="${O}"/>
  <circle cx="54" cy="58" r="1.3" fill="${O}"/><circle cx="59" cy="58" r="1.3" fill="${O}"/>` },

{ id: 'hornedhelm', label: 'Horned Helm', svg: `
  <path d="M34 40 C20 36 12 22 16 8 C21 22 26 30 37 33 Z" fill="${IVORY}" stroke="${O}" stroke-width="1.9"/>
  <path d="M66 40 C80 36 88 22 84 8 C79 22 74 30 63 33 Z" fill="${IVORY}" stroke="${O}" stroke-width="1.9"/>
  <path d="M33 56 Q33 24 50 24 Q67 24 67 56 L67 62 L33 62 Z" fill="${STEEL}" stroke="${O}" stroke-width="2"/>
  <path d="M57 25 Q67 30 67 56 L67 62 L58 62 Z" fill="${STEEL_D}" opacity="0.35"/>
  <rect x="33" y="46" width="34" height="5" fill="${IRON_D}" stroke="${O}" stroke-width="1.4"/>
  <rect x="47" y="51" width="6" height="17" fill="${STEEL_D}" stroke="${O}" stroke-width="1.6"/>
  <polygon points="35,62 35,76 45,69 45,62" fill="${STEEL}" stroke="${O}" stroke-width="1.7"/>
  <polygon points="65,62 65,76 55,69 55,62" fill="${STEEL}" stroke="${O}" stroke-width="1.7"/>` },

{ id: 'heatershield', label: 'Heater Shield', svg: `
  <path d="M50 6 L83 15 V45 Q83 74 50 94 Q17 74 17 45 V15 Z" fill="${CLOTH}" stroke="${O}" stroke-width="2.4"/>
  <path d="M22 41 L50 25 L78 41 L78 31 L50 16 L22 31 Z" fill="${GOLD}" stroke="${O}" stroke-width="1.5"/>
  <circle cx="36" cy="56" r="4.5" fill="${GOLD}" stroke="${O}" stroke-width="1.4"/>
  <circle cx="64" cy="56" r="4.5" fill="${GOLD}" stroke="${O}" stroke-width="1.4"/>
  <circle cx="50" cy="71" r="4.5" fill="${GOLD}" stroke="${O}" stroke-width="1.4"/>
  <path d="M50 6 L83 15 V45 Q83 74 50 94 Z" fill="${O}" opacity="0.12"/>` },

{ id: 'roundshield', label: 'Round Shield', svg: `
  <circle cx="50" cy="50" r="38" fill="${WOOD}" stroke="${O}" stroke-width="2.4"/>
  <path d="M50 12 A38 38 0 0 1 88 50 L50 50 Z" fill="${CLOTH}" opacity="0.85"/>
  <path d="M50 88 A38 38 0 0 1 12 50 L50 50 Z" fill="${CLOTH}" opacity="0.85"/>
  <line x1="31" y1="19" x2="31" y2="81" stroke="${WOOD_D}" stroke-width="1.3" opacity="0.7"/>
  <line x1="69" y1="19" x2="69" y2="81" stroke="${WOOD_D}" stroke-width="1.3" opacity="0.7"/>
  <circle cx="50" cy="50" r="38" fill="none" stroke="${IRON_D}" stroke-width="3"/>
  <circle cx="50" cy="50" r="38" fill="none" stroke="${O}" stroke-width="1.2"/>
  <circle cx="50" cy="50" r="11" fill="${IRON}" stroke="${O}" stroke-width="2"/>
  <path d="M43 45 Q46 41 51 40.5" fill="none" stroke="${STEEL}" stroke-width="1.8"/>
  <circle cx="50" cy="16.5" r="1.6" fill="${IRON_D}"/><circle cx="50" cy="83.5" r="1.6" fill="${IRON_D}"/>
  <circle cx="16.5" cy="50" r="1.6" fill="${IRON_D}"/><circle cx="83.5" cy="50" r="1.6" fill="${IRON_D}"/>
  <circle cx="26.5" cy="26.5" r="1.6" fill="${IRON_D}"/><circle cx="73.5" cy="26.5" r="1.6" fill="${IRON_D}"/>
  <circle cx="26.5" cy="73.5" r="1.6" fill="${IRON_D}"/><circle cx="73.5" cy="73.5" r="1.6" fill="${IRON_D}"/>` },

{ id: 'gauntlet', label: 'Gauntlet', svg: `
  <polygon points="32,88 68,88 62,68 38,68" fill="${STEEL}" stroke="${O}" stroke-width="2"/>
  <line x1="35.5" y1="80" x2="64.5" y2="80" stroke="${STEEL_D}" stroke-width="1.6"/>
  <rect x="38" y="42" width="24" height="28" rx="6" fill="${STEEL}" stroke="${O}" stroke-width="2"/>
  <line x1="38" y1="52" x2="62" y2="52" stroke="${STEEL_D}" stroke-width="1.5"/>
  <rect x="38.5" y="22" width="5" height="20" rx="2.5" fill="${STEEL}" stroke="${O}" stroke-width="1.6"/>
  <rect x="44.7" y="19" width="5" height="23" rx="2.5" fill="${STEEL}" stroke="${O}" stroke-width="1.6"/>
  <rect x="50.9" y="20" width="5" height="22" rx="2.5" fill="${STEEL}" stroke="${O}" stroke-width="1.6"/>
  <rect x="57.1" y="23" width="5" height="19" rx="2.5" fill="${STEEL}" stroke="${O}" stroke-width="1.6"/>
  <path d="M62 48 Q74 44 76 34 Q70 30 64 34 Q60 40 62 48 Z" fill="${STEEL}" stroke="${O}" stroke-width="1.8"/>
  <circle cx="42" cy="74" r="1.4" fill="${IRON_D}"/><circle cx="58" cy="74" r="1.4" fill="${IRON_D}"/>` },

{ id: 'cuirass', label: 'Cuirass', svg: `
  <path d="M29 18 Q50 27 71 18 L75 44 Q73 66 50 83 Q27 66 25 44 Z" fill="${STEEL}" stroke="${O}" stroke-width="2.2"/>
  <path d="M60 22 Q66 21 71 18 L75 44 Q73 66 50 83 Q58 64 60 44 Z" fill="${STEEL_D}" opacity="0.3"/>
  <line x1="50" y1="27" x2="50" y2="81" stroke="${STEEL_D}" stroke-width="2"/>
  <path d="M32 54 Q50 64 68 54" fill="none" stroke="${STEEL_D}" stroke-width="1.6"/>
  <path d="M35 63 Q50 71 65 63" fill="none" stroke="${STEEL_D}" stroke-width="1.6"/>
  <circle cx="33" cy="23" r="1.5" fill="${IRON_D}"/><circle cx="67" cy="23" r="1.5" fill="${IRON_D}"/>
  <circle cx="28.5" cy="40" r="1.5" fill="${IRON_D}"/><circle cx="71.5" cy="40" r="1.5" fill="${IRON_D}"/>` },

/* ============ Siege ============ */

{ id: 'catapult', label: 'Catapult', svg: `
  <polygon points="30.5,68 74.5,24 78,27.5 34,71.5" fill="${WOOD}" stroke="${O}" stroke-width="1.8"/>
  <circle cx="78" cy="22" r="7" fill="${WOOD_D}" stroke="${O}" stroke-width="1.7"/>
  <circle cx="78" cy="19" r="4.5" fill="${STONE}" stroke="${O}" stroke-width="1.5"/>
  <rect x="27" y="44" width="5" height="30" fill="${WOOD_D}" stroke="${O}" stroke-width="1.6"/>
  <rect x="50" y="44" width="5" height="30" fill="${WOOD_D}" stroke="${O}" stroke-width="1.6"/>
  <rect x="22" y="39" width="38" height="6" rx="1.5" fill="${WOOD}" stroke="${O}" stroke-width="1.7"/>
  <rect x="14" y="72" width="72" height="7" rx="2" fill="${WOOD}" stroke="${O}" stroke-width="1.8"/>
  <circle cx="26" cy="83" r="8" fill="${WOOD_D}" stroke="${O}" stroke-width="1.8"/>
  <circle cx="26" cy="83" r="2.2" fill="${IRON_D}"/>
  <circle cx="74" cy="83" r="8" fill="${WOOD_D}" stroke="${O}" stroke-width="1.8"/>
  <circle cx="74" cy="83" r="2.2" fill="${IRON_D}"/>` },

{ id: 'trebuchet', label: 'Trebuchet', svg: `
  <rect x="12" y="84" width="76" height="6" rx="2" fill="${WOOD}" stroke="${O}" stroke-width="1.7"/>
  <line x1="27" y1="85" x2="46" y2="38" stroke="${WOOD}" stroke-width="5"/>
  <line x1="65" y1="85" x2="46" y2="38" stroke="${WOOD}" stroke-width="5"/>
  <line x1="36" y1="62" x2="56" y2="62" stroke="${WOOD_D}" stroke-width="3.5"/>
  <polygon points="21,56.5 79,14.5 81.5,18 23.5,60" fill="${WOOD_D}" stroke="${O}" stroke-width="1.7"/>
  <circle cx="46" cy="38" r="3.2" fill="${IRON_D}" stroke="${O}" stroke-width="1.4"/>
  <line x1="22" y1="58" x2="22" y2="63" stroke="${IRON_D}" stroke-width="2"/>
  <rect x="13" y="63" width="18" height="15" rx="2" fill="${IRON_D}" stroke="${O}" stroke-width="1.8"/>
  <line x1="80" y1="16" x2="87" y2="30" stroke="${STRING}" stroke-width="1.8"/>
  <circle cx="87" cy="33" r="3.5" fill="${LEATHER}" stroke="${O}" stroke-width="1.5"/>` },

{ id: 'ram', label: 'Battering Ram', svg: `
  <rect x="18" y="26" width="6" height="58" fill="${WOOD_D}" stroke="${O}" stroke-width="1.7"/>
  <rect x="76" y="26" width="6" height="58" fill="${WOOD_D}" stroke="${O}" stroke-width="1.7"/>
  <rect x="12" y="20" width="76" height="7" rx="2" fill="${WOOD}" stroke="${O}" stroke-width="1.8"/>
  <line x1="34" y1="27" x2="34" y2="52" stroke="${STRING}" stroke-width="2"/>
  <line x1="64" y1="27" x2="64" y2="52" stroke="${STRING}" stroke-width="2"/>
  <rect x="14" y="52" width="64" height="11" rx="5" fill="${WOOD}" stroke="${O}" stroke-width="1.9"/>
  <line x1="22" y1="57.5" x2="70" y2="57.5" stroke="${WOOD_D}" stroke-width="1.3" opacity="0.7"/>
  <polygon points="78,50 93,57.5 78,65" fill="${STEEL}" stroke="${O}" stroke-width="1.8"/>
  <rect x="73" y="51" width="6" height="13" fill="${IRON_D}" stroke="${O}" stroke-width="1.5"/>` },

{ id: 'siegetower', label: 'Siege Tower', svg: `
  <polygon points="30,26 70,26 76,84 24,84" fill="${WOOD}" stroke="${O}" stroke-width="2"/>
  <line x1="29" y1="41" x2="71" y2="41" stroke="${WOOD_D}" stroke-width="1.4"/>
  <line x1="28" y1="55" x2="72" y2="55" stroke="${WOOD_D}" stroke-width="1.4"/>
  <line x1="27" y1="69" x2="73" y2="69" stroke="${WOOD_D}" stroke-width="1.4"/>
  <rect x="30" y="18" width="8" height="8" fill="${WOOD_D}" stroke="${O}" stroke-width="1.5"/>
  <rect x="46" y="18" width="8" height="8" fill="${WOOD_D}" stroke="${O}" stroke-width="1.5"/>
  <rect x="62" y="18" width="8" height="8" fill="${WOOD_D}" stroke="${O}" stroke-width="1.5"/>
  <path d="M45 52 V44 Q50 40 55 44 V52 Z" fill="#2a1c10" stroke="${O}" stroke-width="1.4"/>
  <circle cx="33" cy="88" r="6" fill="${IRON_D}" stroke="${O}" stroke-width="1.7"/>
  <circle cx="67" cy="88" r="6" fill="${IRON_D}" stroke="${O}" stroke-width="1.7"/>` },

{ id: 'ballista', label: 'Ballista', svg: `
  <path d="M24 12 Q2 42 24 72" fill="none" stroke="${STEEL}" stroke-width="6" stroke-linecap="round"/>
  <line x1="24" y1="12" x2="24" y2="72" stroke="${STRING}" stroke-width="1.6"/>
  <rect x="14" y="38" width="68" height="9" rx="2" fill="${WOOD_D}" stroke="${O}" stroke-width="1.9"/>
  <line x1="24" y1="42.5" x2="74" y2="42.5" stroke="${WOOD}" stroke-width="3"/>
  <polygon points="90,42.5 74,36 74,49" fill="${STEEL}" stroke="${O}" stroke-width="1.8"/>
  <line x1="56" y1="47" x2="42" y2="87" stroke="${WOOD}" stroke-width="5"/>
  <line x1="56" y1="47" x2="72" y2="87" stroke="${WOOD}" stroke-width="5"/>
  <line x1="47" y1="72" x2="67" y2="72" stroke="${WOOD_D}" stroke-width="3.5"/>
  <rect x="34" y="85" width="46" height="6" rx="2" fill="${WOOD_D}" stroke="${O}" stroke-width="1.7"/>
  <circle cx="56" cy="42.5" r="3" fill="${IRON_D}" stroke="${O}" stroke-width="1.3"/>` },

/* ============ Buildings ============ */

{ id: 'castle', label: 'Castle', svg: `
  <line x1="50" y1="24" x2="50" y2="10" stroke="${WOOD_D}" stroke-width="2"/>
  <polygon points="50,10 64,13 50,17" fill="${CLOTH}" stroke="${O}" stroke-width="1.3"/>
  <rect x="38" y="30" width="24" height="54" fill="${STONE}" stroke="${O}" stroke-width="1.9"/>
  <rect x="38" y="24" width="6" height="6" fill="${STONE}" stroke="${O}" stroke-width="1.5"/>
  <rect x="47" y="24" width="6" height="6" fill="${STONE}" stroke="${O}" stroke-width="1.5"/>
  <rect x="56" y="24" width="6" height="6" fill="${STONE}" stroke="${O}" stroke-width="1.5"/>
  <rect x="20" y="42" width="14" height="42" fill="${STONE_D}" stroke="${O}" stroke-width="1.9"/>
  <rect x="20" y="36" width="5.5" height="6" fill="${STONE_D}" stroke="${O}" stroke-width="1.4"/>
  <rect x="28.5" y="36" width="5.5" height="6" fill="${STONE_D}" stroke="${O}" stroke-width="1.4"/>
  <rect x="66" y="42" width="14" height="42" fill="${STONE_D}" stroke="${O}" stroke-width="1.9"/>
  <rect x="66" y="36" width="5.5" height="6" fill="${STONE_D}" stroke="${O}" stroke-width="1.4"/>
  <rect x="74.5" y="36" width="5.5" height="6" fill="${STONE_D}" stroke="${O}" stroke-width="1.4"/>
  <path d="M44 84 V66 Q50 59 56 66 V84 Z" fill="#2a1c10" stroke="${O}" stroke-width="1.6"/>
  <rect x="48.5" y="37" width="3" height="8" fill="#2a1c10"/>
  <rect x="25.5" y="52" width="3" height="7" fill="#2a1c10"/>
  <rect x="71.5" y="52" width="3" height="7" fill="#2a1c10"/>` },

{ id: 'watchtower', label: 'Watchtower', svg: `
  <polygon points="40,28 60,28 63,84 37,84" fill="${STONE}" stroke="${O}" stroke-width="1.9"/>
  <rect x="33" y="20" width="34" height="8" fill="${STONE_D}" stroke="${O}" stroke-width="1.8"/>
  <rect x="33" y="13" width="7" height="7" fill="${STONE}" stroke="${O}" stroke-width="1.5"/>
  <rect x="46.5" y="13" width="7" height="7" fill="${STONE}" stroke="${O}" stroke-width="1.5"/>
  <rect x="60" y="13" width="7" height="7" fill="${STONE}" stroke="${O}" stroke-width="1.5"/>
  <rect x="48" y="42" width="4" height="10" rx="1.5" fill="#2a1c10"/>
  <path d="M45 84 V72 Q50 67 55 72 V84 Z" fill="#2a1c10" stroke="${O}" stroke-width="1.5"/>
  <line x1="41" y1="38" x2="53" y2="38" stroke="${STONE_D}" stroke-width="1.2"/>
  <line x1="46" y1="56" x2="59" y2="56" stroke="${STONE_D}" stroke-width="1.2"/>
  <line x1="40" y1="66" x2="52" y2="66" stroke="${STONE_D}" stroke-width="1.2"/>` },

{ id: 'tavern', label: 'Tavern', svg: `
  <rect x="58" y="22" width="8" height="16" fill="${STONE_D}" stroke="${O}" stroke-width="1.5"/>
  <polygon points="18,44 50,14 82,44" fill="#8c4a2c" stroke="${O}" stroke-width="1.9"/>
  <line x1="24" y1="39" x2="76" y2="39" stroke="#6b3520" stroke-width="1.5"/>
  <rect x="26" y="44" width="48" height="40" fill="#e4d3ae" stroke="${O}" stroke-width="1.9"/>
  <line x1="38" y1="44" x2="38" y2="84" stroke="${WOOD_D}" stroke-width="2.2"/>
  <line x1="62" y1="44" x2="62" y2="84" stroke="${WOOD_D}" stroke-width="2.2"/>
  <line x1="26" y1="61" x2="74" y2="61" stroke="${WOOD_D}" stroke-width="2.2"/>
  <rect x="44" y="62" width="12" height="22" fill="${WOOD}" stroke="${O}" stroke-width="1.7"/>
  <circle cx="53.5" cy="73" r="1.2" fill="${GOLD}"/>
  <rect x="29" y="49" width="10" height="9" fill="#d9b23c" stroke="${O}" stroke-width="1.5"/>
  <line x1="34" y1="49" x2="34" y2="58" stroke="${O}" stroke-width="1"/>
  <line x1="29" y1="53.5" x2="39" y2="53.5" stroke="${O}" stroke-width="1"/>
  <line x1="74" y1="50" x2="88" y2="50" stroke="${WOOD_D}" stroke-width="2.5"/>
  <line x1="84" y1="50" x2="84" y2="55" stroke="${IRON_D}" stroke-width="1.5"/>
  <circle cx="84" cy="61" r="6.5" fill="${WOOD}" stroke="${O}" stroke-width="1.6"/>
  <rect x="81.5" y="58" width="4" height="6" rx="1" fill="${GOLD}"/>` },

{ id: 'windmill', label: 'Windmill', svg: `
  <polygon points="38,40 62,40 68,86 32,86" fill="${STONE}" stroke="${O}" stroke-width="1.9"/>
  <path d="M38 40 Q50 26 62 40 Z" fill="${WOOD_D}" stroke="${O}" stroke-width="1.8"/>
  <g stroke="${O}" stroke-width="1.4" fill="${CREAM}">
    <g transform="rotate(45 50 34)">
      <rect x="47" y="2" width="6" height="62"/>
      <rect x="19" y="31" width="62" height="6"/>
    </g>
  </g>
  <circle cx="50" cy="34" r="3.5" fill="${WOOD_D}" stroke="${O}" stroke-width="1.4"/>
  <path d="M45 86 V74 Q50 69 55 74 V86 Z" fill="${WOOD}" stroke="${O}" stroke-width="1.6"/>
  <rect x="47" y="52" width="6" height="7" fill="#2a1c10" stroke="${O}" stroke-width="1.3"/>` },

{ id: 'chapel', label: 'Chapel', svg: `
  <line x1="50" y1="10" x2="50" y2="24" stroke="${GOLD}" stroke-width="3"/>
  <line x1="45" y1="15" x2="55" y2="15" stroke="${GOLD}" stroke-width="3"/>
  <polygon points="26,48 50,26 74,48" fill="#6e7a86" stroke="${O}" stroke-width="1.9"/>
  <rect x="30" y="48" width="40" height="36" fill="${STONE}" stroke="${O}" stroke-width="1.9"/>
  <circle cx="50" cy="56" r="5" fill="#5a7fa6" stroke="${O}" stroke-width="1.5"/>
  <line x1="50" y1="51" x2="50" y2="61" stroke="${O}" stroke-width="1"/>
  <line x1="45" y1="56" x2="55" y2="56" stroke="${O}" stroke-width="1"/>
  <path d="M44 84 V68 Q50 61 56 68 V84 Z" fill="${WOOD}" stroke="${O}" stroke-width="1.7"/>
  <line x1="50" y1="63" x2="50" y2="84" stroke="${WOOD_D}" stroke-width="1.2"/>
  <line x1="34" y1="66" x2="34" y2="78" stroke="${STONE_D}" stroke-width="1.5"/>
  <line x1="66" y1="66" x2="66" y2="78" stroke="${STONE_D}" stroke-width="1.5"/>` },

{ id: 'tent', label: 'War Tent', svg: `
  <line x1="50" y1="14" x2="50" y2="4" stroke="${WOOD_D}" stroke-width="2"/>
  <polygon points="50,4 62,7 50,10" fill="${GOLD}" stroke="${O}" stroke-width="1.3"/>
  <polygon points="26,52 74,52 78,84 22,84" fill="${CREAM}" stroke="${O}" stroke-width="1.9"/>
  <line x1="34" y1="53" x2="33" y2="84" stroke="${CLOTH}" stroke-width="5"/>
  <line x1="66" y1="53" x2="67" y2="84" stroke="${CLOTH}" stroke-width="5"/>
  <polygon points="43,84 57,84 50,58" fill="#3a2c1c" stroke="${O}" stroke-width="1.5"/>
  <path d="M50 14 Q72 24 78 52 L22 52 Q28 24 50 14 Z" fill="${CLOTH}" stroke="${O}" stroke-width="1.9"/>
  <path d="M22 52 Q26 58 30 52 Q34 58 38 52 Q42 58 46 52 Q50 58 54 52 Q58 58 62 52 Q66 58 70 52 Q74 58 78 52" fill="${CLOTH}" stroke="${O}" stroke-width="1.5"/>
  <path d="M50 14 Q60 22 64 36" fill="none" stroke="#6d1f14" stroke-width="1.6" opacity="0.7"/>` },

{ id: 'well', label: 'Well', svg: `
  <rect x="30" y="30" width="5" height="34" fill="${WOOD}" stroke="${O}" stroke-width="1.6"/>
  <rect x="65" y="30" width="5" height="34" fill="${WOOD}" stroke="${O}" stroke-width="1.6"/>
  <polygon points="22,32 50,15 78,32" fill="#8c4a2c" stroke="${O}" stroke-width="1.8"/>
  <line x1="35" y1="39" x2="65" y2="39" stroke="${WOOD_D}" stroke-width="3.5"/>
  <line x1="50" y1="39" x2="50" y2="54" stroke="${STRING}" stroke-width="1.8"/>
  <rect x="44.5" y="54" width="11" height="9" fill="${WOOD_D}" stroke="${O}" stroke-width="1.6"/>
  <path d="M45 55 Q50 49 55 55" fill="none" stroke="${IRON_D}" stroke-width="1.6"/>
  <rect x="28" y="64" width="44" height="16" fill="${STONE}" stroke="${O}" stroke-width="1.9"/>
  <ellipse cx="50" cy="64" rx="22" ry="6.5" fill="${STONE_D}" stroke="${O}" stroke-width="1.8"/>
  <line x1="36" y1="70" x2="36" y2="80" stroke="${STONE_D}" stroke-width="1.3"/>
  <line x1="50" y1="72" x2="50" y2="80" stroke="${STONE_D}" stroke-width="1.3"/>
  <line x1="64" y1="70" x2="64" y2="80" stroke="${STONE_D}" stroke-width="1.3"/>` },

{ id: 'portcullis', label: 'Portcullis', svg: `
  <path d="M22 86 V36 Q22 16 50 16 Q78 16 78 36 V86 H66 V38 Q66 28 50 28 Q34 28 34 38 V86 Z" fill="${STONE}" stroke="${O}" stroke-width="1.9"/>
  <line x1="22" y1="50" x2="34" y2="50" stroke="${STONE_D}" stroke-width="1.4"/>
  <line x1="66" y1="50" x2="78" y2="50" stroke="${STONE_D}" stroke-width="1.4"/>
  <line x1="22" y1="68" x2="34" y2="68" stroke="${STONE_D}" stroke-width="1.4"/>
  <line x1="66" y1="68" x2="78" y2="68" stroke="${STONE_D}" stroke-width="1.4"/>
  <g stroke="${O}" stroke-width="1.2" fill="${IRON_D}">
    <polygon points="39,32 42.5,32 42.5,80 40.75,86 39,80"/>
    <polygon points="48.2,30 51.7,30 51.7,80 49.95,86 48.2,80"/>
    <polygon points="57.5,32 61,32 61,80 59.25,86 57.5,80"/>
  </g>
  <rect x="35" y="42" width="30" height="3.5" fill="${IRON}" stroke="${O}" stroke-width="1.1"/>
  <rect x="35" y="56" width="30" height="3.5" fill="${IRON}" stroke="${O}" stroke-width="1.1"/>
  <rect x="35" y="70" width="30" height="3.5" fill="${IRON}" stroke="${O}" stroke-width="1.1"/>` },

/* ============ Magic & treasure ============ */

{ id: 'staff', label: 'Wizard Staff', svg: `
  <circle cx="50" cy="16" r="10" fill="#9fd8ea" opacity="0.35"/>
  <circle cx="50" cy="16" r="6.5" fill="#5db6d6" stroke="${O}" stroke-width="1.7"/>
  <circle cx="47.8" cy="13.8" r="1.8" fill="#c9ecf5"/>
  <path d="M47.5 30 C40 26 38 16 44 9" fill="none" stroke="${WOOD_D}" stroke-width="4" stroke-linecap="round"/>
  <path d="M52.5 30 C60 26 62 16 56 9" fill="none" stroke="${WOOD_D}" stroke-width="4" stroke-linecap="round"/>
  <rect x="47.5" y="28" width="5" height="64" rx="2" fill="${WOOD_D}" stroke="${O}" stroke-width="1.7"/>
  <line x1="46.5" y1="54" x2="54.5" y2="55.5" stroke="${LEATHER}" stroke-width="2.4"/>
  <line x1="46.5" y1="59" x2="54.5" y2="60.5" stroke="${LEATHER}" stroke-width="2.4"/>` },

{ id: 'scroll', label: 'Scroll', svg: `
  <rect x="30" y="22" width="40" height="54" fill="#f3ead0" stroke="${O}" stroke-width="1.8"/>
  <rect x="26" y="14" width="48" height="8" rx="4" fill="${CREAM}" stroke="${O}" stroke-width="1.7"/>
  <circle cx="26" cy="18" r="4.5" fill="#dccf9f" stroke="${O}" stroke-width="1.5"/>
  <circle cx="74" cy="18" r="4.5" fill="#dccf9f" stroke="${O}" stroke-width="1.5"/>
  <rect x="26" y="76" width="48" height="8" rx="4" fill="${CREAM}" stroke="${O}" stroke-width="1.7"/>
  <circle cx="26" cy="80" r="4.5" fill="#dccf9f" stroke="${O}" stroke-width="1.5"/>
  <circle cx="74" cy="80" r="4.5" fill="#dccf9f" stroke="${O}" stroke-width="1.5"/>
  <line x1="36" y1="32" x2="64" y2="32" stroke="#7b6a4a" stroke-width="2"/>
  <line x1="36" y1="40" x2="64" y2="40" stroke="#7b6a4a" stroke-width="2"/>
  <line x1="36" y1="48" x2="57" y2="48" stroke="#7b6a4a" stroke-width="2"/>
  <line x1="36" y1="56" x2="64" y2="56" stroke="#7b6a4a" stroke-width="2"/>
  <circle cx="60" cy="66" r="5" fill="${CLOTH}" stroke="${O}" stroke-width="1.4"/>` },

{ id: 'tome', label: 'Tome', svg: `
  <rect x="26" y="20" width="48" height="60" rx="3" fill="#6d2f22" stroke="${O}" stroke-width="2"/>
  <rect x="26" y="20" width="9" height="60" rx="3" fill="#521d12" stroke="${O}" stroke-width="1.6"/>
  <rect x="40" y="27" width="28" height="46" fill="none" stroke="${GOLD}" stroke-width="1.2" opacity="0.8"/>
  <polygon points="74,20 63,20 74,31" fill="${GOLD}" stroke="${O}" stroke-width="1.2"/>
  <polygon points="74,80 63,80 74,69" fill="${GOLD}" stroke="${O}" stroke-width="1.2"/>
  <polygon points="40,20 47,20 40,27" fill="${GOLD}" stroke="${O}" stroke-width="1.2"/>
  <polygon points="40,80 47,80 40,73" fill="${GOLD}" stroke="${O}" stroke-width="1.2"/>
  <polygon points="54,42 61,50 54,58 47,50" fill="${GOLD}" stroke="${O}" stroke-width="1.4"/>
  <circle cx="54" cy="50" r="2.2" fill="#7c2015"/>
  <rect x="70" y="45" width="8" height="10" rx="1.5" fill="${GOLD}" stroke="${O}" stroke-width="1.4"/>` },

{ id: 'potion', label: 'Potion', svg: `
  <circle cx="50" cy="56" r="22" fill="#cfe0e6" stroke="${O}" stroke-width="2"/>
  <path d="M28.5 60 A22 22 0 1 0 71.5 60 Q50 68 28.5 60 Z" fill="${GREEN}"/>
  <ellipse cx="50" cy="60" rx="21" ry="4.5" fill="#57ab63"/>
  <circle cx="44" cy="68" r="2.2" fill="#8fd49a"/>
  <circle cx="56" cy="72" r="1.6" fill="#8fd49a"/>
  <circle cx="51" cy="64" r="1.2" fill="#8fd49a"/>
  <circle cx="50" cy="56" r="22" fill="none" stroke="${O}" stroke-width="2"/>
  <path d="M36 44 Q39 39 44 37" fill="none" stroke="#f0f7f9" stroke-width="2.2"/>
  <rect x="43" y="24" width="14" height="12" fill="#cfe0e6" stroke="${O}" stroke-width="1.8"/>
  <rect x="41" y="22" width="18" height="4" rx="2" fill="#b8ccd2" stroke="${O}" stroke-width="1.5"/>
  <rect x="44" y="13" width="12" height="9" rx="2.5" fill="${WOOD}" stroke="${O}" stroke-width="1.7"/>` },

{ id: 'cauldron', label: 'Cauldron', svg: `
  <line x1="31" y1="79" x2="26" y2="90" stroke="#272c31" stroke-width="4.5"/>
  <line x1="50" y1="82" x2="50" y2="92" stroke="#272c31" stroke-width="4.5"/>
  <line x1="69" y1="79" x2="74" y2="90" stroke="#272c31" stroke-width="4.5"/>
  <path d="M22 44 Q20 78 50 82 Q80 78 78 44 Z" fill="#33393f" stroke="${O}" stroke-width="2"/>
  <path d="M40 76 Q30 70 27 56" fill="none" stroke="#4a5158" stroke-width="2.2"/>
  <ellipse cx="50" cy="44" rx="28" ry="7" fill="#454c53" stroke="${O}" stroke-width="1.9"/>
  <ellipse cx="50" cy="44" rx="23" ry="4.8" fill="${GREEN}"/>
  <circle cx="42" cy="42.5" r="2.2" fill="#8fd49a"/>
  <circle cx="56" cy="44" r="1.6" fill="#8fd49a"/>
  <circle cx="50" cy="41.5" r="1.2" fill="#8fd49a"/>
  <path d="M20 46 Q12 42 16 34" fill="none" stroke="#454c53" stroke-width="3"/>
  <path d="M80 46 Q88 42 84 34" fill="none" stroke="#454c53" stroke-width="3"/>` },

{ id: 'crown', label: 'Crown', svg: `
  <path d="M26 58 L26 32 L38 47 L50 26 L62 47 L74 32 L74 58 Z" fill="${GOLD}" stroke="${O}" stroke-width="2"/>
  <circle cx="26" cy="30" r="3.2" fill="${GOLD}" stroke="${O}" stroke-width="1.5"/>
  <circle cx="50" cy="24" r="3.2" fill="${GOLD}" stroke="${O}" stroke-width="1.5"/>
  <circle cx="74" cy="30" r="3.2" fill="${GOLD}" stroke="${O}" stroke-width="1.5"/>
  <rect x="24" y="58" width="52" height="16" rx="2" fill="${GOLD}" stroke="${O}" stroke-width="2"/>
  <line x1="24" y1="62.5" x2="76" y2="62.5" stroke="${GOLD_D}" stroke-width="1.4"/>
  <circle cx="50" cy="67" r="4" fill="#a3242f" stroke="${O}" stroke-width="1.4"/>
  <polygon points="37,63 40.5,67 37,71 33.5,67" fill="#2f6f8f" stroke="${O}" stroke-width="1.2"/>
  <polygon points="63,63 66.5,67 63,71 59.5,67" fill="#2f6f8f" stroke="${O}" stroke-width="1.2"/>
  <path d="M30 34 L38 44" stroke="${GOLD_L}" stroke-width="1.6"/>` },

{ id: 'chalice', label: 'Chalice', svg: `
  <path d="M30 22 Q31 44 50 48 Q69 44 70 22 Z" fill="${GOLD}" stroke="${O}" stroke-width="1.9"/>
  <ellipse cx="50" cy="22" rx="20" ry="5" fill="${GOLD_L}" stroke="${O}" stroke-width="1.7"/>
  <circle cx="42" cy="33" r="2.6" fill="#a3242f" stroke="${O}" stroke-width="1.2"/>
  <circle cx="58" cy="33" r="2.6" fill="#2f6f8f" stroke="${O}" stroke-width="1.2"/>
  <circle cx="50" cy="38" r="2.6" fill="${GREEN}" stroke="${O}" stroke-width="1.2"/>
  <rect x="47" y="48" width="6" height="18" fill="${GOLD}" stroke="${O}" stroke-width="1.7"/>
  <circle cx="50" cy="57" r="4.5" fill="${GOLD_D}" stroke="${O}" stroke-width="1.5"/>
  <ellipse cx="50" cy="72" rx="16" ry="6" fill="${GOLD}" stroke="${O}" stroke-width="1.9"/>
  <path d="M36 20 Q42 17 50 17" fill="none" stroke="#f5e3a5" stroke-width="1.8"/>` },

{ id: 'key', label: 'Key', svg: `
  <circle cx="50" cy="18" r="9" fill="none" stroke="${GOLD}" stroke-width="6"/>
  <circle cx="50" cy="18" r="12.2" fill="none" stroke="${O}" stroke-width="1.6"/>
  <circle cx="50" cy="18" r="5.8" fill="none" stroke="${O}" stroke-width="1.6"/>
  <rect x="47" y="29" width="6" height="46" fill="${GOLD}" stroke="${O}" stroke-width="1.7"/>
  <rect x="44" y="31" width="12" height="5" rx="2" fill="${GOLD_D}" stroke="${O}" stroke-width="1.4"/>
  <rect x="53" y="62" width="10" height="5.5" fill="${GOLD}" stroke="${O}" stroke-width="1.5"/>
  <rect x="53" y="70" width="7" height="5" fill="${GOLD}" stroke="${O}" stroke-width="1.5"/>
  <line x1="48.5" y1="32" x2="48.5" y2="72" stroke="${GOLD_L}" stroke-width="1.4"/>` },

{ id: 'chest', label: 'Treasure Chest', svg: `
  <path d="M26 40 Q26 22 50 22 Q74 22 74 40 Z" fill="${WOOD}" stroke="${O}" stroke-width="2"/>
  <path d="M33 38 Q34 27 44 24" fill="none" stroke="${WOOD_D}" stroke-width="1.4"/>
  <path d="M67 38 Q66 27 56 24" fill="none" stroke="${WOOD_D}" stroke-width="1.4"/>
  <rect x="26" y="37" width="48" height="6" fill="${IRON_D}" stroke="${O}" stroke-width="1.6"/>
  <rect x="26" y="43" width="48" height="28" fill="${WOOD}" stroke="${O}" stroke-width="2"/>
  <line x1="27" y1="53" x2="73" y2="53" stroke="${WOOD_D}" stroke-width="1.3"/>
  <line x1="27" y1="62" x2="73" y2="62" stroke="${WOOD_D}" stroke-width="1.3"/>
  <rect x="33" y="43" width="5" height="28" fill="${IRON_D}" stroke="${O}" stroke-width="1.3"/>
  <rect x="62" y="43" width="5" height="28" fill="${IRON_D}" stroke="${O}" stroke-width="1.3"/>
  <rect x="44.5" y="36" width="11" height="14" rx="2" fill="${GOLD}" stroke="${O}" stroke-width="1.7"/>
  <circle cx="50" cy="41" r="2" fill="${O}"/>
  <polygon points="50,42 47.8,47.5 52.2,47.5" fill="${O}"/>
  <rect x="28" y="71" width="7" height="5" fill="${WOOD_D}" stroke="${O}" stroke-width="1.4"/>
  <rect x="65" y="71" width="7" height="5" fill="${WOOD_D}" stroke="${O}" stroke-width="1.4"/>` },

/* ============ Camp & tavern life ============ */

{ id: 'torch', label: 'Torch', svg: `
  <path d="M50 8 C60 18 63 26 59 34 Q56 39 50 40 Q44 39 41 34 C37 26 40 18 50 8 Z" fill="#e8912b" stroke="#8a4a12" stroke-width="1.6"/>
  <path d="M50 16 C55 22 56 28 53 33 Q50 36 47 33 C44 28 45 22 50 16 Z" fill="#f4c34a"/>
  <circle cx="50" cy="29" r="2.6" fill="#f9e39b"/>
  <rect x="43.5" y="38" width="13" height="9" rx="2.5" fill="${LEATHER}" stroke="${O}" stroke-width="1.7"/>
  <line x1="43.5" y1="42.5" x2="56.5" y2="42.5" stroke="${WOOD_D}" stroke-width="1.3"/>
  <polygon points="45.5,47 54.5,47 51.5,92 48.5,92" fill="${WOOD}" stroke="${O}" stroke-width="1.8"/>
  <line x1="46" y1="54" x2="54" y2="55" stroke="${WOOD_D}" stroke-width="1.8"/>` },

{ id: 'lantern', label: 'Lantern', svg: `
  <circle cx="50" cy="8" r="4" fill="none" stroke="${IRON_D}" stroke-width="2.4"/>
  <polygon points="36,20 64,20 58,11 42,11" fill="${IRON}" stroke="${O}" stroke-width="1.8"/>
  <circle cx="46" cy="15.5" r="0.9" fill="${O}"/><circle cx="54" cy="15.5" r="0.9" fill="${O}"/>
  <rect x="38" y="20" width="24" height="34" fill="#f2d670" stroke="${O}" stroke-width="2"/>
  <line x1="46" y1="20" x2="46" y2="54" stroke="${IRON_D}" stroke-width="2"/>
  <line x1="54" y1="20" x2="54" y2="54" stroke="${IRON_D}" stroke-width="2"/>
  <path d="M50 30 C53.5 35 53.5 41 50 44 C46.5 41 46.5 35 50 30 Z" fill="#e8912b" stroke="#8a4a12" stroke-width="1.3"/>
  <circle cx="50" cy="39" r="1.8" fill="#f9e39b"/>
  <rect x="35" y="54" width="30" height="7" rx="2" fill="${IRON}" stroke="${O}" stroke-width="1.8"/>` },

{ id: 'banner', label: 'Banner', svg: `
  <rect x="20" y="16" width="60" height="5" rx="2" fill="${WOOD}" stroke="${O}" stroke-width="1.7"/>
  <circle cx="17" cy="18.5" r="3.5" fill="${GOLD}" stroke="${O}" stroke-width="1.4"/>
  <circle cx="83" cy="18.5" r="3.5" fill="${GOLD}" stroke="${O}" stroke-width="1.4"/>
  <path d="M28 21 H72 V60 L61 70 L50 60 L39 70 L28 60 Z" fill="${CLOTH}" stroke="${O}" stroke-width="2"/>
  <path d="M62 21 H72 V60 L61 70 L58 67 Z" fill="#6d1f14" opacity="0.55"/>
  <rect x="46" y="28" width="8" height="22" fill="${GOLD}" stroke="${O}" stroke-width="1.3"/>
  <rect x="38" y="34" width="24" height="8" fill="${GOLD}" stroke="${O}" stroke-width="1.3"/>` },

{ id: 'warhorn', label: 'War Horn', svg: `
  <path d="M26 26 C20 52 34 74 62 78 C74 80 82 72 80 62 L71 60 C71 68 65 70 57 68 C40 63 30 47 34 28 Z" fill="${IVORY}" stroke="${O}" stroke-width="2"/>
  <path d="M38 34 C40 52 50 64 64 69" fill="none" stroke="#c9bb9b" stroke-width="2"/>
  <line x1="29" y1="40" x2="40" y2="38" stroke="${GOLD}" stroke-width="5"/>
  <line x1="36" y1="55" x2="46" y2="51" stroke="${GOLD}" stroke-width="5"/>
  <ellipse cx="29" cy="25" rx="4.5" ry="3.5" fill="${GOLD}" stroke="${O}" stroke-width="1.6" transform="rotate(15 29 25)"/>` },

{ id: 'tankard', label: 'Tankard', svg: `
  <path d="M64 40 Q80 42 78 55 Q76 66 62 65" fill="none" stroke="${WOOD_D}" stroke-width="5.5"/>
  <polygon points="32,30 64,30 62,80 34,80" fill="${WOOD}" stroke="${O}" stroke-width="2"/>
  <line x1="42" y1="31" x2="43" y2="79" stroke="${WOOD_D}" stroke-width="1.5"/>
  <line x1="50" y1="31" x2="50" y2="79" stroke="${WOOD_D}" stroke-width="1.5"/>
  <line x1="57" y1="31" x2="56.5" y2="79" stroke="${WOOD_D}" stroke-width="1.5"/>
  <rect x="31" y="36" width="34.5" height="5" fill="${IRON_D}" stroke="${O}" stroke-width="1.3"/>
  <rect x="33" y="66" width="31" height="5" fill="${IRON_D}" stroke="${O}" stroke-width="1.3"/>
  <circle cx="37" cy="28" r="5" fill="#f5f0dd" stroke="${O}" stroke-width="1.4"/>
  <circle cx="46" cy="25" r="6" fill="#f5f0dd" stroke="${O}" stroke-width="1.4"/>
  <circle cx="55" cy="26" r="5.5" fill="#f5f0dd" stroke="${O}" stroke-width="1.4"/>
  <circle cx="62" cy="28.5" r="4" fill="#f5f0dd" stroke="${O}" stroke-width="1.4"/>
  <path d="M63 31 Q65.5 36 62.5 38" fill="none" stroke="#f5f0dd" stroke-width="3"/>` },

{ id: 'anvil', label: 'Anvil', svg: `
  <rect x="28" y="26" width="56" height="13" rx="1.5" fill="${IRON}" stroke="${O}" stroke-width="2"/>
  <polygon points="28,26 12,29 10,34 16,38 28,39" fill="${IRON}" stroke="${O}" stroke-width="1.8"/>
  <rect x="74" y="29" width="5" height="5" fill="${IRON_D}"/>
  <polygon points="46,39 68,39 62,52 52,52" fill="${IRON_D}" stroke="${O}" stroke-width="1.8"/>
  <rect x="42" y="52" width="30" height="9" rx="1.5" fill="${IRON}" stroke="${O}" stroke-width="1.9"/>
  <rect x="36" y="61" width="42" height="18" rx="2" fill="${WOOD_D}" stroke="${O}" stroke-width="2"/>
  <line x1="36" y1="67" x2="78" y2="67" stroke="${O}" stroke-width="1.2" opacity="0.5"/>
  <line x1="30" y1="29" x2="70" y2="29" stroke="${STEEL}" stroke-width="1.8"/>` },

{ id: 'hourglass', label: 'Hourglass', svg: `
  <rect x="30" y="10" width="40" height="6" rx="2" fill="${WOOD}" stroke="${O}" stroke-width="1.8"/>
  <rect x="30" y="84" width="40" height="6" rx="2" fill="${WOOD}" stroke="${O}" stroke-width="1.8"/>
  <rect x="32" y="16" width="4" height="68" fill="${WOOD_D}" stroke="${O}" stroke-width="1.4"/>
  <rect x="64" y="16" width="4" height="68" fill="${WOOD_D}" stroke="${O}" stroke-width="1.4"/>
  <path d="M38 16 H62 Q60 36 52 46 Q52 48 52 50 Q60 60 62 84 H38 Q40 60 48 50 Q48 48 48 46 Q40 36 38 16 Z" fill="#d9e6ea" opacity="0.9" stroke="${O}" stroke-width="1.9"/>
  <path d="M42 18 H58 Q56 30 50 37 Q44 30 42 18 Z" fill="#dbb45f"/>
  <path d="M41 82 Q50 62 59 82 Z" fill="#dbb45f"/>
  <line x1="50" y1="48" x2="50" y2="78" stroke="#dbb45f" stroke-width="1.6"/>` },

{ id: 'lute', label: 'Lute', svg: `
  <polygon points="36,14 44,12.5 42,4 34,6" fill="${WOOD_D}" stroke="${O}" stroke-width="1.6"/>
  <polygon points="45.5,40 39,13 45,11.5 51.5,38.5" fill="${WOOD_D}" stroke="${O}" stroke-width="1.7"/>
  <line x1="41" y1="22" x2="47.5" y2="20.5" stroke="${O}" stroke-width="1" opacity="0.6"/>
  <line x1="42.5" y1="29" x2="49" y2="27.5" stroke="${O}" stroke-width="1" opacity="0.6"/>
  <path d="M50 38 C66 38 74 50 74 63 C74 77 64 87 50 87 C36 87 26 77 26 63 C26 50 34 38 50 38 Z" fill="${WOOD}" stroke="${O}" stroke-width="2"/>
  <path d="M60 42 C70 48 72 60 68 72" fill="none" stroke="${WOOD_D}" stroke-width="1.6" opacity="0.7"/>
  <circle cx="50" cy="63" r="6" fill="#3a2313" stroke="${O}" stroke-width="1.4"/>
  <circle cx="50" cy="63" r="8" fill="none" stroke="${GOLD_D}" stroke-width="1" opacity="0.8"/>
  <rect x="43" y="75" width="14" height="3.5" rx="1.5" fill="${WOOD_D}" stroke="${O}" stroke-width="1.2"/>
  <line x1="40.5" y1="13.5" x2="47" y2="76" stroke="${STRING}" stroke-width="1"/>
  <line x1="42.5" y1="13" x2="50" y2="76" stroke="${STRING}" stroke-width="1"/>
  <line x1="44.5" y1="12.5" x2="53" y2="76" stroke="${STRING}" stroke-width="1"/>` },

{ id: 'longship', label: 'Longship', svg: `
  <rect x="48.5" y="14" width="3" height="50" fill="${WOOD_D}" stroke="${O}" stroke-width="1.2"/>
  <rect x="28" y="13" width="44" height="3.5" fill="${WOOD_D}" stroke="${O}" stroke-width="1.2"/>
  <rect x="31" y="17" width="38" height="26" fill="${CREAM}" stroke="${O}" stroke-width="1.8"/>
  <rect x="36" y="17" width="7" height="26" fill="${CLOTH}" opacity="0.85"/>
  <rect x="49" y="17" width="7" height="26" fill="${CLOTH}" opacity="0.85"/>
  <rect x="62" y="17" width="7" height="26" fill="${CLOTH}" opacity="0.85"/>
  <path d="M12 54 C8 42 12 32 22 28" fill="none" stroke="${WOOD}" stroke-width="4"/>
  <circle cx="23" cy="27" r="3" fill="${WOOD_D}" stroke="${O}" stroke-width="1.3"/>
  <path d="M88 54 C92 46 90 38 84 36" fill="none" stroke="${WOOD}" stroke-width="4"/>
  <path d="M12 54 Q30 64 50 64 Q70 64 88 54 Q86 72 68 78 L32 78 Q14 72 12 54 Z" fill="${WOOD}" stroke="${O}" stroke-width="2"/>
  <path d="M16 60 Q35 68 50 68 Q65 68 84 60" fill="none" stroke="${WOOD_D}" stroke-width="1.4"/>
  <circle cx="34" cy="61" r="4" fill="${CLOTH}" stroke="${O}" stroke-width="1.3"/>
  <circle cx="46" cy="62.5" r="4" fill="#4e7a45" stroke="${O}" stroke-width="1.3"/>
  <circle cx="58" cy="62.5" r="4" fill="${CLOTH}" stroke="${O}" stroke-width="1.3"/>
  <circle cx="70" cy="61" r="4" fill="#4e7a45" stroke="${O}" stroke-width="1.3"/>
  <path d="M10 86 Q18 80 26 86" fill="none" stroke="#4a7d99" stroke-width="2.4"/>
  <path d="M62 86 Q70 80 78 86" fill="none" stroke="#4a7d99" stroke-width="2.4"/>` },

{ id: 'coinpouch', label: 'Coin Pouch', svg: `
  <path d="M50 30 C68 32 76 48 74 64 C72 78 60 86 50 86 C40 86 28 78 26 64 C24 48 32 32 50 30 Z" fill="${LEATHER}" stroke="${O}" stroke-width="2"/>
  <path d="M62 38 C70 46 72 58 69 68" fill="none" stroke="#7a4f28" stroke-width="1.8"/>
  <path d="M38 38 C33 46 31 56 33 66" fill="none" stroke="#7a4f28" stroke-width="1.8"/>
  <path d="M43 22 Q46 15 50 21 Q54 15 57 22 L58 30 Q50 33 42 30 Z" fill="${LEATHER}" stroke="${O}" stroke-width="1.8"/>
  <line x1="40" y1="29" x2="60" y2="29" stroke="#57381f" stroke-width="3"/>
  <circle cx="60.5" cy="29" r="2" fill="#57381f"/>
  <circle cx="20" cy="84" r="5.5" fill="${GOLD}" stroke="${O}" stroke-width="1.5"/>
  <circle cx="20" cy="84" r="3" fill="none" stroke="${GOLD_D}" stroke-width="1"/>
  <circle cx="32" cy="89" r="5" fill="${GOLD}" stroke="${O}" stroke-width="1.5"/>
  <circle cx="32" cy="89" r="2.7" fill="none" stroke="${GOLD_D}" stroke-width="1"/>
  <circle cx="79" cy="86" r="5.5" fill="${GOLD}" stroke="${O}" stroke-width="1.5"/>
  <circle cx="79" cy="86" r="3" fill="none" stroke="${GOLD_D}" stroke-width="1"/>` },

{ id: 'quill', label: 'Quill &amp; Ink', svg: `
  <path d="M44 58 C52 40 66 22 82 8 C84 16 78 30 68 42 C60 51 52 56 44 58 Z" fill="${CREAM}" stroke="${O}" stroke-width="1.8"/>
  <path d="M46 55 C56 42 68 26 80 12" fill="none" stroke="#b3a684" stroke-width="1.6"/>
  <line x1="56" y1="44" x2="62" y2="47" stroke="#b3a684" stroke-width="1.2"/>
  <line x1="63" y1="35" x2="69" y2="38" stroke="#b3a684" stroke-width="1.2"/>
  <line x1="70" y1="26" x2="75" y2="29" stroke="#b3a684" stroke-width="1.2"/>
  <polygon points="44,58 40,66 46,62" fill="${O}"/>
  <rect x="33" y="56" width="16" height="5" rx="1.5" fill="${IRON}" stroke="${O}" stroke-width="1.5"/>
  <rect x="28" y="61" width="26" height="25" rx="3" fill="#2e3f52" stroke="${O}" stroke-width="2"/>
  <path d="M32 66 Q33 78 38 82" fill="none" stroke="#4b6076" stroke-width="2.2"/>` },

{ id: 'bell', label: 'Bell', svg: `
  <rect x="34" y="8" width="32" height="6" rx="2" fill="${WOOD}" stroke="${O}" stroke-width="1.7"/>
  <line x1="50" y1="60" x2="50" y2="65" stroke="${IRON_D}" stroke-width="2"/>
  <circle cx="50" cy="69" r="4.5" fill="${IRON_D}" stroke="${O}" stroke-width="1.6"/>
  <path d="M50 14 C41 14 39 21 39 29 C39 44 33 50 28 56 L72 56 C67 50 61 44 61 29 C61 21 59 14 50 14 Z" fill="#b9862e" stroke="${O}" stroke-width="2"/>
  <path d="M43 20 Q41 30 42 41" fill="none" stroke="#e2b95c" stroke-width="2"/>
  <rect x="25" y="56" width="50" height="6.5" rx="3" fill="#9a6f1f" stroke="${O}" stroke-width="1.8"/>` }

];

/* All 52 faces: [{ id, label, svg }] */
export const FACES = ICONS.map(({ id, label, svg }) => ({
  id,
  label,
  svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">${svg}</svg>`
}));
