import { FC } from "react";
import { useGetEstateById, useGetStaticData } from "@/shared/api/hooks";
import { BulletPoint } from "./BulletPoint";
import { TriangleRuler } from "@/shared/ui/Icons/TriangleRuler";
import { Location } from "@/shared/ui/Icons/Location";
import { CityOne } from "@/shared/ui/Icons/CityOne";
import { Calendar } from "@/shared/ui/Icons/Calendar";
import { Sofa } from "@/shared/ui/Icons/Sofa";
import { capitalize } from "@/shared/helper/utils";

export const Bullets: FC<{
  styles: CSSModuleClasses;
  id: string | undefined;
}> = ({ styles, id }) => {
  const { data } = useGetEstateById(id);
  const { data: staticData } = useGetStaticData();
  const estate = data?.estate;

  return (
    <ul className={styles.bullets}>
      <BulletPoint
        styles={styles}
        icon={<Location />}
        label={estate?.city}
        value={estate?.project.location}
        comma
      />
      <BulletPoint
        styles={styles}
        icon={<CityOne />}
        label={capitalize(staticData?.static_data.body.estate_type || "Type")}
        value={capitalize(estate?.estate_type)}
      />
      <BulletPoint
        styles={styles}
        icon={<Calendar />}
        label={capitalize(
          staticData?.static_data.body.completion || "Completion"
        )}
        value={estate?.project.completion}
      />
      <BulletPoint
        styles={styles}
        icon={<Sofa />}
        label={capitalize(
          staticData?.static_data.body.furnished || "Furnished"
        )}
        value={estate?.project.is_furnished}
      />
      <BulletPoint
        styles={styles}
        icon={<TriangleRuler />}
        label={capitalize(staticData?.static_data.body.area || "Area")}
        value={estate?.area}
      />
      <BulletPoint
        styles={styles}
        icon={<CityOne />}
        label={capitalize(
          staticData?.static_data.body.is_secondary || "Secondary"
        )}
        value={estate?.is_secondary}
      />
    </ul>
  );
};
