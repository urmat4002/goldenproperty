import { useContext } from "react";
import { ContextProps, ModalContext } from "./ModalProvider";

export const useModalContext = () => {
  const modalContext = useContext<ContextProps>(ModalContext);
  if (!modalContext)
    throw new Error(
      "ModalContext consumer is not a child of ModalContext provider"
    );
  return modalContext;
};
