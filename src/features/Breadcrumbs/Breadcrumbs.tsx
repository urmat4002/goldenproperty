import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import breadcrumbs from "./Breadcrumbs.module.scss";

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
        <Link className={breadcrumbs.breadcrumbsLink} key={index} to={linkAdr}>
          {"  " + item + "  "}
          <ChevronRight color="#999999" width={20} />
        </Link>
      );
    });

  return (
    <div className={breadcrumbs.breadcrumbs}>
      <Link className={breadcrumbs.breadcrumbsLink} to="/">
        Main{"  "}
        <ChevronRight
          className={breadcrumbs.breadcrumbsChevron}
          color="#999999"
          width={20}
        />
      </Link>
      {data}
    </div>
  );
};
