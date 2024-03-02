import { createContext } from "react";

interface ContextProps {
  isModalOpen?: boolean;
  // eslint-disable-next-line no-unused-vars
  closeModal?: () => void;
  openModal?: () => void;
}

export const Context = createContext<ContextProps>({});
