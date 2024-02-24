import { useState, useEffect } from "react";

type Props = {
  defaultThreshold: 576 | 768 | 992;
};
export const useInnerWidthExceedsDefault = ({
  defaultThreshold = 768,
}: Props): boolean => {
  const [exceedsDefault, setExceedsDefault] = useState<boolean>(
    window.innerWidth > defaultThreshold
  ); // ?

  useEffect(() => {
    const handleResize = () => {
      setExceedsDefault(window.innerWidth > defaultThreshold);
    };
    window.addEventListener("resize", handleResize);

    setExceedsDefault(window.innerWidth > defaultThreshold);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [defaultThreshold]);

  return exceedsDefault;
};
