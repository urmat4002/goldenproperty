import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header, Modal } from "../../widgets";
import { Breadcrumbs, FloatingButtons } from "@/features";
import ScrollToTop from "@/features/ScrollToTop/ScrollToTop";
import styles from "./style/Layout.module.scss";

export const Layout: FC = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname !== "/" && <Breadcrumbs />}
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
      <Modal />
      <ScrollToTop />
    </>
  );
};
