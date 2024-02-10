import { ReactNode } from "react";

export interface SectionProps {
  title?: string;
  container?: boolean;
  showTitle?: boolean;
  color?: "white" | "gold";
  customClassName?: string;
  children: ReactNode;
}
