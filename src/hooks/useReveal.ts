import { useEffect, useRef } from 'react';

export function useReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      el.dataset.visible = 'true';
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = 'true';
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px', ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
