import { useState, useEffect } from "react";

export function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [showHamburguer, setShowHamburguer] = useState<boolean>();
  const tablet = 768;
  const mobile = 387;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    windowWidth <= mobile ? setShowHamburguer(true) : setShowHamburguer(false);
    window.addEventListener("resize", () => setWindowWidth(window.outerWidth));
  }, [windowWidth]);

  return [{ windowWidth, showHamburguer, tablet, mobile }];
}
