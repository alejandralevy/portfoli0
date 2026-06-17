import type { Project } from '../../types';
import styles from './ProjectRow.module.css';

interface ProjectRowProps {
  project: Project;
}

export function ProjectRow({ project }: ProjectRowProps) {
  const { n, name, role, year, desc, color } = project;

  return (
    <div
      className={styles.row}
      style={{ '--brand': color } as React.CSSProperties}
    >
      <span className={styles.number}>{n}</span>
      <div className={styles.info}>
        <div className={styles.nameRow}>
          <span className={styles.dot} />
          <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.desc}>{desc}</div>
      </div>
      <div className={styles.meta}>
        <span className={styles.role}>{role}</span>
        <span className={styles.year}>{year} →</span>
      </div>
    </div>
  );
}
