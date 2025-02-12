import { useCallback, useState, useEffect } from "react";

export default function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(()=>{
    setScrolled(window.pageYOffset > threshold);
  }, [threshold]);

  useEffect(()=>{
    window.addEventListener("scroll", onScroll)
  }, [onScroll])


  return scrolled;
}
