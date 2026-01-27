import React, { useState, useEffect, useRef, useMemo } from 'react';
import clsx from 'clsx';

interface PerplexityStreamProps {
  content: string;
  speed?: number; // ms per char
  onComplete?: () => void;
  className?: string;
}

interface TextSegment {
  text: string;
  isBold: boolean;
}

export const PerplexityStreamText = ({ 
  content, 
  speed = 10, 
  onComplete,
  className 
}: PerplexityStreamProps) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const requestRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const onCompleteCalled = useRef(false);

  // 1. Parse content into segments (Bold vs Normal) once
  // This ensures we stream the *rendered* characters, not the markdown syntax
  const segments = useMemo(() => {
    if (!content) return [];
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map(part => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return { text: part.slice(2, -2), isBold: true };
      }
      return { text: part, isBold: false };
    }).filter(s => s.text.length > 0);
  }, [content]);

  // 2. Calculate total visible characters
  const totalLength = useMemo(() => segments.reduce((acc, s) => acc + s.text.length, 0), [segments]);

  useEffect(() => {
    // Reset
    setVisibleCount(0);
    startTimeRef.current = undefined;
    onCompleteCalled.current = false;

    const animate = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      
      const elapsed = time - startTimeRef.current;
      const targetCount = Math.floor(elapsed / speed);
      
      if (targetCount >= totalLength) {
        setVisibleCount(totalLength);
        if (onComplete && !onCompleteCalled.current) {
          onCompleteCalled.current = true;
          onComplete();
        }
        return; 
      }
      
      setVisibleCount(targetCount);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [totalLength, speed, onComplete]);

  // 3. Render logic
  // We determine how much of each segment to show based on `visibleCount`
  const renderContent = () => {
    let currentCount = 0;
    const elements: React.ReactNode[] = [];

    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      const segmentStart = currentCount;
      const segmentEnd = currentCount + segment.text.length;

      // If we haven't reached this segment yet, stop
      if (visibleCount <= segmentStart) break;

      // Calculate how much of this segment is visible
      const charCountInSegment = Math.min(visibleCount, segmentEnd) - segmentStart;
      const textSlice = segment.text.slice(0, charCountInSegment);

      elements.push(
        <span 
          key={i} 
          className={clsx(
            segment.isBold ? "font-semibold text-slate-900" : "font-normal text-slate-600"
          )}
        >
          {textSlice}
        </span>
      );

      currentCount += segment.text.length;
      
      // If we are partly through this segment, we are done
      if (visibleCount < segmentEnd) break;
    }
    
    return elements;
  };

  return (
    <div className={clsx("inline text-[15px] leading-[1.6]", className)}>
      {renderContent()}
    </div>
  );
};
