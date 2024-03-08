import { Typography } from "@/shared/ui";
import { FC } from "react";

export const Brief: FC<{ styles: CSSModuleClasses; description?: string }> = ({
  styles,
  description,
}) => (
  <div className={styles.brief}>
    <Typography variant="body" weight="medium" color="white">
      {description}
    </Typography>
  </div>
);
