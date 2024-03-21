import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Section, SliderObject } from "@/features";
import { useGetEstateById } from "@/shared/api/hooks";
import { Brief } from "./components/Brief";
import { Bullets } from "./components/Bullets";
import { PriceRow } from "./components/PriceRow";
import styles from "./HeroRoom.module.scss";

export const HeroRoom: FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const { id } = useParams();
  const { estate, isLoading, error } = useGetEstateById(id);
  const navigate = useNavigate();
  const pdfUrl = estate?.project.pdf_catalog;

  useEffect(() => {
    if (error) navigate("/404", { replace: true });
  }, [error, navigate]);

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
