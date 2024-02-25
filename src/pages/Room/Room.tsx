import { SlideCard } from "@/features";
import { SliderObject } from "@/features/Slider/SliderObject";
import { FormRoom } from "@/widgets";
import { Description } from "@/widgets/Description";
import { Features } from "@/widgets/Features";

export const Room = () => {
  return (
    <>
      <SliderObject />
      <Description />
      <Features />
      <SlideCard />
      <FormRoom />
    </>
  );
};
