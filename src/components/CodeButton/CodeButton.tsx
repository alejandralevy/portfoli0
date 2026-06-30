import styles from './CodeButton.module.css';

const GitHubIcon = () => (
  <svg className={styles.icon} width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className={styles.icon} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

interface CodeButtonProps {
  href: string;
  label: string;
  variant?: 'outlined' | 'primary';
  accentColor?: string;
  accentHover?: string;
  textColor?: string;
}

export function CodeButton({
  href,
  label,
  variant = 'outlined',
  accentColor = 'rgba(92,69,224,.45)',
  accentHover = '#7C65F5',
  textColor,
}: CodeButtonProps) {
  const defaultTextColor = variant === 'primary' ? '#ffffff' : '#E4E0DA';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.btn} ${variant === 'primary' ? styles.primary : styles.outlined}`}
      style={{
        '--ext-accent': accentColor,
        '--ext-hover': accentHover,
        '--ext-text': textColor ?? defaultTextColor,
      } as React.CSSProperties}
    >
      {variant === 'primary' ? <GlobeIcon /> : <GitHubIcon />}
      {label} ↗
    </a>
  );
}
