import { Feather } from "lucide-react";
import style from "./Features.module.scss";
import { Section } from "@/features";

export const Features = () => {
  const ftrsObject = [
    {
      img: <Feather />,
      title: "Treadmills",
    },
    {
      img: <Feather />,
      title: "Balcony",
    },
    {
      img: <Feather />,
      title: "Green spaces",
    },
    {
      img: <Feather />,
      title: "Children playground",
    },
    {
      img: <Feather />,
      title: "Tennis court",
    },
    {
      img: <Feather />,
      title: "Fitness center and gym",
    },
    {
      img: <Feather />,
      title: "Parking space",
    },
    {
      img: <Feather />,
      title: "Boutiques and shops",
    },
    {
      img: <Feather />,
      title: "Pool",
    },
    {
      img: <Feather />,
      title: "BBQ area",
    },
    {
      img: <Feather />,
      title: "Security ",
    },
    {
      img: <Feather />,
      title: "Sports grounds",
    },
  ];
  return (
    <Section title="Features & amenities">
      <div className={style.features}>
        <div className={style.featuresContainer}>
          {ftrsObject.map((features) => (
            <div className={style.featuresItem} key={features.title}>
              {features.img}
              <p>{features.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
