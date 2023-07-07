import { useState, useEffect } from "react";

export function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState<number>(window.outerWidth);
  const [showHamburguer, setShowHamburguer] = useState<boolean>();
  const tablet = 768;
  const mobile = 387;

  useEffect(() => {
    setWindowWidth(window.outerWidth);
    windowWidth <= mobile ? setShowHamburguer(true) : setShowHamburguer(false);

    window.addEventListener("resize", () => setWindowWidth(window.outerWidth));
  }, [windowWidth]);

  return [{ windowWidth, showHamburguer, tablet, mobile }];
}
