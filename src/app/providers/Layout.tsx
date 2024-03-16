import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Modal } from "../../widgets";
import { Breadcrumbs, FloatingButtons } from "@/features";
import ScrollToTop from "@/features/ScrollToTop/ScrollToTop";
import { ModalProvider } from "./ModalProvider";
import { HeaderProvider } from "./HeaderProvider";
import styles from "./style/Layout.module.scss";

export const Layout: FC = () => {
  return (
    <ModalProvider>
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <Breadcrumbs />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />

      <Modal />
      <ScrollToTop />
    </ModalProvider>
  );
};
