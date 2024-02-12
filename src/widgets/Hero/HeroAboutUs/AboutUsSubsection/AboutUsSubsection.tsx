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
      <Typography className={styles.heading} variant="h3">
        {title}
      </Typography>
      <Typography className={styles.content} variant="body">
        {content}
      </Typography>
    </div>
  );
};

export default AboutUsSubsection;
