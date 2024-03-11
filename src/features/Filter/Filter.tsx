import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Select } from "@/shared/ui";
import {
  useGetCities,
  useGetEstateTypes,
  useGetStaticData,
} from "@/shared/api/hooks";
import { capitalize } from "@/shared/helper/utils";
import styles from "./Filter.module.scss";
import { GButton } from "@/shared/ui/Button/GButton";

interface FilterValues {
  city: number[];
  type: number[];
  order: number[];
}

const getinitialFilterParams = (): FilterValues => ({
  city: [],
  type: [],
  order: [],
});

const getOptionsFromQueryparams = (searchParams: URLSearchParams) => {
  const selectedOptions = getinitialFilterParams();

  (Object.keys(selectedOptions) as Array<keyof FilterValues>).forEach(
    (selectKey) => {
      const optionIds = searchParams.get(selectKey);
      if (optionIds) {
        selectedOptions[selectKey] = optionIds
          .split(",")
          .map((id) => parseInt(id));
      }
    }
  );
  return selectedOptions;
};

export const Filter = () => {
  const { cityOptions } = useGetCities();
  const { typeOptions } = useGetEstateTypes();
  const { orderOptions, staticData } = useGetStaticData();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filterValues, setFilterValues] = useState<FilterValues>(
    getinitialFilterParams()
  );

  const handleFilter = () => {
    const newSearchParams = new window.URLSearchParams();
    filterValues.city.length > 0 &&
      newSearchParams.append("city", filterValues.city.join(","));
    filterValues.type.length > 0 &&
      filterValues.type[0] >= 0 &&
      newSearchParams.append("type", filterValues.type[0]?.toString());
    filterValues.order.length > 0 &&
      newSearchParams.append("order", filterValues.order[0]?.toString());

    navigate(`/estates/?${newSearchParams}`);
  };

  useEffect(() => {
    setFilterValues(getOptionsFromQueryparams(searchParams));
  }, [searchParams]);

  return (
    <div className={styles.filter}>
      <Select
        value={filterValues.city}
        options={cityOptions}
        placeholder={capitalize(staticData?.body.city)}
        checkbox={true}
        onChange={(option) => {
          setFilterValues({ ...filterValues, city: option });
        }}
      />
      <Select
        value={filterValues.type}
        options={[
          ...typeOptions,
          { id: -1, label: staticData?.body.all || "All" },
        ]}
        placeholder={capitalize(staticData?.body.estate_type)}
        onChange={(option) => {
          setFilterValues({ ...filterValues, type: option });
        }}
      />
      <Select
        value={filterValues.order}
        options={orderOptions}
        placeholder={capitalize(staticData?.body.popular)}
        onChange={(option) => {
          setFilterValues({ ...filterValues, order: option });
        }}
      />
      <GButton onClick={handleFilter} fullWidth disabled={false}>
        {staticData?.body.show_result}
      </GButton>
    </div>
  );
};
