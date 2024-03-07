import { createContext } from "react";

interface ContextProps {
  isModalOpen?: string;
  isForm?: boolean;
  closeModal?: () => void;
  downloadCatalog?: () => void;
  showFormMessage?: () => void;
  sellEstate?: () => void;
}

export const ModalContext = createContext<ContextProps>({});
