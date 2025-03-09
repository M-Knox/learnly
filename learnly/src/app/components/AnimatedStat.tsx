'use client';

import { useInView } from 'react-intersection-observer';
import { useCountUp } from '../hooks/useCountUp';

interface AnimatedStatProps {
  value: number;
  label: string;
  duration?: number;
}

export function AnimatedStat({ value, label, duration = 2000 }: AnimatedStatProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    fallbackInView: true // Ensures animation works even if intersection observer fails
  });

  const count = useCountUp(inView ? value : 0, duration);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-[#22d3ee] mb-2">{count}+</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
} 