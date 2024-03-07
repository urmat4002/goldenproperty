import { FC, ReactNode, useContext } from "react";
import { useParams } from "react-router-dom";
import { Section, SliderObject } from "@/features";
import { Button, Typography } from "@/shared/ui";
import { ModalContext } from "@/app/providers/Context";
import { useGetEstateById, useGetStaticData } from "@/shared/api/hooks";
import styles from "./HeroRoom.module.scss";
import { TriangleRuler } from "@/shared/ui/Icons/TriangleRuler";
import { Location } from "@/shared/ui/Icons/Location";
import { capitalize } from "@/shared/helper/utils";
import { CityOne } from "@/shared/ui/Icons/CityOne";
import { Calendar } from "@/shared/ui/Icons/Calendar";
import { Sofa } from "@/shared/ui/Icons/Sofa";
import { Check, X } from "lucide-react";

export const HeroRoom: FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const { downloadCatalog } = useContext(ModalContext);
  const { id } = useParams();
  const { data, isLoading } = useGetEstateById(id);
  const estate = data?.estate;
  const pdfUrl = estate?.project.pdf_catalog;

  return (
    <Section title={isLoading ? "" : estate?.project.name} container>
      <div className={styles.wrapper}>
        <SliderObject isMobile={isMobile} />
        <Brief styles={styles} description={estate?.description} />
        <Bullets styles={styles} id={id} />

        <div className={styles.priceRow}>
          <Typography variant="h2" color="gold" weight="bold">
            Price at: {estate?.price_usd} USD
          </Typography>
          <div className={styles.buttons}>
            <Button
              customClasses={styles.priceBtnsItem}
              onClick={() => downloadCatalog(pdfUrl)}
              type="primary"
            >
              Catalog
            </Button>
            <Button customClasses={styles.priceBtnsItem} type="primary">
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Brief: FC<{ styles: CSSModuleClasses; description?: string }> = ({
  styles,
  description,
}) => (
  <div className={styles.brief}>
    <Typography variant="body" weight="medium" color="white">
      {description}
    </Typography>
  </div>
);

const Bullets: FC<{ styles: CSSModuleClasses; id: string | undefined }> = ({
  styles,
  id,
}) => {
  const { data } = useGetEstateById(id);
  const { data: staticData } = useGetStaticData();
  const estate = data?.estate;

  return (
    <ul className={styles.bullets}>
      <BulletPoint
        styles={styles}
        icon={<Location />}
        label={estate?.city}
        value={estate?.project.location}
        comma
      />
      <BulletPoint
        styles={styles}
        icon={<CityOne />}
        label={capitalize(staticData?.static_data.body.estate_type)}
        value={capitalize(estate?.estate_type)}
      />
      <BulletPoint
        styles={styles}
        icon={<Calendar />}
        label={capitalize(staticData?.static_data.body.completion)}
        value={estate?.project.completion}
      />
      <BulletPoint
        styles={styles}
        icon={<Sofa />}
        label={capitalize(staticData?.static_data.body.furnished)}
        value={estate?.project.is_furnished}
      />
      <BulletPoint
        styles={styles}
        icon={<TriangleRuler />}
        label="Area !API"
        value={estate?.area}
      />
      <BulletPoint
        styles={styles}
        icon={<CityOne />}
        label="Is secondary !API"
        value={estate?.is_secondary}
      />
    </ul>
  );
};

const BulletPoint: FC<{
  styles: CSSModuleClasses;
  icon: ReactNode;
  label: string | undefined;
  value: string | number | boolean | undefined;
  comma?: boolean;
}> = ({ styles, icon, label, value, comma }) => {
  let renderedValue: ReactNode = "...";
  switch (typeof value) {
    case "number":
      renderedValue = (
        <>
          {value.toString()} m<sup>2</sup>
        </>
      );
      break;
    case "string":
      renderedValue = value;
      break;
    case "boolean":
      renderedValue = value ? <Check strokeWidth={3} /> : <X strokeWidth={3} />;
      break;

    default:
      break;
  }

  return (
    <li className={styles.bulletPoint}>
      {icon}
      <span>
        {label || "..."}
        {comma ? ", " : ": "}
      </span>
      <span>{renderedValue}</span>
    </li>
  );
};
