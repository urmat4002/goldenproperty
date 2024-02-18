import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import breadcrumbs from "./Breadcrumbs.module.scss";
import { Typography } from "@/shared/ui";

export const Breadcrumbs = () => {
  const location = useLocation();
  let linkAdr = "";
  const data = location.pathname
    .split("/")
    .filter((item) => item != "")
    .map((item, index) => {
      linkAdr += `/${item}`;
      if (item == "estates") item = "All real estates";
      if (item == "about-us") item = "About us";
      return (
        <>
          <Link
            className={breadcrumbs.breadcrumbsLink}
            key={index}
            to={linkAdr}
          >
            <Typography variant="body" weight="regular">
              {item}
            </Typography>
          </Link>
          <ChevronRight color="#999999" width={20} />
        </>
      );
    });

  return (
    <div className={breadcrumbs.breadcrumbs}>
      <div className={breadcrumbs.breadcrumbsContent}>
        <Link className={breadcrumbs.breadcrumbsLink} to="/">
          <Typography variant="body" weight="regular">
            Main
          </Typography>
        </Link>
        <ChevronRight
          className={breadcrumbs.breadcrumbsChevron}
          color="#999999"
          width={20}
        />
        {data}
      </div>
    </div>
  );
};
