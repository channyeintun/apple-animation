'use client';

import { useFadeInAnimation } from '../hooks/useFadeInAnimation';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeInSection({ children, className = '', delay = 0 }: FadeInSectionProps) {
  const { ref, isVisible } = useFadeInAnimation();

  return (
    <div
      ref={ref}
      className={`StaggeredFadeInTween_container ${isVisible ? 'active' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
