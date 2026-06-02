import { useState, useEffect } from 'react';

const BREAKPOINTS = { sm: 640, md: 768, lg: 1024 };

function getBreakpoint(width) {
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  return 'base';
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(() =>
    getBreakpoint(window.innerWidth)
  );

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setBreakpoint(getBreakpoint(entry.contentRect.width));
    });
    observer.observe(document.documentElement);
    return () => observer.disconnect();
  }, []);

  return breakpoint;
}