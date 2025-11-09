'use client';

import { useFadeInAnimation } from '../hooks/useFadeInAnimation';

interface StaggeredItemsProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number; // Base delay in milliseconds (default: 100ms)
  startDelay?: number;   // Initial delay before first item (default: 0ms)
}

export function StaggeredItems({
  children,
  className = '',
  staggerDelay = 100,
  startDelay = 0
}: StaggeredItemsProps) {
  const { ref, isVisible } = useFadeInAnimation();

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`StaggeredFadeInTween_item ${isVisible ? 'active' : ''}`}
          style={{
            '--stagger-delay': `${startDelay + (index * staggerDelay)}ms`
          } as React.CSSProperties}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
