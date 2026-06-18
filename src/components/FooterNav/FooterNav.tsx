import { Link } from 'react-router-dom';
import type { Lang } from '../../types';
import styles from './FooterNav.module.css';

interface FooterNavProps {
  lang: Lang;
  backLabel: string;
  backHref: string;
  nextLabel: string;
  nextHref: string;
  nextColor: string;
  eyebrow: string;
}

export function FooterNav({ lang: _lang, backLabel, backHref, nextLabel, nextHref, nextColor, eyebrow }: FooterNavProps) {
  return (
    <nav className={styles.wrapper}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <div className={styles.grid}>
        <Link to={backHref} className={styles.card} data-dir="back">
          <span className={styles.sub}>← {backLabel}</span>
        </Link>
        <Link
          to={nextHref}
          className={styles.card}
          data-dir="next"
          style={{ '--next-color': nextColor } as React.CSSProperties}
        >
          <span className={styles.sub} data-dir="next">{nextLabel} →</span>
        </Link>
      </div>
    </nav>
  );
}
