import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Modal } from "../../widgets";
import { Breadcrumbs, FloatingButtons } from "@/features";
import ScrollToTop from "@/features/ScrollToTop/ScrollToTop";
import { ModalContext } from "./Context";
import styles from "./style/Layout.module.scss";

export const Layout: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState("");
  //const [isForm, setIsForm] = useState(true);

  const showFormMessageSuccess = () => {
    setIsModalOpen("form_message_success");
  };

  const showFormMessageError = () => {
    setIsModalOpen("form_message_error");
  };

  const closeModal = () => {
    setIsModalOpen("");
  };
  const downloadCatalog = () => {
    setIsModalOpen("download_catalog");
  };
  const sellEstate = () => {
    setIsModalOpen("sell");
  };

  return (
    <>
      <ModalContext.Provider
        value={{
          closeModal,
          downloadCatalog,
          showFormMessageSuccess,
          showFormMessageError,
          sellEstate,
          isModalOpen,
        }}
      >
        <Header />
        <Breadcrumbs />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
        <FloatingButtons />

        <Modal />
        <ScrollToTop />
      </ModalContext.Provider>
    </>
  );
};
