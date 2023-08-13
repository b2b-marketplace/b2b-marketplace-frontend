import { useState, useEffect, useCallback } from 'react';


export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResizeWithDelay = useCallback(() => {
    let resizeTimeoutId = null;
    clearTimeout(resizeTimeoutId);

    resizeTimeoutId = setTimeout(() => {
      setWidth(window.innerWidth);
    }, 500);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResizeWithDelay);
    return () => {
      window.removeEventListener('resize', handleResizeWithDelay);
    };
  }, [handleResizeWithDelay]);

  return {
    width
  };
};
