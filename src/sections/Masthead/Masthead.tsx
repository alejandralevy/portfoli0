import styles from './Masthead.module.css';

export function Masthead() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.name}>Alejandra Levy</h1>
      <p className={styles.subtitle}>
        Senior Software Engineer &amp; Technical Product Manager
      </p>
    </div>
  );
}
