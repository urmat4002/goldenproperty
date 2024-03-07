import { createContext } from "react";

export interface ContextProps {
  isModalOpen: string;
  closeModal: () => void;
  downloadCatalog: () => void;
  showFormMessageSuccess: () => void;
  showFormMessageError: () => void;
  sellEstate: () => void;
}

export const ModalContext = createContext<ContextProps | null>(null);
