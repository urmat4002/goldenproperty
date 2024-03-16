import { FC, ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { HeaderContext } from "./useHeaderContext";

export const HeaderProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 1128px)" });
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const openDropdown = () => setIsDropdownOpen(true);
  const closeDropdown = () => setIsDropdownOpen(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  useEffect(() => {
    closeDropdown();
  }, [pathname]);

  return (
    <HeaderContext.Provider
      value={{
        isDropdownOpen,
        setIsDropdownOpen,
        openDropdown,
        closeDropdown,
        toggleDropdown,
        isMobile,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
