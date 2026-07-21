import type { Lang, Project, Discipline } from '../types';

interface Copy {
  l1: string;
  roles: string[];
  l3: string;
  bio1: string;
  bio2: string;
  bio3: string;
  doLabel: string;
  doHead: string;
  softLabel: string;
  soft: string;
  work: string;
  workHead: string;
  aiEyebrow: string;
  aiHead: string;
  aiCopy: string;
  ai1: string; ai1d: string;
  ai2: string; ai2d: string;
  ai3: string; ai3d: string;
  offEyebrow: string;
  offHead: string;
  offCopy: string;
  avail: string;
  photo: string;
}

export const copy: Record<Lang, Copy> = {
  en: {
    l1: "I'm a",
    roles: ['Senior Engineer', 'Technical Product Manager', 'Designer', 'Problem-solver'],
    l3: 'who ships product end-to-end.',
    bio1: "I'm Alejandra — a senior software engineer and technical product manager based in Barcelona. Over the last 7+ years I've shipped products across cybersecurity, web3, and consumer apps, usually wearing both the engineering and product hats at once.",
    bio2: "I like turning a vague idea into a roadmap, designing the flows, writing the React, and getting it live. The part most teams split across several people, I can hold end-to-end — fewer handoffs, faster shipping.",
    bio3: 'Previously at SecurityScorecard and Decentraland. Now freelancing, and open to both short and long-term work.',
    doLabel: 'What I do',
    doHead: 'From 0 to prod',
    softLabel: 'Also',
    soft: 'Problem-Solving · Mentoring · Team Building · Decision-Making · Communication',
    work: 'What I did',
    workHead: 'Projects shipped',
    aiEyebrow: 'How I work',
    aiHead: 'AI-native by default',
    aiCopy: "AI is part of my daily toolkit, not a gimmick. It's how I get from an idea to a working build before the kickoff call is even over.",
    ai1: 'Prototype in hours', ai1d: 'From a prompt to a clickable build, fast.',
    ai2: 'Code faster, review harder', ai2d: 'AI drafts, I architect, test, and ship production-grade.',
    ai3: 'Sharper specs', ai3d: 'Scattered notes become clear PRDs and decisions.',
    offEyebrow: 'What I am',
    offHead: 'Behind a camera, or on a plane',
    offCopy: "When I'm not shipping, I'm usually shooting or travelling. Photography keeps my eye sharp — and gives me a reason to log off.",
    avail: 'Open to freelance — short & long term',
    photo: 'Photo — drop image',
  },
  es: {
    l1: 'Soy una',
    roles: ['ingeniera senior', 'technical product manager', 'diseñadora', 'pensadora de producto'],
    l3: 'que lanza producto de punta a punta.',
    bio1: 'Soy Alejandra — senior software engineer y technical product manager en Barcelona. En los últimos 7+ años lancé productos en ciberseguridad, web3 y apps de consumo, casi siempre con el sombrero de ingeniería y de producto a la vez.',
    bio2: 'Me gusta convertir una idea difusa en un roadmap, diseñar los flujos, escribir el React y dejarlo en producción. Lo que la mayoría de los equipos reparte entre varias personas, lo sostengo de punta a punta — menos handoffs, más velocidad.',
    bio3: 'Antes en SecurityScorecard y Decentraland. Ahora freelance, disponible para proyectos a corto y largo plazo.',
    doLabel: 'Lo que hago',
    doHead: 'De 0 a producción',
    softLabel: 'Además',
    soft: 'Resolución de problemas · Mentoring · Team Building · Toma de decisiones · Comunicación',
    work: 'Lo que hice',
    workHead: 'Proyectos lanzados',
    aiEyebrow: 'Cómo trabajo',
    aiHead: 'AI-native por defecto',
    aiCopy: 'La IA es parte de mi caja de herramientas diaria, no un truco. Es cómo paso de una idea a una versión funcionando antes de que termine la kickoff.',
    ai1: 'Prototipo en horas', ai1d: 'De un prompt a una build clickeable, rápido.',
    ai2: 'Más código, mejor revisión', ai2d: 'La IA borronea, yo arquitecto, testeo y lanzo a producción.',
    ai3: 'Specs más claras', ai3d: 'Notas sueltas se vuelven PRDs y decisiones claras.',
    offEyebrow: 'Quién soy',
    offHead: 'Detrás de una cámara, o en un avión',
    offCopy: 'Cuando no estoy lanzando, suelo estar sacando fotos o viajando. La fotografía me mantiene el ojo afilado — y me da una razón para desconectar.',
    avail: 'Disponible para freelance — corto y largo plazo',
    photo: 'Foto — soltá imagen',
  },
};

