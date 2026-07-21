import type { Lang } from '../types';

interface DclCopy {
  eyebrow: string;
  status: string;
  viewLive: string;
  viewCode: string;
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
  stackEyebrow: string;
  openSourceNote: string;
  navEyebrow: string;
  backSub: string;
  backHome: string;
  nextSub: string;
  nextProj: string;
  avail: string;
}

export const dclCopy: Record<Lang, DclCopy> = {
  en: {
    eyebrow: 'Senior Software Engineer · React · TypeScript · 2025',
    status: 'Live in production',
    viewLive: 'Top Scenes',
    viewCode: 'View the code',
    heroStatement: 'What I shipped at Decentraland: a shared component library, the public Top Scenes app built on top of it, and a set of Creator Hub features.',
    ctxEyebrow: 'Scope',
    ctxHead: 'Two distinct efforts',
    ctx: 'I worked across two areas of Decentraland — an open, community-owned 3D world. First, the public web: I built reusable Card and Table components and shipped the Top Scenes ranking on top of them. Then the Creator Hub: features for the people who build and publish scenes.',
    p1kicker: 'Design System + Top Scenes',
    p1head: 'I built the components, then the product',
    p1copy: "I didn't start with the page — I started with the pieces. First I added reusable Card and Table components to Decentraland's shared ui2 design system, built in Storybook. Then I composed the public Top Scenes app on top of them with React and React Query.",
    dsLabel: 'Design system · screenshots',
    videoLabel: 'Top Scenes · video',
    p2kicker: 'Creator Hub',
    p2head: 'Features I shipped in the Creator Hub',
    p2copy: 'I contributed a handful of features across the Creator Hub — the desktop app creators use to build, preview and publish scenes.',
    stackEyebrow: 'Stack',
    openSourceNote: 'Decentraland is open source — browse the repos above to see every contribution.',
    navEyebrow: 'Keep exploring',
    backSub: 'All projects',
    backHome: 'Back to portfolio',
    nextSub: 'Next project',
    nextProj: 'SecurityScorecard',
    avail: 'Open to freelance — short & long term',
  },
  es: {
    eyebrow: 'Senior Software Engineer · React · TypeScript · 2025',
    status: 'En producción',
    viewLive: 'Top Scenes',
    viewCode: 'Ver el código',
    heroStatement: 'Lo que construí en Decentraland: una librería de componentes compartida, el app público de Top Scenes armado encima de ella, y un set de features del Creator Hub.',
    ctxEyebrow: 'Alcance',
    ctxHead: 'Dos esfuerzos distintos',
    ctx: 'Trabajé en dos áreas de Decentraland — un mundo 3D abierto y de la comunidad. Primero, la web pública: construí componentes reutilizables Card y Table y armé encima de ellos el ranking de Top Scenes. Después, el Creator Hub: features para quienes crean y publican escenas.',
    p1kicker: 'Design System + Top Scenes',
    p1head: 'Primero los componentes, después el producto',
    p1copy: 'No empecé por la página — empecé por las piezas. Primero sumé componentes reutilizables Card y Table al design system compartido ui2 de Decentraland, construido en Storybook. Después armé el app público de Top Scenes encima de ellos con React y React Query.',
    dsLabel: 'Design system · screenshots',
    videoLabel: 'Top Scenes · video',
    p2kicker: 'Creator Hub',
    p2head: 'Features que lancé en el Creator Hub',
    p2copy: 'Aporté varias features a lo largo del Creator Hub — la app de escritorio que usan los creadores para construir, previsualizar y publicar escenas.',
    stackEyebrow: 'Stack',
    openSourceNote: 'Decentraland es open source — mirá los repos de arriba para ver cada contribución.',
    navEyebrow: 'Seguí explorando',
    backSub: 'Todos los proyectos',
    backHome: 'Volver al portfolio',
    nextSub: 'Siguiente proyecto',
    nextProj: 'SecurityScorecard',
    avail: 'Disponible para freelance — corto y largo plazo',
  },
};

export const p1points = {
  en: [
    { n: '01', title: 'Reusable Card & Table in ui2', desc: 'Typed, themeable, documented components added to the shared library — used well beyond this project.' },
    { n: '02', title: 'Top Scenes app · React + React Query', desc: 'Ranked list of the most-visited scenes, with server-state caching, loading & error states, and a layout that adapts from table to cards.' },
    { n: '03', title: 'Live in production', desc: 'Live and public at decentraland.org/top-scenes.' },
  ],
  es: [
    { n: '01', title: 'Card y Table reutilizables en ui2', desc: 'Componentes tipados, themeables y documentados, sumados a la librería compartida — usados mucho más allá de este proyecto.' },
    { n: '02', title: 'App de Top Scenes · React + React Query', desc: 'Listado rankeado de las escenas más visitadas, con cache de server-state, estados de carga y error, y un layout que pasa de tabla a cards.' },
    { n: '03', title: 'En producción', desc: 'En vivo y público en decentraland.org/top-scenes.' },
  ],
};

export const features = {
  en: [
    { n: 'F1', title: 'UI overhaul, component by component', desc: "The Creator Hub's interface hadn't been touched in years. I reworked the components and interaction patterns across the app to bring it up to modern standards.", video: '/video/ui.mov' },
    { n: 'F2', title: 'Tag items, act on many at once', desc: 'Creators could only act on one scene or asset at a time. I added tagging, so they can group items and apply an action to all of them in one step.', video: '/video/tags.mov' },
    { n: 'F3', title: 'Settings: editors and updates', desc: 'Added a settings panel to choose a default code editor, automatically detect which editors are installed, and keep the Creator Hub itself up to date automatically.', video: '/video/settings.mov' },
  ],
  es: [
    { n: 'F1', title: 'Renovación de UI, componente por componente', desc: 'La interfaz del Creator Hub no se tocaba hacía años. Rehice los componentes y los patrones de interacción de toda la app para llevarla a un estándar moderno.', video: '/video/ui.mov' },
    { n: 'F2', title: 'Taggear items, actuar sobre varios a la vez', desc: 'Los creadores solo podían actuar sobre una escena o asset a la vez. Agregué tags para que puedan agrupar items y aplicar una acción sobre todos en un solo paso.', video: '/video/tags.mov' },
    { n: 'F3', title: 'Settings: editores y actualizaciones', desc: 'Sumé un panel de settings para elegir un editor de código default, detectar automáticamente qué editores están instalados, y mantener actualizado el Creator Hub automáticamente.', video: '/video/settings.mov' },
  ],
};

export const stack = ['TypeScript', 'React', 'React Query', 'Redux', 'Web3 / Ethereum', 'Electron', 'Storybook', 'Vite'];
