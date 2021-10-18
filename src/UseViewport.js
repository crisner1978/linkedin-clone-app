import { useState, useEffect } from "react";

const UseViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width };
};

export default UseViewport;

// use to set breakpoint for hook
// const { width } = useViewport();
// const breakpoint = 768;
