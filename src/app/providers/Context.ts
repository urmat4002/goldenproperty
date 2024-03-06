import { createContext } from "react";

interface ContextProps {
  isModalOpen?: string;
  isForm?: boolean;
  closeModal?: () => void;
  downloadCatalog?: () => void;
  showFormMessageSuccess?: () => void;
  showFormMessageError?: () => void;
  sellEstate?: () => void;
}

export const ModalContext = createContext<ContextProps>({});
