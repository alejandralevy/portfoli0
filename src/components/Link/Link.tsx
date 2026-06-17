import styles from './Link.module.css';

type Variant = 'inline' | 'mono' | 'arrow';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: React.ReactNode;
}

export function Link({ variant = 'inline', className, children, ...rest }: LinkProps) {
  return (
    <a className={[styles.base, styles[variant], className].filter(Boolean).join(' ')} {...rest}>
      {children}
      {variant === 'arrow' && <span className={styles.arrow}>→</span>}
    </a>
  );
}
