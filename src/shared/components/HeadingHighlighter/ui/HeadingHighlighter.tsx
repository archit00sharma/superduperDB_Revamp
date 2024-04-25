/* eslint-disable prettier/prettier */
import React, { ReactElement, useEffect, useRef, useState } from 'react';

interface HighlightOnScrollProps {
  children: ReactElement;
}

const HeadingHighlighter = ({ children }: HighlightOnScrollProps) => {
  const targetRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const target = targetRef.current;

      if (target) {
        const targetRect = target.getBoundingClientRect();

        const isTopVisible = targetRect.top >= 0;
        const isBottomVisible = targetRect.bottom <= window.innerHeight;

        if (isTopVisible && isBottomVisible) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return React.cloneElement(children, {
    ref: targetRef,
    className: `${children.props.className || ''} ${isVisible ? 'underlined' : ''}`,
  });
};

export default HeadingHighlighter;
