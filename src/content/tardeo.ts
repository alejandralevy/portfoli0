import type { Lang } from '../types';

export interface TardeoCopy {
  eyebrow: string;
  statusBadge: string;
  codeBadge: string;
  viewLive: string;
  viewCode: string;
  heroStatement: string;
  introCopy1: string;
  introCopy2: string;
  aKicker: string;
  aHead: string;
  aBody: string;
  a1label: string;
  a2label: string;
  a2head: string;
  a2body: string;
  paletteLabel: string;
  typeLabel: string;
  typeHeadline: string;
  typeHandwritten: string;
  typeBody: string;
  a3label: string;
  a3head: string;
  a3body: string;
  a3note: string;
  wireframesLabel: string;
  wireframesOpen: string;
  bKicker: string;
  bHead: string;
  bBody: string;
  componentKitLabel: string;
  howBuiltLabel: string;
  storybookNote: string;
  closeKicker: string;
  closeStatement: string;
  navEyebrow: string;
  backSub: string;
  backHome: string;
  nextSub: string;
  nextProj: string;
  avail: string;
}

export const tardeoCopy: Record<Lang, TardeoCopy> = {
  en: {
    eyebrow: 'Engineering · Design · Side project · 2025',
    statusBadge: 'Live in production',
    codeBadge: 'Code open to view',
    viewLive: 'View it live',
    viewCode: 'View the code',
    heroStatement: 'A side project I designed and built end-to-end — an event platform for the Argentine "tardeo": afternoon get-togethers that run from late lunch into the night. From the brand to the React build to the deploy, all of it mine.',
    introCopy1: "This one had no brief, no client and no PM — just me. So it became the place to own the whole stack of decisions: what it should feel like, how the flows work, and how it's actually built. Design and engineering, start to finish.",
    introCopy2: "I'm an engineer who designs — so I treated the brand and the code as one piece of work. The playful, hand-drawn feel isn't decoration bolted on at the end; it's baked into the components themselves.",
    aKicker: 'Story A · Design',
    aHead: 'Designing the look, the feel and the flows',
    aBody: "The tardeo is loud, warm and a little chaotic — so the product had to feel like that too. I built a small brand system and a set of flows before writing a line of UI code, so the playfulness was a system, not a vibe I chased per-screen.",
    a1label: 'Brand principles',
    a2label: 'The system',
    a2head: 'A tiny, opinionated brand kit',
    a2body: 'Three fonts, a cream paper, one hot pink and one deep blue. Hard offset shadows on every button, a dotted-paper background, and handwritten Caveat for the asides. Enough to feel alive, small enough to stay consistent.',
    paletteLabel: 'Palette',
    typeLabel: 'Type',
    typeHeadline: 'headlines',
    typeHandwritten: 'handwritten asides',
    typeBody: 'body & UI',
    a3label: 'Flows',
    a3head: 'Two states, mobile-first',
    a3body: "I wireframed the whole thing mobile-first, then desktop. The core insight was that the home screen has two very different jobs: when there's an upcoming tardeo it has to sell it and drive an RSVP; when there isn't, it has to keep people warm with the gallery and a way to get notified. So I designed both states explicitly.",
    a3note: "RSVP and booking hand off to WhatsApp — where this audience already lives — instead of forcing a new account.",
    wireframesLabel: 'Wireframes · interactive',
    wireframesOpen: 'Open full wireframes ↗',
    bKicker: 'Story B · Engineering',
    bHead: 'Built in React, components first',
    bBody: "I built the reusable components before assembling any screen — buttons, cards, the gallery, the WhatsApp RSVP. With the kit in place the app renders fast, and the rest of the modules we want to add are mostly a matter of putting existing pieces together.",
    componentKitLabel: 'Component kit · Storybook',
    howBuiltLabel: "How it's built",
    storybookNote: 'A peek at the shared kit — swap for a Storybook screenshot if you prefer.',
    closeKicker: 'Takeaway',
    closeStatement: "Because the components came first, the brand stays consistent and new modules are quick to add — the work happens once, in the kit.",
    navEyebrow: 'Keep exploring',
    backSub: 'All projects',
    backHome: 'Back to portfolio',
    nextSub: 'Next project',
    nextProj: 'SecurityScorecard',
    avail: 'Open to freelance — short & long term',
  },
  es: {
    eyebrow: 'Ingeniería · Diseño · Proyecto propio · 2025',
    statusBadge: 'En producción',
    codeBadge: 'Código disponible',
    viewLive: 'Ver en vivo',
    viewCode: 'Ver el código',
    heroStatement: 'Un proyecto personal que diseñé y construí de punta a punta — una plataforma de eventos para el tardeo argentino: juntadas de tarde que van desde el almuerzo hasta la noche. De la marca al código React al deploy, todo mío.',
    introCopy1: "Este no tuvo brief, ni cliente, ni PM — solo yo. Así que se convirtió en el lugar para tomar todas las decisiones: qué sensación debía tener, cómo funcionan los flujos, y cómo está construido de verdad. Diseño e ingeniería, de principio a fin.",
    introCopy2: "Soy una ingeniera que diseña — así que traté la marca y el código como una sola pieza de trabajo. El aspecto lúdico y artesanal no es decoración añadida al final; está integrado en los componentes mismos.",
    aKicker: 'Historia A · Diseño',
    aHead: 'Diseñando el look, la sensación y los flujos',
    aBody: "El tardeo es ruidoso, cálido y un poco caótico — así que el producto tenía que sentirse así también. Construí un sistema de marca pequeño y un conjunto de flujos antes de escribir una línea de código UI, para que la jugabilidad fuera un sistema, no un vibe que perseguí pantalla por pantalla.",
    a1label: 'Principios de marca',
    a2label: 'El sistema',
    a2head: 'Un kit de marca pequeño y con carácter',
    a2body: 'Tres fuentes, papel crema, un rosa fuerte y un azul profundo. Sombras offset duras en cada botón, fondo de papel punteado, y Caveat manuscrita para los apuntes. Suficiente para sentirse vivo, pequeño para mantenerse consistente.',
    paletteLabel: 'Paleta',
    typeLabel: 'Tipografía',
    typeHeadline: 'titulares',
    typeHandwritten: 'apuntes manuscritos',
    typeBody: 'cuerpo y UI',
    a3label: 'Flujos',
    a3head: 'Dos estados, mobile-first',
    a3body: "Wireframeé todo mobile-first, luego desktop. El insight clave fue que la pantalla de inicio tiene dos trabajos muy diferentes: cuando hay un tardeo próximo tiene que venderlo y generar un RSVP; cuando no hay, tiene que mantener a la gente enganchada con la galería y una forma de ser notificada. Así que diseñé explícitamente ambos estados.",
    a3note: "El RSVP y la reserva van directo a WhatsApp — donde ya vive esta audiencia — en lugar de forzar una cuenta nueva.",
    wireframesLabel: 'Wireframes · interactivos',
    wireframesOpen: 'Ver wireframes completos ↗',
    bKicker: 'Historia B · Ingeniería',
    bHead: 'Construido en React, componentes primero',
    bBody: "Construí los componentes reutilizables antes de armar cualquier pantalla — botones, cards, la galería, el RSVP de WhatsApp. Con el kit listo la app renderiza rápido, y el resto de los módulos que queremos agregar son mayormente ensamblar piezas que ya existen.",
    componentKitLabel: 'Kit de componentes · Storybook',
    howBuiltLabel: "Cómo está construido",
    storybookNote: 'Una mirada al kit compartido — reemplazá por un screenshot de Storybook si preferís.',
    closeKicker: 'Conclusión',
    closeStatement: "Porque los componentes vinieron primero, la marca se mantiene consistente y los nuevos módulos se agregan rápido — el trabajo se hace una vez, en el kit.",
    navEyebrow: 'Seguí explorando',
    backSub: 'Todos los proyectos',
    backHome: 'Volver al portfolio',
    nextSub: 'Siguiente proyecto',
    nextProj: 'SecurityScorecard',
    avail: 'Disponible para freelance — corto y largo plazo',
  },
};

