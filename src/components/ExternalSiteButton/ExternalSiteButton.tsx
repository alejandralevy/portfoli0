import styles from './ExternalSiteButton.module.css';

interface ExternalSiteButtonProps {
  href: string;
  icon: string;
  iconGradient: string;
  name: string;
  urlDisplay: string;
  accentColor?: string;
  accentHover?: string;
}

export function ExternalSiteButton({
  href,
  icon,
  iconGradient,
  name,
  urlDisplay,
  accentColor = 'rgba(92,69,224,.45)',
  accentHover = '#7C65F5',
}: ExternalSiteButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btn}
      style={{
        '--ext-accent': accentColor,
        '--ext-hover': accentHover,
      } as React.CSSProperties}
    >
      <span className={styles.left}>
        <span className={styles.icon} style={{ background: iconGradient }}>{icon}</span>
        <span className={styles.name}>{name}</span>
      </span>
      <span className={styles.divider} />
      <span className={styles.url}>{urlDisplay} ↗</span>
    </a>
  );
}
