import { DrawingRule } from '../../components/DrawingRule';
import { SectionHeader } from '../../components/SectionHeader';
import { AITerminal } from '../../components/AITerminal';
import type { Lang } from '../../types';
import { copy } from '../../content';
import styles from './AISection.module.css';

interface AISectionProps {
  lang: Lang;
}

export function AISection({ lang }: AISectionProps) {
  const t = copy[lang];

  return (
    <section>
      <DrawingRule />
      <div className={styles.inner}>
        <div className={styles.left}>
          <SectionHeader index="03" eyebrow={t.aiEyebrow} title={t.aiHead} />
          <p className={styles.copy}>{t.aiCopy}</p>
          <ol className={styles.list}>
            {([
              [t.ai1, t.ai1d],
              [t.ai2, t.ai2d],
              [t.ai3, t.ai3d],
            ] as [string, string][]).map(([title, desc], i) => (
              <li key={i} className={styles.item}>
                <span className={styles.itemNum}>0{i + 1}</span>
                <div>
                  <div className={styles.itemTitle}>{title}</div>
                  <div className={styles.itemDesc}>{desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.right}>
          <AITerminal />
        </div>
      </div>
    </section>
  );
}
