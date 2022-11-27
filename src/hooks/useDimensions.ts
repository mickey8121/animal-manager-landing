import { useState, useEffect, useCallback } from 'react';

const useDimensions = (): any => {
  const getDimensions = (): any => {
    if (typeof window !== 'undefined') {
      return { width: window.innerWidth, height: window.innerHeight };
    }

    return {
      width: 1200,
      height: 800,
    };
  };

  const [dimensions, setDimensions] = useState(getDimensions);

  const handleResize = useCallback(() => {
    setDimensions(getDimensions());
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [handleResize]);

  return dimensions;
};

export default useDimensions;
