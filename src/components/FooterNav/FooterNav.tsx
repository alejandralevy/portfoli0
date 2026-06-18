import { Link } from 'react-router-dom';
import type { Lang } from '../../types';
import styles from './FooterNav.module.css';

interface FooterNavProps {
  lang: Lang;
  eyebrow: string;
  backSub: string;
  backLabel: string;
  backHref: string;
  nextSub: string;
  nextLabel: string;
  nextHref: string;
  nextColor: string;
}

export function FooterNav({ lang: _lang, eyebrow, backSub, backLabel, backHref, nextSub, nextLabel, nextHref, nextColor }: FooterNavProps) {
  return (
    <nav className={styles.wrapper}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <div className={styles.grid}>
        <Link to={backHref} className={styles.card} data-dir="back">
          <span className={styles.sub}>{backSub}</span>
          <span className={styles.title}>{backLabel}</span>
        </Link>
        <Link
          to={nextHref}
          className={styles.card}
          data-dir="next"
          style={{ '--next-color': nextColor } as React.CSSProperties}
        >
          <span className={styles.sub}>{nextSub}</span>
          <span className={styles.title}>{nextLabel}</span>
        </Link>
      </div>
    </nav>
  );
}
