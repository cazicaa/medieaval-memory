/* Card face icons: simple medieval weapon/armor shapes, 4 color schemes each.
   Placeholders: {M} = main metal color, {D} = dark shade, wood is constant. */

const WOOD = '#7a5230';
const WOOD_D = '#57381f';

const SHAPES = {
  sword: {
    label: 'Sword',
    svg: `
      <polygon points="50,4 43,16 43,60 57,60 57,16" fill="{M}" stroke="{D}" stroke-width="2"/>
      <line x1="50" y1="16" x2="50" y2="58" stroke="{D}" stroke-width="2"/>
      <rect x="34" y="60" width="32" height="7" rx="3" fill="{D}"/>
      <rect x="45" y="67" width="10" height="18" fill="${WOOD}" stroke="${WOOD_D}" stroke-width="2"/>
      <circle cx="50" cy="90" r="6" fill="{M}" stroke="{D}" stroke-width="2"/>`
  },
  dagger: {
    label: 'Dagger',
    svg: `
      <polygon points="50,12 38,26 45,56 55,56 62,26" fill="{M}" stroke="{D}" stroke-width="2"/>
      <rect x="32" y="56" width="36" height="7" rx="3" fill="{D}"/>
      <rect x="44" y="63" width="12" height="16" fill="${WOOD}" stroke="${WOOD_D}" stroke-width="2"/>
      <rect x="40" y="79" width="20" height="8" rx="4" fill="{M}" stroke="{D}" stroke-width="2"/>`
  },
  axe: {
    label: 'Axe',
    svg: `
      <rect x="47" y="12" width="7" height="80" rx="2" fill="${WOOD}" stroke="${WOOD_D}" stroke-width="2"/>
      <path d="M47 16 Q18 22 20 48 Q34 40 47 44 Z" fill="{M}" stroke="{D}" stroke-width="2"/>`
  },
  doubleaxe: {
    label: 'Double Axe',
    svg: `
      <rect x="47" y="12" width="7" height="80" rx="2" fill="${WOOD}" stroke="${WOOD_D}" stroke-width="2"/>
      <path d="M47 16 Q18 22 20 48 Q34 40 47 44 Z" fill="{M}" stroke="{D}" stroke-width="2"/>
      <path d="M54 16 Q83 22 81 48 Q67 40 54 44 Z" fill="{M}" stroke="{D}" stroke-width="2"/>`
  },
  mace: {
    label: 'Mace',
    svg: `
      <rect x="47" y="36" width="7" height="56" rx="2" fill="${WOOD}" stroke="${WOOD_D}" stroke-width="2"/>
      <circle cx="50" cy="24" r="15" fill="{M}" stroke="{D}" stroke-width="2"/>
      <circle cx="50" cy="24" r="4" fill="{D}"/>
      <circle cx="40" cy="17" r="3" fill="{D}"/>
      <circle cx="60" cy="17" r="3" fill="{D}"/>
      <circle cx="40" cy="31" r="3" fill="{D}"/>
      <circle cx="60" cy="31" r="3" fill="{D}"/>`
  },
  flail: {
    label: 'Flail',
    svg: `
      <rect x="42" y="56" width="9" height="36" rx="2" fill="${WOOD}" stroke="${WOOD_D}" stroke-width="2"/>
      <circle cx="49" cy="50" r="3.5" fill="none" stroke="{D}" stroke-width="2.5"/>
      <circle cx="55" cy="42" r="3.5" fill="none" stroke="{D}" stroke-width="2.5"/>
      <circle cx="61" cy="34" r="3.5" fill="none" stroke="{D}" stroke-width="2.5"/>
      <circle cx="68" cy="22" r="11" fill="{M}" stroke="{D}" stroke-width="2"/>
      <polygon points="68,4 65,12 71,12" fill="{M}" stroke="{D}" stroke-width="1.5"/>
      <polygon points="86,22 78,19 78,25" fill="{M}" stroke="{D}" stroke-width="1.5"/>
      <polygon points="55,9 57,17 62,13" fill="{M}" stroke="{D}" stroke-width="1.5"/>
      <polygon points="82,36 74,32 79,28" fill="{M}" stroke="{D}" stroke-width="1.5"/>`
  },
  hammer: {
    label: 'Warhammer',
    svg: `
      <rect x="47" y="16" width="7" height="76" rx="2" fill="${WOOD}" stroke="${WOOD_D}" stroke-width="2"/>
      <rect x="28" y="10" width="44" height="20" rx="3" fill="{M}" stroke="{D}" stroke-width="2"/>
      <rect x="28" y="17" width="44" height="6" fill="{D}"/>`
  },
  spear: {
    label: 'Spear',
    svg: `
      <rect x="48" y="28" width="5" height="64" rx="2" fill="${WOOD}" stroke="${WOOD_D}" stroke-width="2"/>
      <polygon points="50,4 38,28 50,23 62,28" fill="{M}" stroke="{D}" stroke-width="2"/>
      <rect x="44" y="30" width="13" height="5" rx="2" fill="{D}"/>`
  },
  halberd: {
    label: 'Halberd',
    svg: `
      <rect x="47" y="14" width="6" height="78" rx="2" fill="${WOOD}" stroke="${WOOD_D}" stroke-width="2"/>
      <polygon points="50,2 45,14 55,14" fill="{M}" stroke="{D}" stroke-width="2"/>
      <path d="M53 18 Q78 20 76 44 Q63 38 53 42 Z" fill="{M}" stroke="{D}" stroke-width="2"/>
      <polygon points="47,22 34,30 47,38" fill="{M}" stroke="{D}" stroke-width="2"/>`
  },
  bow: {
    label: 'Bow',
    svg: `
      <path d="M32 8 Q80 50 32 92" fill="none" stroke="${WOOD}" stroke-width="6" stroke-linecap="round"/>
      <path d="M32 8 Q80 50 32 92" fill="none" stroke="${WOOD_D}" stroke-width="1.5"/>
      <line x1="32" y1="8" x2="32" y2="92" stroke="{D}" stroke-width="2"/>
      <line x1="20" y1="50" x2="66" y2="50" stroke="{M}" stroke-width="4"/>
      <polygon points="78,50 62,42 62,58" fill="{M}" stroke="{D}" stroke-width="2"/>
      <line x1="20" y1="44" x2="28" y2="50" stroke="{D}" stroke-width="3"/>
      <line x1="20" y1="56" x2="28" y2="50" stroke="{D}" stroke-width="3"/>`
  },
  crossbow: {
    label: 'Crossbow',
    svg: `
      <rect x="46" y="26" width="9" height="62" rx="3" fill="${WOOD}" stroke="${WOOD_D}" stroke-width="2"/>
      <path d="M12 36 Q50 4 88 36" fill="none" stroke="{M}" stroke-width="7" stroke-linecap="round"/>
      <line x1="12" y1="36" x2="88" y2="36" stroke="{D}" stroke-width="2"/>
      <line x1="50" y1="12" x2="50" y2="58" stroke="{D}" stroke-width="4"/>
      <polygon points="50,6 44,16 56,16" fill="{M}" stroke="{D}" stroke-width="1.5"/>
      <rect x="40" y="60" width="21" height="7" rx="3" fill="{M}" stroke="{D}" stroke-width="2"/>`
  },
  shield: {
    label: 'Shield',
    svg: `
      <path d="M50 6 L84 16 V46 Q84 76 50 94 Q16 76 16 46 V16 Z" fill="{M}" stroke="{D}" stroke-width="3"/>
      <path d="M50 22 L72 28 V46 Q72 66 50 78 Q28 66 28 46 V28 Z" fill="{D}"/>
      <circle cx="50" cy="46" r="9" fill="{M}"/>`
  },
  helm: {
    label: 'Helm',
    svg: `
      <path d="M28 30 Q28 8 50 8 Q72 8 72 30 V82 H28 Z" fill="{M}" stroke="{D}" stroke-width="3"/>
      <rect x="32" y="36" width="36" height="8" rx="3" fill="{D}"/>
      <rect x="47" y="48" width="6" height="34" fill="{D}"/>
      <line x1="28" y1="60" x2="44" y2="60" stroke="{D}" stroke-width="2.5"/>
      <line x1="56" y1="60" x2="72" y2="60" stroke="{D}" stroke-width="2.5"/>`
  }
};

const PALETTES = {
  steel:   { label: 'Steel',   main: '#b6c4d0', dark: '#5b6d7c' },
  gold:    { label: 'Gold',    main: '#e5b53d', dark: '#95691a' },
  crimson: { label: 'Crimson', main: '#c74434', dark: '#7c2015' },
  emerald: { label: 'Emerald', main: '#4aa668', dark: '#245c3a' }
};

/* All 52 faces: [{ id, label, svg }] */
export const FACES = Object.entries(SHAPES).flatMap(([shapeKey, shape]) =>
  Object.entries(PALETTES).map(([palKey, pal]) => ({
    id: `${palKey}-${shapeKey}`,
    label: `${pal.label} ${shape.label}`,
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${pal.label} ${shape.label}">${
      shape.svg.replaceAll('{M}', pal.main).replaceAll('{D}', pal.dark)
    }</svg>`
  }))
);
