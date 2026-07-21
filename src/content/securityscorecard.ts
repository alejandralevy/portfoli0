import type { Lang } from '../types';

interface SscCopy {
  eyebrow: string;
  status: string;
  heroStatement: string;
  introCopy1: string;
  introCopy2: string;
  aKicker: string;
  aHead: string;
  a1label: string;
  a1head: string;
  a1copy: string;
  beforeTag: string;
  afterTag: string;
  a2label: string;
  a2head: string;
  a2copy: string;
  decisionsLabel: string;
  videoLabel: string;
  videoCaption: string;
  a3label: string;
  a3head: string;
  a3copy: string;
  a3note: string;
  bKicker: string;
  bHead: string;
  bCopy: string;
  northStarLabel: string;
  northStar: string;
  techLabel: string;
  bVideoLabel: string;
  closeKicker: string;
  closeStatement: string;
  fillIn: string;
  navEyebrow: string;
  backSub: string;
  backHome: string;
  nextSub: string;
  nextProj: string;
  avail: string;
  liveSite: string;
  qLandingLabel: string;
  rbacBlogLabel: string;
}

export interface Thread {
  tag: string;
  title: string;
  desc: string;
}

export interface Decision {
  tag: string;
  text: string;
  todo: boolean;
}

export interface Step {
  tag: string;
  metric: string;
  title: string;
  desc: string;
}

