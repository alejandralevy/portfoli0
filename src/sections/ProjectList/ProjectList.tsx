import { DrawingRule } from '../../components/DrawingRule';
import { SectionHeader } from '../../components/SectionHeader';
import { ProjectRow } from '../../components/ProjectRow';
import type { Lang } from '../../types';
import { copy, projects } from '../../content';
import styles from './ProjectList.module.css';

interface ProjectListProps {
  lang: Lang;
}

export function ProjectList({ lang }: ProjectListProps) {
  const t = copy[lang];

  return (
    <section className={styles.section}>
      <DrawingRule />
      <div className={styles.inner}>
        <SectionHeader index="01" eyebrow={t.work} title={t.workHead} />
        <div>
          {projects[lang].map((project) => (
            <ProjectRow key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
