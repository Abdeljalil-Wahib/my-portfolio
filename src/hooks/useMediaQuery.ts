import { useState, useEffect } from "react";

/**
 * Custom hook to check if viewport matches a specific max-width breakpoint
 * @param maxWidth - Maximum width in pixels
 * @returns boolean - true if viewport width is less than or equal to maxWidth
 */
export const useMediaQuery = (maxWidth: number): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window === "undefined") return;

    const checkScreenSize = () => {
      setMatches(window.innerWidth <= maxWidth);
    };

    // Initial check
    checkScreenSize();

    // Add event listener with debounce for better performance
    let timeoutId: NodeJS.Timeout;
    const debouncedCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkScreenSize, 150);
    };

    window.addEventListener("resize", debouncedCheck);

    return () => {
      window.removeEventListener("resize", debouncedCheck);
      clearTimeout(timeoutId);
    };
  }, [maxWidth]);

  return matches;
};