export const sscCopy: Record<Lang, SscCopy> = {
  en: {
    eyebrow: 'Senior Software Engineer & Technical Product Manager · 2024',
    status: 'Live in production',
    heroStatement: "Two years at SecurityScorecard shaped me into a technical product manager — first by proposing the right solutions, then by leading an IT team while staying hands-on as the developer building those same features.",
    introCopy1: "At SecurityScorecard, I chose to build fast and test — shipping locked roles first and letting real usage guide what came next, cutting the platform's most common flow from ~15 clicks to 2. Then I led the bigger effort: migrating and rebuilding the entire questionnaires product off atlas.io, an inherited tool that was slow, dated, and painful for vendors to use — leading the team while staying hands-on as the developer building it.",
    introCopy2: "I'm an engineer who happens to think in product — so these aren't two stories about features. They're about the calls I made and the code I shipped to back them.",
    aKicker: 'Project B · Questionnaires',
    aHead: 'Migrating and rebuilding the whole product',
    a1label: 'The problem',
    a1head: 'A separate product nobody could use',
    a1copy: "The questionnaires lived on atlas.io — a separate app with its own login, disconnected from the platform. Old framework, slow loads, and a UI that made no sense: vendors couldn't tell where they were or what to do next.",
    beforeTag: 'Before · atlas.io',
    afterTag: 'After · securityscorecard.io',
    a2label: 'Engineering core',
    a2head: 'The migration',
    a2copy: "Because I'd already shipped features on this product, I was the one asked to lead the migration. I collaborated on the architecture decisions and led <strong>a team of 5 developers over 6 months</strong> who helped build it, while staying hands-on myself building components.",
    decisionsLabel: 'Engineering decisions',
    videoLabel: 'Improvements · video',
    videoCaption: 'Improvements, shipped.',
    a3label: 'Shipping + leading',
    a3head: 'UX improvements, and leading the team',
    a3copy: 'Once it was migrated, I shipped a series of UX improvements — and led 5 engineers while staying hands-on in the codebase. I drew the flows, owned the roadmap, wrote the tickets and worked through the edge cases. But the output was always shipped code, not slides.',
    a3note: 'No PM assigned — so I also held the product side (roadmap, specs, edge cases) to keep the team unblocked.',
    bKicker: 'Project A · RBAC',
    bHead: 'A permission model for the whole platform',
    bCopy: "SecurityScorecard had no real access control: every user was admin, normal user, or guest. The team wanted to jump straight to a fully custom permission model. I made the call to <strong>ship first</strong>: predefined roles with permissions baked in, covering the largest share of users on day one. Only after real usage validated the gaps did I open it up, surfacing every permission so admins could edit roles and build custom ones.",
    northStarLabel: 'North star',
    northStar: 'Make the 80% case take 2 clicks.',
    techLabel: 'What made it engineering, not PM',
    bVideoLabel: 'RBAC in action · video',
    closeKicker: 'Takeaway',
    closeStatement: "I can take a product that's technically rough and own it end-to-end — the migration, the architecture, the team, and the product calls that decide what's worth building.",
    fillIn: 'fill in',
    navEyebrow: 'Keep exploring',
    backSub: 'All projects',
    backHome: 'Back to portfolio',
    nextSub: 'Next project',
    nextProj: 'WeCare',
    avail: 'Open to freelance — short & long term',
    liveSite: 'securityscorecard.com',
    qLandingLabel: "See SecurityScorecard's Questionnaires solution",
    rbacBlogLabel: "Read SecurityScorecard's RBAC write-up",
  },
  es: {
    eyebrow: 'Senior Software Engineer & Technical Product Manager · 2024',
    status: 'En producción',
    heroStatement: 'Dos años en SecurityScorecard me formaron como technical product manager — primero proponiendo las mejores soluciones, luego liderando un equipo de IT mientras seguía siendo hands-on developer en esas mismas features.',
    introCopy1: 'En SecurityScorecard, mi decisión fue construir rápido y testear — shipeando roles bloqueados primero y dejando que el uso real guiara los próximos pasos, lo que redujo el flujo más común de la plataforma de ~15 clics a 2. Después lideré el esfuerzo más grande: migrar y reconstruir el producto de cuestionarios completo desde atlas.io, una herramienta heredada lenta, anticuada y dolorosa de usar para los vendors — liderando al equipo mientras seguía siendo hands-on como developer construyéndolo.',
    introCopy2: 'Soy una ingeniera que piensa en producto — así que esto no son dos historias sobre features. Son las decisiones que tomé y el código que escribí para sostenerlas.',
    aKicker: 'Proyecto B · Cuestionarios',
    aHead: 'Migrar y reconstruir el producto completo',
    a1label: 'El problema',
    a1head: 'Un producto separado que nadie podía usar',
    a1copy: 'Los cuestionarios vivían en atlas.io — una app aparte con su propio login, desconectada de la plataforma. Framework viejo, cargas lentas, y una UI que no se entendía: el vendor no sabía dónde estaba ni qué hacer.',
    beforeTag: 'Before · atlas.io',
    afterTag: 'After · securityscorecard.io',
    a2label: 'Núcleo de ingeniería',
    a2head: 'La migración',
    a2copy: 'Como ya había shippeado features en este producto, fui la persona elegida para liderar la migración. Colaboré en las decisiones de arquitectura y lideré a <strong>un equipo de 5 developers durante 6 meses</strong> que ayudaron a construirla, mientras seguía siendo hands-on yo misma, creando componentes.',
    decisionsLabel: 'Decisiones de ingeniería',
    videoLabel: 'Mejoras · video',
    videoCaption: 'Mejoras, shipeadas.',
    a3label: 'Shipping + liderazgo',
    a3head: 'Mejoras de UX, y liderar al equipo',
    a3copy: 'Una vez migrado, shipeé una serie de mejoras de UX — y lideré a 5 ingenieros sin soltar el código. Dibujé los flujos, fui dueña del roadmap, escribí los tickets y resolví los edge cases. Pero lo que salía siempre era código, no slides.',
    a3note: 'Sin PM asignado — así que también sostuve el lado de producto (roadmap, specs, edge cases) para mantener al equipo desbloqueado.',
    bKicker: 'Proyecto A · RBAC',
    bHead: 'Un modelo de permisos para toda la plataforma',
    bCopy: 'SecurityScorecard no tenía control de accesos real: cada usuario era admin, usuario normal o guest. El equipo quería ir directo a un modelo de permisos totalmente custom. Mi decisión fue <strong>shippear primero</strong>: roles predefinidos con permisos baked-in, cubriendo a la mayor cantidad de usuarios desde el día uno. Recién después de validar con uso real abrí el modelo, mostrando todos los permisos para que los admins pudieran editar roles y crear roles custom.',
    northStarLabel: 'North star',
    northStar: 'Que el caso 80% se resuelva en 2 clics.',
    techLabel: 'Lo que lo hace ingeniería, no PM',
    bVideoLabel: 'RBAC en acción · video',
    closeKicker: 'Conclusión',
    closeStatement: 'Puedo tomar un producto técnicamente difícil y sostenerlo de punta a punta — la migración, la arquitectura, el equipo, y las decisiones de producto que definen qué vale la pena construir.',
    fillIn: 'completar',
    navEyebrow: 'Seguí explorando',
    backSub: 'Todos los proyectos',
    backHome: 'Volver al portfolio',
    nextSub: 'Siguiente proyecto',
    nextProj: 'WeCare',
    avail: 'Disponible para freelance — corto y largo plazo',
    liveSite: 'securityscorecard.com',
    qLandingLabel: 'Ver la solución de Questionnaires de SecurityScorecard',
    rbacBlogLabel: 'Leé el artículo de RBAC de SecurityScorecard',
  },
};

export const heroTags = ['React', 'TypeScript', 'React Hook Form', 'React Query', 'Storybook'];

export const decoPositions = ['14%', '32%', '50%', '68%', '86%'];

export const problems: Record<Lang, string[]> = {
  en: [
    'Horrible UX — slow, dated, fought the user at every step',
    'Separate UI — its own login, disconnected from the rest of the platform',
    "Nothing was legible — vendors couldn't tell where they were or what came next",
  ],
  es: [
    'UX horrible — lenta, anticuada, le peleaba al usuario en cada paso',
    'UI separada — login propio, desconectada del resto de la plataforma',
    'Nada se entendía — el vendor no sabía dónde estaba ni qué seguía',
  ],
};

