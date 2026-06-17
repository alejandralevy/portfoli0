import { DrawingRule } from '../../components/DrawingRule';
import type { Lang } from '../../types';
import { copy } from '../../content';
import styles from './Footer.module.css';

interface FooterProps {
  lang: Lang;
}

export function Footer({ lang }: FooterProps) {
  const t = copy[lang];

  return (
    <footer>
      <DrawingRule />
      <div className={styles.inner}>
        <div className={styles.links}>
          <a className={styles.emailLink} href="mailto:alelevy15@gmail.com">
            alelevy15@gmail.com
          </a>
          <a className={styles.link} href="https://linkedin.com/in/alejandralevy" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className={styles.link} href="https://github.com/alejandralevy" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <span className={styles.avail}>
          <span className={styles.availDot} />
          {t.avail}
        </span>
      </div>
    </footer>
  );
}
