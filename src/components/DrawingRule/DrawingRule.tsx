import { useEffect, useRef } from 'react';
import styles from './DrawingRule.module.css';

export function DrawingRule() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      el.style.transform = 'scaleX(1)';
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = 'scaleX(1)';
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={styles.rule} />;
}
