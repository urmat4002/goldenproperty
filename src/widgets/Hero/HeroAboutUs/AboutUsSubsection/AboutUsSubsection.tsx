import { FC } from "react";
import { Typography } from "@/shared/ui";

interface Props {
  imageUrl: string;
  title: string;
  content: string;
  styles: CSSModuleClasses;
}

const AboutUsSubsection: FC<Props> = ({ imageUrl, title, content, styles }) => {
  return (
    <div className={styles.heroSubsection}>
      <img className={styles.image} src={imageUrl} alt={title} />
      <Typography
        className={styles.heading}
        variant="h3"
        color="gold"
        /* FIX_ME weight probably should be included in variant */
        weight="semibold"
      >
        {title}
      </Typography>
      {/* FIX_ME weight probably should be included in variant */}
      <Typography className={styles.content} variant="body" weight="medium">
        {content}
      </Typography>
    </div>
  );
};

export default AboutUsSubsection;
