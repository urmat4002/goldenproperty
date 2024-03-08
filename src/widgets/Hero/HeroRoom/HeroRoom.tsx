import { FC } from "react";
import { useParams } from "react-router-dom";
import { Section, SliderObject } from "@/features";
import { useGetEstateById } from "@/shared/api/hooks";
import { Brief } from "./components/Brief";
import { Bullets } from "./components/Bullets";
import { PriceRow } from "./components/PriceRow";
import styles from "./HeroRoom.module.scss";

export const HeroRoom: FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const { id } = useParams();
  const { estate, isLoading } = useGetEstateById(id);
  const pdfUrl = estate?.project.pdf_catalog;

  return (
    <Section title={isLoading ? "" : estate?.project.name} container>
      <div className={styles.wrapper}>
        <SliderObject isMobile={isMobile} />
        <Brief styles={styles} description={estate?.description} />
        <Bullets styles={styles} id={id} />
        <PriceRow
          styles={styles}
          id={id}
          pdfUrl={pdfUrl}
          price={estate?.price_usd}
        />
      </div>
    </Section>
  );
};
