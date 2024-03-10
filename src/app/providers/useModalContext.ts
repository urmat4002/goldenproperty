import { createContext, useContext } from "react";

export type ModalVariant =
  | null
  | "sell"
  | "download_catalog"
  | "form_message_error"
  | "form_message_success";

export type ContextProps = {
  modalVariant: ModalVariant;
  closeModal: () => void;
  downloadCatalog: (_pdfUrl: string | undefined) => void;
  showFormMessageSuccess: () => void;
  showFormMessageError: () => void;
  sellEstate: () => void;
  pdfUrl: string | undefined;
};

export const ModalContext = createContext<ContextProps>({} as ContextProps);

export const useModalContext = () => {
  const modalContext = useContext<ContextProps>(ModalContext);
  if (!modalContext)
    throw new Error(
      "ModalContext consumer is not a child of ModalContext provider"
    );
  return modalContext;
};
