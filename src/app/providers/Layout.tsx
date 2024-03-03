import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Modal } from "../../widgets";
import { Breadcrumbs, FloatingButtons } from "@/features";
import ScrollToTop from "@/features/ScrollToTop/ScrollToTop";
import { ModalContext } from "./Context";
import styles from "./style/Layout.module.scss";

export const Layout: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCatalog, setIsCatalog] = useState(false);
  const [isForm, setIsForm] = useState(true);

  const showFormMessage = () => {
    setIsModalOpen(true);
    setIsForm(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsForm(true);
  };
  const downloadCatalog = () => {
    setIsModalOpen(true);
    setIsCatalog(true);
  };

  return (
    <>
      <ModalContext.Provider
        value={{
          closeModal,
          downloadCatalog,
          showFormMessage,
          isCatalog,
          isModalOpen,
          isForm,
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
