import { Check, X } from "lucide-react";
import { FC, ReactNode } from "react";

export const BulletPoint: FC<{
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
