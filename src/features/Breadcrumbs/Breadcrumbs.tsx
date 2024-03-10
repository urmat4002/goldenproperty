import { FC, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Typography } from "@/shared/ui";
import { useGetEstateById, useGetStaticData } from "@/shared/api/hooks";
import styles from "./Breadcrumbs.module.scss";

export const Breadcrumbs = () => {
  const { staticData } = useGetStaticData();
  const location = useLocation();
  let linkAdr = "";

  const path = location.pathname
    .split("/")
    .filter((segment) => segment != "")
    .map((segment, index) => {
      linkAdr += `/${segment}`;
      if (parseInt(segment)) return <EstateCrumb />;
      if (segment === "estates")
        return (
          <Crumb
            key={index}
            index={index}
            content={staticData?.header.all_real_estates || "All real estates"}
            href={linkAdr}
          />
        );
      if (segment === "about-us")
        return (
          <Crumb
            key={index}
            index={index}
            content={staticData?.header.about_us || "About us"}
            href={linkAdr}
          />
        );

      return null;
    });

  if (location.pathname === "/") return null;

  return (
    <div className={styles.breadcrumbsContainer}>
      <Crumb index={-1} content={staticData?.body.main || "Home"} href="/" />
      {path}
    </div>
  );
};

const Crumb: FC<{ index: number; content: ReactNode; href: string }> = ({
  index,
  content,
  href,
}) => {
  return (
    <>
      {index >= 0 && <Chevron />}
      <Link to={href}>
        <Typography
          className={styles.crumbText}
          variant="body"
          weight="regular"
          capitalize
        >
          {content}
        </Typography>
      </Link>
    </>
  );
};

const EstateCrumb: FC = () => {
  const { id } = useParams();
  const { estate } = useGetEstateById(id);

  return (
    <>
      <Chevron />
      <Link to="#">
        <Typography variant="body" weight="regular" capitalize>
          {/* FIX_ME: estate?.title? */}
          {estate?.project.name}
        </Typography>
      </Link>
    </>
  );
};

const Chevron = () => {
  if (document.dir === "rtl") return <ChevronLeft color="#999999" width={20} />;
  return <ChevronRight color="#999999" width={20} />;
};
