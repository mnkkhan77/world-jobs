import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const scrollPositions = new Map<string, number>();

export function useScrollMemory() {
  const location = useLocation();

  useEffect(() => {
    // Restore scroll position when component mounts
    const savedPosition = scrollPositions.get(location.key || location.pathname) || 0;
    window.scrollTo(0, savedPosition);

    // Save scroll position when component unmounts
    return () => {
      scrollPositions.set(location.key || location.pathname, window.scrollY);
    };
  }, [location]);

  // Save scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.set(location.key || location.pathname, window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);
}