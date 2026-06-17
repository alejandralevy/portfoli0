import styles from './BrowserMockup.module.css';

interface BrowserMockupProps {
  label: string;
  urlBar?: string;
  children: React.ReactNode;
  className?: string;
}

export function BrowserMockup({ label, urlBar, children, className }: BrowserMockupProps) {
  return (
    <div className={[styles.mockup, className].filter(Boolean).join(' ')}>
      <div className={styles.chrome}>
        <span className={styles.dot} data-accent />
        <span className={styles.dot} />
        <span className={styles.dot} />
        {urlBar ? (
          <span className={styles.urlBar}>{urlBar}</span>
        ) : (
          <span className={styles.label}>{label}</span>
        )}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
