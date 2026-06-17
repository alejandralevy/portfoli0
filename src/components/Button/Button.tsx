import styles from './Button.module.css';

type Variant = 'primary' | 'accent' | 'ghost' | 'text';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  return (
    <button className={[styles.base, styles[variant], className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </button>
  );
}
