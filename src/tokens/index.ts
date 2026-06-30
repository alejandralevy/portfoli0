export const colors = {
  bg: '#F6F4EF',
  ink: '#1C1B19',
  inkDeep: '#2A2925',
  muted: '#5C594F',
  subtle: '#6B6862',
  subtleAlt: '#7A766C',
  faint: '#9A958B',
  fainter: '#B6B1A6',
  accent: '#C77B4A',
  accentBorder: 'rgba(199,123,74,.32)',
  divider: 'rgba(28,27,25,.12)',
  dividerFaint: 'rgba(28,27,25,.09)',
  selection: { bg: '#1C1B19', text: '#F6F4EF' },
  available: '#5B8C5A',

  projects: {
    securityScorecard: '#5C45E0',
    weCare: '#2F6BFF',
    decentraland: '#FF2D55',
    tardeoArgentino: '#FF2E9D',
  },
} as const;

export const fonts = {
  serif: "'Newsreader', serif",
  sans: "'Hanken Grotesk', sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const easing = {
  smooth: 'cubic-bezier(.22,1,.36,1)',
  brand: 'cubic-bezier(.4,0,.2,1)',
  standard: 'ease',
} as const;
