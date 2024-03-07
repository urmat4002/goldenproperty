import { FC, ReactNode, useContext } from "react";
import { useParams } from "react-router-dom";
import { Section, SliderObject } from "@/features";
import { Button, Typography } from "@/shared/ui";
import { ModalContext } from "@/app/providers/Context";
import { useGetEstateById } from "@/shared/api/hooks";
import styles from "./HeroRoom.module.scss";
import { TriangleRuler } from "@/shared/ui/Icons/TriangleRuler";

export const HeroRoom: FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const { downloadCatalog } = useContext(ModalContext);
  const { id } = useParams();
  const { data, isLoading } = useGetEstateById(id);
  const estate = data?.estate;

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
              onClick={downloadCatalog}
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
  const estate = data?.estate;

  return (
    <ul className={styles.bullets}>
      <BulletPoint
        styles={styles}
        icon={<TriangleRuler />}
        label="label"
        value="value"
      />
      <BulletPoint
        styles={styles}
        icon={<TriangleRuler />}
        label="label"
        value="value"
      />
      <BulletPoint
        styles={styles}
        icon={<TriangleRuler />}
        label="label"
        value="value"
      />
      <BulletPoint
        styles={styles}
        icon={<TriangleRuler />}
        label="label"
        value="value"
      />
      <BulletPoint
        styles={styles}
        icon={<TriangleRuler />}
        label="label"
        value="value"
      />
      <BulletPoint
        styles={styles}
        icon={<TriangleRuler />}
        label="label"
        value="value"
      />
      {/* <div>
        <div className={styles.descriptionItem}>
          <Typography variant="body" weight="medium" color="white">
            {`${estate?.city}, ${estate?.project.name}`}
          </Typography>
        </div>
        <div className={styles.descriptionItem}>
          <Typography variant="body" weight="medium" color="white">
            Furnished:
            {estate?.project.is_furnished ? (
              <span> yes</span>
            ) : (
              <span> no</span>
            )}
          </Typography>
        </div>
      </div>
      <div>
        <div className={styles.descriptionItem}>
          <Typography variant="body" weight="medium" color="white">
            Type: {estate?.estate_type}
          </Typography>
        </div>
        <div className={styles.descriptionItem}>
          <Typography variant="body" weight="medium" color="white">
            Area: {estate?.area}
          </Typography>
        </div>
      </div>
      <div>
        <div className={styles.descriptionItem}>
          <Typography variant="body" weight="medium" color="white">
            Completion: {estate?.project.completion}
          </Typography>
        </div>
        <div className={styles.descriptionItem}>
          <Typography variant="body" weight="medium" color="white">
            Is secondary:{" "}
            {estate?.is_secondary ? <span>yes</span> : <span>no</span>}{" "}
          </Typography>
        </div>
      </div> */}
    </ul>
  );
};

const BulletPoint: FC<{
  styles: CSSModuleClasses;
  icon: ReactNode;
  label: string;
  value: ReactNode;
}> = ({ styles, icon, label, value }) => {
  return (
    <li className={styles.bulletPoint}>
      {icon}
      <span>{label}</span>:<span>{value}</span>
    </li>
  );
};
