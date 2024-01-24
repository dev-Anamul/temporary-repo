import { useCallback, useEffect, useState } from "react";

function useWindowWidth(screenSize) {
  const [onSmallScreen, setOnSmallScreen] = useState(false);
  const [width, setWidth] = useState(0);

  const checkScreenSize = useCallback(() => {
    setOnSmallScreen(window.innerWidth < screenSize);
    setWidth(window.innerWidth);
  }, [screenSize]);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [checkScreenSize]);

  return screenSize ? onSmallScreen : width;
}

export default useWindowWidth;
