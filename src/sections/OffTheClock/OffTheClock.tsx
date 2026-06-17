import { DrawingRule } from '../../components/DrawingRule';
import { SectionHeader } from '../../components/SectionHeader';
import type { Lang } from '../../types';
import { copy } from '../../content';
import styles from './OffTheClock.module.css';

interface OffTheClockProps {
  lang: Lang;
}

export function OffTheClock({ lang }: OffTheClockProps) {
  const t = copy[lang];

  return (
    <section>
      <DrawingRule />
      <div className={styles.inner}>
        <div className={styles.top}>
          <SectionHeader index="04" eyebrow={t.offEyebrow} title={t.offHead} />
          <p className={styles.copy}>{t.offCopy}</p>
        </div>
        <div className={styles.photoStrip}>
          {[300, 240, 290, 255].map((h, i) => (
            <div
              key={i}
              className={styles.photo}
              style={{ height: `clamp(${h * 0.7}px, ${h / 12}vw, ${h}px)` }}
            >
              <span className={styles.photoLabel}>{t.photo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
