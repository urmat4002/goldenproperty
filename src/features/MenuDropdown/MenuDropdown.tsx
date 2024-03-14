import { useRef, useState } from "react";
import { MenuBanner } from "./MenuBanner";
import { MenuLeft } from "./MenuLeft/MenuLeft";
import clsx from "clsx";
import { useGetCities } from "@/shared/api/hooks";

export const MenuDropdown: React.FC<{ moduleStyle: CSSModuleClasses }> = ({
  moduleStyle,
}) => {
  const [cityId, setCityId] = useState<number>(1);
  const { data } = useGetCities();
  const cities = data?.cities || [];
  const currentCity = data?.cities.find((city) => city.id === cityId);
  const ref = useRef(null);
  const handleCityClick = (id: number) => {
    setCityId(id);
  };

  const closeDDM = () => {
    const menuDropdown = ref.current! as HTMLDivElement;

    if (!menuDropdown) return;
    menuDropdown.setAttribute("close", "true");
    setTimeout(() => {
      menuDropdown.removeAttribute("close");
    }, 2000);
  };

  return (
    <div className={clsx(moduleStyle.menuDropdown)} ref={ref}>
      <div className={moduleStyle.menuDropdownContainer}>
        {cities && <MenuLeft onClick={handleCityClick} id={cityId} />}
        {currentCity && <MenuBanner closeDDM={closeDDM} city={currentCity} />}
      </div>
    </div>
  );
};
