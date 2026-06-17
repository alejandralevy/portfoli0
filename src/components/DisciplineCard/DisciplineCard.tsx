import type { Discipline } from '../../types';
import { Tag } from '../Tag';
import styles from './DisciplineCard.module.css';

interface DisciplineCardProps {
  discipline: Discipline;
}

export function DisciplineCard({ discipline }: DisciplineCardProps) {
  const { title, desc, tools } = discipline;

  return (
    <div className={styles.card}>
      <div className={styles.titleRow}>
        <span className={styles.dot} />
        <span className={styles.title}>{title}</span>
      </div>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.tools}>
        {tools.map((tool) => (
          <Tag key={tool}>{tool}</Tag>
        ))}
      </div>
    </div>
  );
}
