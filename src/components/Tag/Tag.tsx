import styles from './Tag.module.css';

interface TagProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export function Tag({ children, dark, className }: TagProps) {
  return (
    <span className={[styles.tag, dark && styles.dark, className].filter(Boolean).join(' ')}>
      {children}
    </span>
  );
}
