import type { Lang } from '../types';

interface SscCopy {
  eyebrow: string;
  status: string;
  heroStatement: string;
  introCopy1: string;
  introCopy2: string;
  introNote: string;
  aKicker: string;
  aHead: string;
  a1label: string;
  a1head: string;
  a1copy: string;
  a1drop: string;
  beforeTag: string;
  afterTag: string;
  a2label: string;
  a2head: string;
  a2copy: string;
  fromLabel: string;
  fromDesc: string;
  toLabel: string;
  toDesc: string;
  decisionsLabel: string;
  videoLabel: string;
  videoDrop: string;
  videoCaption: string;
  a3label: string;
  a3head: string;
  a3copy: string;
  a3note: string;
  bKicker: string;
  bHead: string;
  northStarLabel: string;
  northStar: string;
  wfLabel: string;
  wfDrop: string;
  techLabel: string;
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
    eyebrow: 'Senior Software Engineer · React · TypeScript · 2023 → 2024',
    status: 'Shipped to production',
    heroStatement: "I rebuilt SecurityScorecard's vendor-questionnaire product — migrating it off a slow legacy stack into the main platform, then leading the build with a small team while writing the code myself.",
    introCopy1: "Two pieces of work at SecurityScorecard. First I designed the platform's role-based access model (RBAC) — where my call was to ship locked roles before a permission matrix. Then came the bigger one: migrating and rebuilding the entire questionnaires product off atlas.io, an inherited tool that was slow, dated, and painful to use.",
    introCopy2: "I'm an engineer who happens to think in product — so these aren't two stories about features. They're about the calls I made and the code I shipped to back them.",
    introNote: 'Ordered by impact, not chronology — the migration comes first.',
    aKicker: 'Story A · Questionnaires',
    aHead: 'Migrating and rebuilding the whole product',
    a1label: 'The problem',
    a1head: 'A separate product nobody could use',
    a1copy: "The questionnaires lived on atlas.io — a separate app with its own login, disconnected from the platform. Old framework, slow loads, and a UI that made no sense: vendors couldn't tell where they were or what to do next.",
    a1drop: 'Drop the BEFORE walkthrough (video / GIF)',
    beforeTag: 'Before · atlas.io',
    afterTag: 'After · securityscorecard.io',
    a2label: 'Engineering core',
    a2head: 'The migration',
    a2copy: "I migrated the whole product into securityscorecard.io and rebuilt the front end in React + TypeScript. The goal wasn't a port — it was making it fast, consistent with the platform, and maintainable.",
    fromLabel: 'From · legacy',
    fromDesc: 'Old framework · slow · dated',
    toLabel: 'To · rebuilt',
    toDesc: 'React + TypeScript · fast · native to the platform',
    decisionsLabel: 'Engineering decisions',
    videoLabel: 'Improvements · video',
    videoDrop: 'Drop the 18s product demo (video / GIF frame)',
    videoCaption: 'Improvements, shipped.',
    a3label: 'Shipping + leading',
    a3head: 'UX improvements, and leading the team',
    a3copy: 'Once it was migrated, I shipped a series of UX improvements — and led 5 engineers while staying hands-on in the codebase. I drew the flows, owned the roadmap, wrote the tickets and worked through the edge cases. But the output was always shipped code, not slides.',
    a3note: 'No PM assigned — so I also held the product side (roadmap, specs, edge cases) to keep the team unblocked.',
    bKicker: 'Story B · RBAC',
    bHead: 'A permission model for the whole platform',
    northStarLabel: 'North star',
    northStar: 'Make the 80% case take 2 clicks.',
    wfLabel: 'Wireframes · interactive',
    wfDrop: 'Drop RBAC wireframes',
    techLabel: 'What made it engineering, not PM',
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
    qLandingLabel: 'See the live Questionnaires product',
    rbacBlogLabel: "Read SecurityScorecard's RBAC write-up",
  },
  es: {
    eyebrow: 'Senior Software Engineer · React · TypeScript · 2023 → 2024',
    status: 'En producción',
    heroStatement: 'Reconstruí el producto de cuestionarios para vendors de SecurityScorecard — lo migré de un stack legacy lento hacia la plataforma principal, y lideré el desarrollo con un equipo chico mientras escribía el código yo misma.',
    introCopy1: 'Dos trabajos en SecurityScorecard. Primero diseñé el modelo de permisos de la plataforma (RBAC) — donde mi decisión fue shipear roles bloqueados antes que una matriz de permisos. Después vino el grande: migrar y reconstruir el producto de cuestionarios completo desde atlas.io, una herramienta heredada lenta, anticuada y dolorosa de usar.',
    introCopy2: 'Soy una ingeniera que piensa en producto — así que esto no son dos historias sobre features. Son las decisiones que tomé y el código que escribí para sostenerlas.',
    introNote: 'Ordenado por impacto, no por cronología — la migración va primero.',
    aKicker: 'Historia A · Cuestionarios',
    aHead: 'Migrar y reconstruir el producto completo',
    a1label: 'El problema',
    a1head: 'Un producto separado que nadie podía usar',
    a1copy: 'Los cuestionarios vivían en atlas.io — una app aparte con su propio login, desconectada de la plataforma. Framework viejo, cargas lentas, y una UI que no se entendía: el vendor no sabía dónde estaba ni qué hacer.',
    a1drop: 'Soltá el video del BEFORE (video / GIF)',
    beforeTag: 'Before · atlas.io',
    afterTag: 'After · securityscorecard.io',
    a2label: 'Núcleo de ingeniería',
    a2head: 'La migración',
    a2copy: 'Migré el producto completo a securityscorecard.io y reconstruí el front en React + TypeScript. El objetivo no era portar — era hacerlo rápido, consistente con la plataforma y mantenible.',
    fromLabel: 'Desde · legacy',
    fromDesc: 'Framework viejo · lento · anticuado',
    toLabel: 'Hacia · reconstruido',
    toDesc: 'React + TypeScript · rápido · nativo a la plataforma',
    decisionsLabel: 'Decisiones de ingeniería',
    videoLabel: 'Mejoras · video',
    videoDrop: 'Soltá el demo de 18s (video / frame de GIF)',
    videoCaption: 'Mejoras, shipeadas.',
    a3label: 'Shipping + liderazgo',
    a3head: 'Mejoras de UX, y liderar al equipo',
    a3copy: 'Una vez migrado, shipeé una serie de mejoras de UX — y lideré a 5 ingenieros sin soltar el código. Dibujé los flujos, fui dueña del roadmap, escribí los tickets y resolví los edge cases. Pero lo que salía siempre era código, no slides.',
    a3note: 'Sin PM asignado — así que también sostuve el lado de producto (roadmap, specs, edge cases) para mantener al equipo desbloqueado.',
    bKicker: 'Historia B · RBAC',
    bHead: 'Un modelo de permisos para toda la plataforma',
    northStarLabel: 'North star',
    northStar: 'Que el caso 80% se resuelva en 2 clics.',
    wfLabel: 'Wireframes · interactivo',
    wfDrop: 'Soltá wireframes RBAC',
    techLabel: 'Lo que lo hace ingeniería, no PM',
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
    qLandingLabel: 'Ver el producto Questionnaires en vivo',
    rbacBlogLabel: 'Leé el artículo de RBAC de SecurityScorecard',
  },
};

