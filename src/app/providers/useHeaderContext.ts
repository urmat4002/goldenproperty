import { Dispatch, createContext, useContext } from "react";

type ContextProps = {
  isDropdownOpen: boolean;
  isMobile: boolean;
  setIsDropdownOpen: Dispatch<React.SetStateAction<boolean>>;
  openDropdown: () => void;
  closeDropdown: () => void;
  toggleDropdown: () => void;
};

export const HeaderContext = createContext<ContextProps>({} as ContextProps);

export const useHeaderContext = () => {
  const headerContext = useContext<ContextProps>(HeaderContext);
  if (!headerContext)
    throw new Error(
      "HeaderContext consumer is not a child of HeaderContext provider"
    );
  return headerContext;
};
