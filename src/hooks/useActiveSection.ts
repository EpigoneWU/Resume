import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: `-${Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h') || '64')}px 0px -60% 0px`,
      threshold: 0.1,
    };

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(id);
        });
      }, options);
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [sectionIds]);

  return active;
}
