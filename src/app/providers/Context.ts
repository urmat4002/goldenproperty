import { createContext } from "react";

interface ContextProps {
  isModalOpen?: boolean;
  closeModal?: () => void;
  openModal?: () => void;
}

export const ModalContext = createContext<ContextProps>({});
