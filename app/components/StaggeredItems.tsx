'use client';

import { useFadeInAnimation } from '../hooks/useFadeInAnimation';

interface StaggeredItemsProps {
  children: React.ReactNode[];
  className?: string;
}

export function StaggeredItems({ children, className = '' }: StaggeredItemsProps) {
  const { ref, isVisible } = useFadeInAnimation();

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`StaggeredFadeInTween_item ${isVisible ? 'active' : ''}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
