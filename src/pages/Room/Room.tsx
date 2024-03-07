import { useMediaQuery } from "react-responsive";
import { SlideCard } from "@/features";
import { FormRoom, HeroRoom } from "@/widgets";
import { Description } from "@/widgets/Description";
import { Features } from "@/widgets/Features";

export const Room = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      <HeroRoom isMobile={isMobile} />
      <Description />
      <Features />
      {!isMobile && <SlideCard />}
      <FormRoom />
    </>
  );
};