export const heroTags = ['React', 'TypeScript', 'React Query', 'React Hook Form', 'REST APIs', 'SQL'];

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
    { tag: 'Story A', title: 'Questionnaires — migration + rebuild', desc: 'Moved the whole product off atlas.io into the platform and rebuilt the front end in React + TypeScript.' },
    { tag: 'Story B', title: 'RBAC — platform permission model', desc: 'Designed access control across every module, shipping locked roles before a permission matrix.' },
  ],
  es: [
    { tag: 'Historia A', title: 'Cuestionarios — migración + rebuild', desc: 'Migré el producto completo desde atlas.io a la plataforma y reconstruí el front en React + TypeScript.' },
    { tag: 'Historia B', title: 'RBAC — modelo de permisos', desc: 'Diseñé el control de acceso de todos los módulos, shipeando roles bloqueados antes que una matriz.' },
  ],
};

export const decisions: Record<Lang, Decision[]> = {
  en: [
    { tag: 'React Query', text: 'Server state, autosave and caching — so moving between questionnaire sections never re-fetched or lost answers.', todo: false },
    { tag: 'React Hook Form', text: 'Hundreds of fields per questionnaire, validated per-section without re-rendering the whole form.', todo: false },
    { tag: 'Platform', text: "Folded into the platform's auth, navigation and design system, so it stopped feeling like a separate app.", todo: false },
    { tag: 'Hardest part', text: 'The toughest technical piece —', todo: true },
  ],
  es: [
    { tag: 'React Query', text: 'Server state, autosave y caching — así moverse entre secciones del cuestionario nunca re-fetcheaba ni perdía respuestas.', todo: false },
    { tag: 'React Hook Form', text: 'Cientos de campos por cuestionario, validados por sección sin re-renderizar el formulario completo.', todo: false },
    { tag: 'Plataforma', text: 'Integrado al auth, navegación y design system de la plataforma, para que dejara de sentirse como una app aparte.', todo: false },
    { tag: 'Lo más difícil', text: 'La parte técnica más difícil —', todo: true },
  ],
};

