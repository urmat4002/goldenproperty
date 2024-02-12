import clsx from "clsx";
import styles from "./Section.module.scss";
import { Typography } from "@/shared/ui";
import { SectionProps } from "./types/Section.types";

export const Section: React.FC<SectionProps> = ({
  title,
  container = false,
  showTitle = true,
  color = "white",
  customClassName,
  hero,
  children,
}: SectionProps) => {
  return (
    <section
      className={clsx(
        styles.section,
        customClassName,
        hero ? styles.sectionHero : ""
      )}
    >
      <div
        className={clsx(
          container ? styles.sectionContainer : styles.sectionDefault
        )}
      >
        {showTitle && title && (
          <Typography
            variant="h2"
            weight="bold"
            color={color === "gold" ? "gold" : "white"}
          >
            {title}
          </Typography>
        )}
        <div className={styles.sectionContent}>{children}</div>
      </div>
    </section>
  );
};
