import { useMediaQuery } from "react-responsive";
import { SlideCard } from "@/features";
import { SliderObject } from "@/features/Slider/SliderObject";
import { FormRoom } from "@/widgets";
import { Description } from "@/widgets/Description";
import { Features } from "@/widgets/Features";

export const Room = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      <SliderObject />
      <Description />
      <Features />
      {!isMobile && <SlideCard />}
      <FormRoom />
    </>
  );
};
