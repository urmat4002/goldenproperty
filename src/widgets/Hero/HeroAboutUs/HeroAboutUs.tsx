import { FC } from "react";
import { Section } from "@/features";
import styles from "./HeroAboutUs.module.scss";
import HeroSubsection from "./AboutUsSubsection/AboutUsSubsection";

const tempData = [
  {
    imageUrl: "https://i.ibb.co/NK2M6HL/Rectangle-47-2.png",
    title: "Heading",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,  cumque. Magnam dolor tenetur quidem earum laborum cupiditate nam praesentium optio explicabo ex delectus, asperiores id.",
  },
  {
    imageUrl: "https://i.ibb.co/NK2M6HL/Rectangle-47-2.png",
    title: "Heading",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,  cumque. Magnam dolor tenetur quidem earum laborum cupiditate nam praesentium optio explicabo ex delectus, asperiores id.",
  },
  {
    imageUrl: "https://i.ibb.co/NK2M6HL/Rectangle-47-2.png",
    title: "Heading",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,  cumque. Magnam dolor tenetur quidem earum laborum cupiditate nam praesentium optio explicabo ex delectus, asperiores id.",
  },
];

export const HeroAboutUs: FC = () => {
  return (
    <Section title="Mission and History" container>
      <div className={styles.HeroAboutUsWrapper}>
        {tempData.map((item) => (
          <HeroSubsection
            key={item.title}
            imageUrl={item.imageUrl}
            title={item.title}
            content={item.content}
            styles={styles}
          />
        ))}
      </div>
    </Section>
  );
};
