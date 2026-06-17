import { DrawingRule } from '../../components/DrawingRule';
import { SectionHeader } from '../../components/SectionHeader';
import { DisciplineCard } from '../../components/DisciplineCard';
import type { Lang } from '../../types';
import { copy, disciplines } from '../../content';
import styles from './WhatIDo.module.css';

interface WhatIDoProps {
  lang: Lang;
}

export function WhatIDo({ lang }: WhatIDoProps) {
  const t = copy[lang];

  return (
    <section>
      <DrawingRule />
      <div className={styles.inner}>
        <SectionHeader index="02" eyebrow={t.doLabel} title={t.doHead} />
        <div className={styles.grid}>
          {disciplines[lang].map((discipline) => (
            <DisciplineCard key={discipline.title} discipline={discipline} />
          ))}
        </div>
        <div className={styles.soft}>
          <span className={styles.softLabel}>{t.softLabel}</span>
          <span className={styles.softText}>{t.soft}</span>
        </div>
      </div>
    </section>
  );
}
