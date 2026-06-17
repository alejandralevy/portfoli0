import { useReveal } from '../../hooks/useReveal';
import styles from './Reveal.module.css';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Reveal({ children, delay = 0, className, as: Tag = 'div' }: RevealProps) {
  const ref = useReveal();

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={[styles.reveal, className].filter(Boolean).join(' ')}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
