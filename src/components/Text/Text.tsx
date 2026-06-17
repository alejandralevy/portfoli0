import styles from './Text.module.css';

type Variant =
  | 'display'       // Newsreader 300, large headings
  | 'display-italic'// Newsreader 300 italic, accent colour
  | 'heading'       // Newsreader 300, section titles
  | 'body'          // Hanken Grotesk 400
  | 'body-strong'   // Hanken Grotesk 600
  | 'label'         // JetBrains Mono uppercase tracking
  | 'caption'       // JetBrains Mono small
  | 'mono';         // JetBrains Mono regular

type Tag = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div' | 'em';

interface TextProps {
  variant?: Variant;
  as?: Tag;
  className?: string;
  children: React.ReactNode;
}

const defaultTag: Record<Variant, Tag> = {
  display: 'h1',
  'display-italic': 'em',
  heading: 'h2',
  body: 'p',
  'body-strong': 'p',
  label: 'span',
  caption: 'span',
  mono: 'span',
};

export function Text({ variant = 'body', as, className, children }: TextProps) {
  const Tag = as ?? defaultTag[variant];
  return (
    <Tag className={[styles[variant], className].filter(Boolean).join(' ')}>
      {children}
    </Tag>
  );
}
