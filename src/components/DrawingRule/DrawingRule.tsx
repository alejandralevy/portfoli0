import { useEffect, useRef } from 'react';
import styles from './DrawingRule.module.css';

interface DrawingRuleProps {
  variant?: 'scale' | 'gradient';
}

export function DrawingRule({ variant = 'scale' }: DrawingRuleProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      if (variant === 'scale') el.style.transform = 'scaleX(1)';
      else el.dataset.lit = 'true';
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (variant === 'scale') el.style.transform = 'scaleX(1)';
          else el.dataset.lit = 'true';
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant]);

  return <div ref={ref} className={variant === 'gradient' ? styles.gradient : styles.rule} />;
}
