import { useState, useEffect } from 'react';

export const useMediaQuery = (maxWidth: number): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This function checks the window width and updates the state
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= maxWidth);
    };

    // Check on initial render
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [maxWidth]); // Re-run effect if maxWidth changes

  return isMobile;
};