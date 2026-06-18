import type { Lang } from '../types';

interface DclCopy {
  eyebrow: string;
  heroStatement: string;
  ctxEyebrow: string;
  ctxHead: string;
  ctx: string;
  p1kicker: string;
  p1head: string;
  p1copy: string;
  dsLabel: string;
  videoLabel: string;
  p2kicker: string;
  p2head: string;
  p2copy: string;
  featNote: string;
  stackEyebrow: string;
  navEyebrow: string;
  backSub: string;
  backHome: string;
  nextSub: string;
  nextProj: string;
  avail: string;
}

export const dclCopy: Record<Lang, DclCopy> = {
  en: {
    eyebrow: 'Senior Software Engineer · 2026',
    heroStatement: 'What I shipped at Decentraland: a shared component library, the public Top Scenes app built on top of it, and a set of Creator Hub features.',
    ctxEyebrow: 'Scope',
    ctxHead: 'Two distinct efforts',
    ctx: 'I worked across two areas of Decentraland — an open, community-owned 3D world. First, the public web: I built reusable Card and Table components and shipped the Top Scenes ranking on top of them. Then the Creator Hub: features for the people who build and publish scenes.',
    p1kicker: 'Design System + Top Scenes',
    p1head: 'I built the components, then the product',
    p1copy: "I didn't start with the page — I started with the pieces. First I added reusable Card and Table components to Decentraland's shared ui2 design system. Then I composed the public Top Scenes app on top of them with React and React Query.",
    dsLabel: 'Design system · screenshots',
    videoLabel: 'Top Scenes · video',
    p2kicker: 'Creator Hub',
    p2head: 'Features I shipped in the Creator Hub',
    p2copy: 'I contributed a handful of features across the Creator Hub — the desktop app creators use to build, preview and publish scenes.',
    featNote: 'Editable — swap titles, copy and screenshots for your real Creator Hub features.',
    stackEyebrow: 'Stack',
    navEyebrow: 'Keep exploring',
    backSub: 'All projects',
    backHome: 'Back to portfolio',
    nextSub: 'Next project',
    nextProj: 'Tardeo Argentino',
    avail: 'Open to freelance — short & long term',
  },
  es: {
    eyebrow: 'Senior Software Engineer · 2026',
    heroStatement: 'Lo que construí en Decentraland: una librería de componentes compartida, el app público de Top Scenes armado encima de ella, y un set de features del Creator Hub.',
    ctxEyebrow: 'Alcance',
    ctxHead: 'Dos esfuerzos distintos',
    ctx: 'Trabajé en dos áreas de Decentraland — un mundo 3D abierto y de la comunidad. Primero, la web pública: construí componentes reutilizables Card y Table y armé encima de ellos el ranking de Top Scenes. Después, el Creator Hub: features para quienes crean y publican escenas.',
    p1kicker: 'Design System + Top Scenes',
    p1head: 'Primero los componentes, después el producto',
    p1copy: 'No empecé por la página — empecé por las piezas. Primero sumé componentes reutilizables Card y Table al design system compartido ui2 de Decentraland. Después armé el app público de Top Scenes encima de ellos con React y React Query.',
    dsLabel: 'Design system · screenshots',
    videoLabel: 'Top Scenes · video',
    p2kicker: 'Creator Hub',
    p2head: 'Features que lancé en el Creator Hub',
    p2copy: 'Aporté varias features a lo largo del Creator Hub — la app de escritorio que usan los creadores para construir, previsualizar y publicar escenas.',
    featNote: 'Editable — reemplazá títulos, textos y screenshots por tus features reales del Creator Hub.',
    stackEyebrow: 'Stack',
    navEyebrow: 'Seguí explorando',
    backSub: 'Todos los proyectos',
    backHome: 'Volver al portfolio',
    nextSub: 'Siguiente proyecto',
    nextProj: 'Tardeo Argentino',
    avail: 'Disponible para freelance — corto y largo plazo',
  },
};

export const p1points = {
  en: [
    { n: '01', title: 'Reusable Card & Table in ui2', desc: 'Typed, themeable, documented components added to the shared library — used well beyond this project.' },
    { n: '02', title: 'Top Scenes app · React + React Query', desc: 'Ranked list of the most-visited scenes, with server-state caching, loading & error states, and a layout that adapts from table to cards.' },
    { n: '03', title: 'Shipped to production', desc: 'Live and public at decentraland.org/top-scenes.' },
  ],
  es: [
    { n: '01', title: 'Card y Table reutilizables en ui2', desc: 'Componentes tipados, themeables y documentados, sumados a la librería compartida — usados mucho más allá de este proyecto.' },
    { n: '02', title: 'App de Top Scenes · React + React Query', desc: 'Listado rankeado de las escenas más visitadas, con cache de server-state, estados de carga y error, y un layout que pasa de tabla a cards.' },
    { n: '03', title: 'En producción', desc: 'En vivo y público en decentraland.org/top-scenes.' },
  ],
};

export const p1tags = ['React', 'React Query', 'TypeScript', 'Redux', 'Web3', 'Storybook'];

export const features = {
  en: [
    { n: 'F1', title: 'Feature one — rename me', desc: 'Short description of what you built and the impact it had. Edit this text and drop a screenshot.', tags: ['React', 'TypeScript'] },
    { n: 'F2', title: 'Feature two — rename me', desc: 'Short description of what you built and the impact it had. Edit this text and drop a screenshot.', tags: ['Electron', 'UX'] },
    { n: 'F3', title: 'Feature three — rename me', desc: 'Short description of what you built and the impact it had. Edit this text and drop a screenshot.', tags: ['React', 'Web3'] },
  ],
  es: [
    { n: 'F1', title: 'Feature uno — renombrame', desc: 'Descripción corta de lo que construiste y el impacto que tuvo. Editá este texto y soltá un screenshot.', tags: ['React', 'TypeScript'] },
    { n: 'F2', title: 'Feature dos — renombrame', desc: 'Descripción corta de lo que construiste y el impacto que tuvo. Editá este texto y soltá un screenshot.', tags: ['Electron', 'UX'] },
    { n: 'F3', title: 'Feature tres — renombrame', desc: 'Descripción corta de lo que construiste y el impacto que tuvo. Editá este texto y soltá un screenshot.', tags: ['React', 'Web3'] },
  ],
};

export const stack = ['TypeScript', 'React', 'React Query', 'Redux', 'Web3 / Ethereum', 'Electron', 'Storybook', 'Vite'];
