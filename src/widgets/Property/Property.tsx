import { FC } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@/shared/ui";
import { Section } from "@/features";
//import { useInnerWidthExceedsDefault } from "@/shared/helper/ScreenWidthTracker";
import { useGetCities, useGetStaticData } from "@/shared/api/hooks";
import styles from "./Property.module.scss";
import { GButton } from "@/shared/ui/Button/GButton";

export const Property: FC = () => {
  //const state = useInnerWidthExceedsDefault({ defaultThreshold: 992 });
  //const [value, setValue] = useState<number>(0);
  const { data } = useGetCities();
  const { data: staticData } = useGetStaticData();

  // console.log(staticData?.static_data.body.see_real_estates);

  const firstCityData = data?.cities?.[0];

  /* useEffect(() => {
    setValue(state ? 520 : 320);
    //FIX_ME: wtf effect watches value and sets value
  }, [state, value]); */

  return (
    <Section
      title={staticData?.static_data.body.property || "Property"}
      customClassName={styles.property}
      container
    >
      <div className={styles.body}>
        <div className={styles.content}>
          <Typography
            variant="h2"
            color="gold"
            weight="bold"
            className={styles.title}
          >
            {firstCityData?.city_name || "Dubai"}
          </Typography>

          <div className={styles.description}>
            <Typography variant="body" weight="regular" color="white">
              {firstCityData?.city_description}
            </Typography>
            <div className={styles.descriptionShade}></div>
          </div>

          <Link to={`/estates/?city=${firstCityData?.id || "1"}`}>
            <GButton variant="navigate">
              {staticData?.static_data.body.see_real_estates ||
                "See real estates"}
            </GButton>
          </Link>
        </div>

        <img
          className={styles.image}
          src={firstCityData?.city_img}
          alt="Картина"
        />
      </div>
    </Section>
  );
};