export const heroTags = [
  'React', 'Brand design', 'UX flows', 'Mobile-first', 'WhatsApp handoff', 'In production',
];

export const threads: Record<Lang, Array<{ tag: string; dot: string; title: string; desc: string }>> = {
  en: [
    { tag: 'Thread A · Design',      dot: '#E0227E', title: 'Brand + flows',       desc: 'A small playful brand system and the full set of screens, designed mobile-first before any UI code.' },
    { tag: 'Thread B · Engineering', dot: '#2A1D9E', title: 'React build + deploy', desc: 'One React codebase rendering mobile and desktop from shared state, shipped to production and open to read.' },
  ],
  es: [
    { tag: 'Hilo A · Diseño',       dot: '#E0227E', title: 'Marca + flujos',       desc: 'Un sistema de marca pequeño y lúdico y el conjunto completo de pantallas, diseñado mobile-first antes de cualquier código UI.' },
    { tag: 'Hilo B · Ingeniería',   dot: '#2A1D9E', title: 'Build React + deploy', desc: 'Una base de código React que renderiza mobile y desktop desde el estado compartido, lanzada a producción y disponible para leer.' },
  ],
};

export const brandPrinciples: Record<Lang, Array<{ title: string; desc: string }>> = {
  en: [
    { title: 'Loud, but legible',        desc: 'Big type and hot pink up front — but a calm cream paper and one clear action per screen underneath.' },
    { title: 'Feels hand-made',           desc: 'Hard offset shadows, dotted paper, handwritten asides. Friendly, not corporate.' },
    { title: 'Meet people where they are', desc: 'No new account. RSVP and booking hand straight off to WhatsApp.' },
  ],
  es: [
    { title: 'Ruidoso, pero legible',      desc: 'Tipografía grande y rosa fuerte al frente — pero papel crema tranquilo y una acción clara por pantalla debajo.' },
    { title: 'Se siente artesanal',        desc: 'Sombras offset duras, papel punteado, apuntes manuscritos. Amigable, no corporativo.' },
    { title: 'Encontrá a la gente donde está', desc: 'Sin cuenta nueva. El RSVP y la reserva van directo a WhatsApp.' },
  ],
};

