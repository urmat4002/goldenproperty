import { FC } from "react";
import clsx from "clsx";
import { MobileDropdown } from "./MobileDropdown/MobileDropdown";
import { DesktopDropdown } from "./DesktopDropdown/DesktopDropdown";
import { useHeaderContext } from "@/app/providers/useHeaderContext";

export const Dropdown: FC<{
  styles: CSSModuleClasses;
}> = ({ styles }) => {
  const { isDropdownOpen, isMobile } = useHeaderContext();

  return (
    <div className={clsx(styles.dropdown, isDropdownOpen && styles.active)}>
      {isMobile ? <MobileDropdown /> : <DesktopDropdown />}
    </div>
  );
};
