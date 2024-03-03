import { createContext } from "react";

interface ContextProps {
  isModalOpen?: boolean;
  isCatalog?: boolean;
  isForm?: boolean;
  closeModal?: () => void;
  downloadCatalog?: () => void;
  showFormMessage?: () => void;
}

export const ModalContext = createContext<ContextProps>({});
