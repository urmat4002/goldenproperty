import { createContext } from "react";

export interface ContextProps {
  isModalOpen: string;
  closeModal: () => void;
  downloadCatalog: (_pdfUrl: string | undefined) => void;
  showFormMessageSuccess: () => void;
  showFormMessageError: () => void;
  sellEstate: () => void;
  PDFURL: string | undefined;
}

export const ModalContext = createContext<ContextProps>({} as ContextProps);
