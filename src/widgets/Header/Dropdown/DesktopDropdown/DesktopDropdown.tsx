import { useState } from "react";
import clsx from "clsx";
import { CityList } from "../CityList/CityList";
import { CityDetails } from "../CityDetails/CityDetails";
import styles from "./DesktopDropdown.module.scss";

export const DesktopDropdown = () => {
  const [currentCityId, setCurrentCityId] = useState(1);

  return (
    <div className={clsx(styles.desktopDropdown, "container")}>
      <CityList
        currentCityId={currentCityId}
        setCurrentCityId={setCurrentCityId}
      />
      <CityDetails currentCityId={currentCityId} />
    </div>
  );
};
