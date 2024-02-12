import { FC } from "react";
import { Section } from "@/features";
import styles from "./HeroAboutUs.module.scss";
import HeroSubsection from "./AboutUsSubsection/AboutUsSubsection";

const tempData = [
  {
    imageUrl: "https://i.ibb.co/NK2M6HL/Rectangle-47-2.png",
    title: "Mission",
    content:
      "The mission of our real estate agency is to provide high-quality services aimed at meeting the needs of our clients in the field of buying, selling and renting real estate. We strive to create a reliable partnership based on professionalism, trust and attention to the individual needs of each client, in order to ensure successful and mutually beneficial transactions.",
  },
  {
    imageUrl: "https://i.ibb.co/NK2M6HL/Rectangle-47-2.png",
    title: "History",
    content:
      "Over the past few years, we have been successfully providing high-quality services in the real estate market. Our experience and expertise allow us to effectively navigate the dynamic real estate environment, providing our clients with reliable solutions and a professional approach. Our constant dedication to quality and customer satisfaction makes us a trusted partner in your housing solutions.",
  },
  {
    imageUrl: "https://i.ibb.co/NK2M6HL/Rectangle-47-2.png",
    title: "Company",
    content:
      "Our real estate company is an innovative agency specializing in the purchase, sale and rental of real estate. We pride ourselves on our high level of professionalism and dedication to customer satisfaction. Our approach is based on thorough market analysis, an individual approach to each client and the use of advanced technologies to ensure efficient and comfortable transactions. Our goal is to help you achieve your housing dreams by providing superior service every step of the way.",
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
