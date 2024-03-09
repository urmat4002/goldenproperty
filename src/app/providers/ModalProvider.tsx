import { FC, ReactNode, createContext, useState } from "react";

type ModalVariant =
  | ""
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
};

export const ModalContext = createContext<ContextProps>({} as ContextProps);

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [modalVariant, setModalVariant] = useState<ModalVariant>("");

  const showFormMessageSuccess = () => {
    setModalVariant("form_message_success");
  };
  const showFormMessageError = () => {
    setModalVariant("form_message_error");
  };
  const downloadCatalog = (pdfUrl: string | undefined) => {
    if (localStorage.getItem("catalog")) {
      window.open(pdfUrl, "_blank");
      return;
    }
    setModalVariant("download_catalog");
  };
  const sellEstate = () => {
    setModalVariant("sell");
  };

  const closeModal = () => {
    setModalVariant("");
  };

  return (
    <ModalContext.Provider
      value={{
        closeModal,
        downloadCatalog,
        showFormMessageSuccess,
        showFormMessageError,
        sellEstate,
        modalVariant,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