export const projects: Record<Lang, Project[]> = {
  en: [
    { n: '01', name: 'Decentraland',      role: 'Senior Software Engineer',                    year: '2025', desc: 'Top Scenes platform',                color: '#FF2D55', href: '/decentraland' },
    { n: '02', name: 'SecurityScorecard', role: 'Senior Engineer · Technical Product Manager', year: '2023', desc: 'RBAC permissions + Smart Answer AI', color: '#5C45E0', href: '/security-scorecard' },
    { n: '03', name: 'WeCare',            role: 'Product Strategy & Design · Consulting', year: '2026', desc: 'Orders management dashboard',       color: '#2F6BFF', href: '/we-care' },
    { n: '04', name: 'Tardeo Argentino',  role: 'Engineering · Design',                        year: '2025', desc: 'Event platform',                     color: '#FF2E9D', href: '/tardeo-argentino' },
  ],
  es: [
    { n: '01', name: 'Decentraland',      role: 'Senior Software Engineer',                    year: '2025', desc: 'Plataforma Top Scenes',                color: '#FF2D55', href: '/decentraland' },
    { n: '02', name: 'SecurityScorecard', role: 'Senior Engineer · Technical Product Manager', year: '2023', desc: 'Permisos RBAC + Smart Answer AI',      color: '#5C45E0', href: '/security-scorecard' },
    { n: '03', name: 'WeCare',            role: 'Product Strategy & Design · Consulting', year: '2026', desc: 'Dashboard de gestión de pedidos',      color: '#2F6BFF', href: '/we-care' },
    { n: '04', name: 'Tardeo Argentino',  role: 'Ingeniería · Diseño',                         year: '2025', desc: 'Plataforma de eventos',                color: '#FF2E9D', href: '/tardeo-argentino' },
  ],
};

export const disciplines: Record<Lang, Discipline[]> = {
  en: [
    {
      title: 'Engineering',
      desc: 'Senior React & full-stack. I write the production code and ship it — leaning on AI to move faster.',
      tools: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Redux', 'React Query', 'REST APIs', 'SQL', 'Supabase', 'Claude Code'],
    },
    {
      title: 'Product',
      desc: 'Discovery, roadmaps, and delivery. I turn business goals into product that ships.',
      tools: ['Agile', 'Scrum', 'Sprint Planning', 'Backlog', 'Epics', 'Roadmapping', 'Stakeholder Alignment'],
    },
    {
      title: 'Design',
      desc: 'UX flows and interfaces. I prototype in Figma and in the browser.',
      tools: ['Figma', 'Prototyping', 'Design Systems', 'User Flows'],
    },
  ],
  es: [
    {
      title: 'Ingeniería',
      desc: 'React senior & full-stack. Escribo el código de producción y lo lanzo — apoyándome en IA para ir más rápido.',
      tools: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Redux', 'React Query', 'REST APIs', 'SQL', 'Supabase', 'Claude Code'],
    },
    {
      title: 'Producto',
      desc: 'Discovery, roadmaps y entrega. Convierto objetivos de negocio en producto que se lanza.',
      tools: ['Agile', 'Scrum', 'Sprint Planning', 'Backlog', 'Épicas', 'Roadmapping', 'Alineación de Stakeholders'],
    },
    {
      title: 'Diseño',
      desc: 'Flujos UX e interfaces. Prototipo en Figma y en el navegador.',
      tools: ['Figma', 'Prototipado', 'Design Systems', 'User Flows'],
    },
  ],
};
