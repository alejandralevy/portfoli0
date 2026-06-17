import type { Lang } from '../../types';
import styles from './Header.module.css';

interface HeaderProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}

export function Header({ lang, onLangChange }: HeaderProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.links}>
        <a className={styles.emailLink} href="mailto:alelevy15@gmail.com">
          alelevy15@gmail.com
        </a>
        <span className={styles.sep}>/</span>
        <a className={styles.link} href="https://linkedin.com/in/alejandralevy" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span className={styles.sep}>/</span>
        <a className={styles.link} href="https://github.com/alejandralevy" target="_blank" rel="noreferrer">
          GitHub
        </a>
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
