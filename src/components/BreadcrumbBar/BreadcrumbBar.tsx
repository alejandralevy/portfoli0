import { Link } from 'react-router-dom';
import type { Lang } from '../../types';
import styles from './BreadcrumbBar.module.css';

interface BreadcrumbBarProps {
  projectName: string;
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}

export function BreadcrumbBar({ projectName, lang, onLangChange }: BreadcrumbBarProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.breadcrumb}>
        <Link to="/" className={styles.home}>Alejandra Levy</Link>
        <span className={styles.sep}>/</span>
        <span className={styles.current}>{projectName}</span>
      </div>
      <div className={styles.langToggle}>
        <button
          className={styles.langBtn}
          data-active={lang === 'en'}
          onClick={() => onLangChange('en')}
        >
          EN
        </button>
        <span className={styles.sep}>/</span>
        <button
          className={styles.langBtn}
          data-active={lang === 'es'}
          onClick={() => onLangChange('es')}
        >
          ES
        </button>
      </div>
    </div>
  );
}
