import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
}

export function SectionHeader({ index, eyebrow, title }: SectionHeaderProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.eyebrow}>
        <span className={styles.index}>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