export const steps: Record<Lang, Step[]> = {
  en: [
    {
      tag: 'Step 1 · Requested',
      metric: '~15 clicks',
      title: 'The matrix they brought',
      desc: "Designer + CS team came with a permission matrix per user — every user × every permission, 12 columns, no mental model. CS managers: 'I just need to know if this person is an analyst or an admin.'",
    },
    {
      tag: 'Step 2 · My pivot',
      metric: '2 clicks',
      title: 'Locked roles, MVP',
      desc: "They're thinking in roles, not permissions. I shipped fixed roles with baked-in permissions — locked, no editing. 80%+ of cases covered day one. 'Design for the 80% first.'",
    },
    {
      tag: 'Step 3 · Phase 2',
      metric: 'after validation',
      title: 'Editable matrix',
      desc: "Once real CS managers were using it, the feedback was concrete (a 'CS Lead' between Analyst and Admin). Only then I added the custom-role editor — as a power feature, not the default.",
    },
  ],
  es: [
    {
      tag: 'Paso 1 · Pedido',
      metric: '~15 clics',
      title: 'La matriz que trajeron',
      desc: "Designer + equipo de CS vinieron con una matriz de permisos por usuario — cada usuario × cada permiso, 12 columnas, sin modelo mental. CS managers: 'Solo necesito saber si esta persona es analyst o admin.'",
    },
    {
      tag: 'Paso 2 · Mi pivot',
      metric: '2 clics',
      title: 'Roles bloqueados, MVP',
      desc: "Piensan en roles, no en permisos. Shipeé roles fijos con permisos baked-in — bloqueados, sin edición. 80%+ de los casos cubiertos el día uno. 'Diseñá para el 80% primero.'",
    },
    {
      tag: 'Paso 3 · Fase 2',
      metric: 'tras validar',
      title: 'Matriz editable',
      desc: "Una vez que los CS managers reales lo usaban, el feedback fue concreto (un 'CS Lead' entre Analyst y Admin). Recién ahí sumé el editor de roles custom — como power feature, no el default.",
    },
  ],
};

export const techPoints: Record<Lang, string[]> = {
  en: [
    'Built the roles / permissions data model and authorization checks across the platform — questionnaires, evidence locker, reports, billing, user management.',
    'Role-gated UI in React + TypeScript, so components rendered or disabled by permission.',
  ],
  es: [
    'Construí el modelo de datos de roles / permisos y los checks de autorización en toda la plataforma — cuestionarios, evidence locker, reportes, billing, gestión de usuarios.',
    'UI gateada por rol en React + TypeScript, con componentes renderizados o deshabilitados según permiso.',
  ],
};
