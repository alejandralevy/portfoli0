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
          {[
            { h: 300, src: '/img/IMG_1826.JPG' },
            { h: 240, src: '/img/IMG_1833.JPG' },
            { h: 290, src: '/img/IMG_1838.JPG' },
            { h: 255, src: '/img/IMG_4355.jpg' },
          ].map(({ h, src }, i) => (
            <div
              key={i}
              className={styles.photo}
              style={{ height: `clamp(${h * 0.7}px, ${h / 12}vw, ${h}px)` }}
            >
              <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