export const palette = [
  { hex: '#FF2E9D', bg: 'rgb(255,46,157)' },
  { hex: '#2A1D9E', bg: 'rgb(42,29,158)' },
  { hex: '#F4F1E8', bg: 'rgb(244,241,232)' },
  { hex: '#20201E', bg: 'rgb(32,32,30)' },
];

export const paletteLabels: Record<Lang, string[]> = {
  en: ['Pink', 'Blue', 'Paper', 'Ink'],
  es: ['Rosa', 'Azul', 'Papel', 'Tinta'],
};

export const stepCards: Record<Lang, Array<{ tag: string; meta: string; title: string; desc: string }>> = {
  en: [
    { tag: 'Components', meta: 'first',       title: 'Components first',    desc: 'Buttons, cards, the gallery and the WhatsApp RSVP are reusable pieces, built before any screen so nothing gets rebuilt twice.' },
    { tag: 'React',      meta: 'state-driven', title: 'React, state-driven', desc: 'Device and event state pick what renders, so mobile and desktop come from one source instead of duplicated screens.' },
    { tag: 'Scales',     meta: 'add modules',  title: 'Easy to extend',      desc: 'New modules are mostly composition — assemble components that already exist and the app renders them fast.' },
  ],
  es: [
    { tag: 'Componentes', meta: 'primero',      title: 'Componentes primero',  desc: 'Botones, cards, la galería y el RSVP de WhatsApp son piezas reutilizables, construidas antes de cualquier pantalla para no reconstruir nada dos veces.' },
    { tag: 'React',       meta: 'state-driven', title: 'React, state-driven',  desc: 'El estado del dispositivo y del evento decide qué renderiza, para que mobile y desktop vengan de una sola fuente en lugar de pantallas duplicadas.' },
    { tag: 'Escala',      meta: 'módulos',      title: 'Fácil de extender',    desc: 'Los nuevos módulos son mayormente composición — ensamblá componentes que ya existen y la app los renderiza rápido.' },
  ],
};

export const techPoints: Record<Lang, string[]> = {
  en: [
    'Reusable component kit built first, so the app renders fast and new modules are mostly assembly.',
    'One React source: device + event state choose the composition, so mobile and desktop never fork into separate screens.',
  ],
  es: [
    'Kit de componentes reutilizables construido primero, para que la app renderice rápido y los nuevos módulos sean mayormente ensamblaje.',
    'Una fuente React: el estado del dispositivo + evento elige la composición, para que mobile y desktop nunca se dividan en pantallas separadas.',
  ],
};

export const storybookItems = ['Button', 'Card', 'Chip', 'Gallery', 'RsvpButton'];

export const decoPositions = ['12%', '30%', '48%', '66%', '84%'];