export const threads: Record<Lang, Thread[]> = {
  en: [
    { tag: 'Project A', title: 'RBAC — platform permission model', desc: 'Designed access control across every module, shipping locked roles before a permission matrix.' },
    { tag: 'Project B', title: 'Questionnaires — migration + rebuild', desc: 'Moved the whole product off atlas.io into the platform and rebuilt the front end in React + TypeScript.' },
  ],
  es: [
    { tag: 'Proyecto A', title: 'RBAC — modelo de permisos', desc: 'Diseñé el control de acceso de todos los módulos, shipeando roles bloqueados antes que una matriz.' },
    { tag: 'Proyecto B', title: 'Cuestionarios — migración + rebuild', desc: 'Migré el producto completo desde atlas.io a la plataforma y reconstruí el front en React + TypeScript.' },
  ],
};

export const decisions: Record<Lang, Decision[]> = {
  en: [
    { tag: 'React Hook Form', text: 'Managed every field in the questionnaire, so answers updated <strong>optimistically</strong> in the UI before the change ever reached the API.', todo: false },
    { tag: 'React Query', text: 'Used mutations for every piece of state that talked to the server, keeping caching, sync and server state in one place.', todo: false },
    { tag: 'Storybook', text: 'Built a design system covering every component, so the team could reuse them instead of rebuilding UI per screen.', todo: false },
    { tag: 'Platform', text: "Folded into the platform's auth, navigation and design system, so it stopped feeling like a separate app.", todo: false },
  ],
  es: [
    { tag: 'React Hook Form', text: 'Manejaba cada campo del cuestionario, para que las respuestas se actualizaran de forma <strong>optimista</strong> en la UI antes de que el cambio llegara a la API.', todo: false },
    { tag: 'React Query', text: 'Mutations para cada pedazo de estado que hablaba con el servidor, manteniendo caching, sync y server state en un solo lugar.', todo: false },
    { tag: 'Storybook', text: 'Construí un design system que cubría cada componente, para que el equipo pudiera reutilizarlos en vez de reconstruir la UI pantalla por pantalla.', todo: false },
    { tag: 'Plataforma', text: 'Integrado al auth, navegación y design system de la plataforma, para que dejara de sentirse como una app aparte.', todo: false },
  ],
};

export const steps: Record<Lang, Step[]> = {
  en: [
    {
      tag: 'Step 1 · Requested',
      metric: '~15 clicks',
      title: 'Build your own roles, from scratch',
      desc: "Customers asked to build their own roles from the ground up: create a role, then check off every permission for it, one at a time, to build a fully custom permission matrix.",
    },
    {
      tag: 'Step 2 · My pivot',
      metric: '2 clicks',
      title: 'More roles, not a matrix',
      desc: "I paused. Building a role that way took real time, and most customers needed roughly the same handful of roles. I made the call to design for <strong>the 80% case</strong> first: ship a richer set of predefined roles, like Marketing Manager or Questionnaires Reviewer, covering real use cases without touching a matrix.",
    },
    {
      tag: 'Step 3 · Phase 2',
      metric: 'after validation',
      title: 'Editable matrix, fully custom',
      desc: "In a second iteration, I built the <strong>editable permission matrix</strong>, giving customers full control to fine-tune roles or create entirely custom ones on top of the predefined set.",
    },
  ],
  es: [
    {
      tag: 'Paso 1 · Pedido',
      metric: '~15 clics',
      title: 'Crear tus propios roles, desde cero',
      desc: "Los clientes pedían crear sus propios roles desde cero: crear un rol y tildar permiso por permiso hasta armar una matriz de permisos totalmente custom.",
    },
    {
      tag: 'Paso 2 · Mi pivot',
      metric: '2 clics',
      title: 'Más roles, no una matriz',
      desc: "Frené. Armar un rol así llevaba tiempo real, y la mayoría de los clientes necesitaba más o menos los mismos roles. Mi decisión fue diseñar para <strong>el caso 80%</strong> primero: shippear un set más rico de roles predefinidos, como Marketing Manager o Questionnaires Reviewer, cubriendo los casos reales sin tocar una matriz.",
    },
    {
      tag: 'Paso 3 · Fase 2',
      metric: 'tras validar',
      title: 'Matriz editable, totalmente custom',
      desc: "En una segunda iteración, construí la <strong>matriz de permisos editable</strong>, dando a los clientes control total para ajustar roles o crear roles completamente custom sobre el set predefinido.",
    },
  ],
};

export const techPoints: Record<Lang, string[]> = {
  en: [
    'Built the <strong>roles and permissions data model</strong> and the authorization checks across the platform, covering questionnaires, evidence locker, reports, billing, and user management.',
    'Wrote role-gated UI in React and TypeScript, so components render or disable based on permission.',
  ],
  es: [
    'Construí el <strong>modelo de datos de roles y permisos</strong> y los checks de autorización en toda la plataforma, cubriendo cuestionarios, evidence locker, reportes, billing y gestión de usuarios.',
    'Escribí la UI gateada por rol en React y TypeScript, con componentes que se renderizan o deshabilitan según el permiso.',
  ],
};
