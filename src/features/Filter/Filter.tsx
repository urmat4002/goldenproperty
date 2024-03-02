import { useEffect, useState } from "react";
import { FilterValue } from "./types/Filter.types";
import { Button, Select, Typography } from "@/shared/ui";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Filter.module.scss";
import { useGetCities, useGetEstateTypes } from "@/shared/api/hooks";

//FIX_ME get from static data api
const ratingOptions = [
  {
    id: 1,
    label: "Recently",
  },
  {
    id: 2,
    label: "Popular",
  },
  {
    id: 3,
    label: "All",
  },
];

export const Filter = ({ refetch }: { refetch?: () => Promise<any> }) => {
  const { cityOptions } = useGetCities();
  const { typeOptions } = useGetEstateTypes();
  const apiOptions: FilterValue = {
    city: cityOptions,
    type: typeOptions,
    rating: ratingOptions,
  };
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  /* const [selectValue, setSelectValue] = useState<FilterValue>(
    getOptionsFromQuery(searchParams)
  ); */
  const [selectValue, setSelectValue] = useState<FilterValue>({
    city: [],
    type: [],
    rating: [],
  });

  const handleFilter = () => {
    const newSearchParams = new window.URLSearchParams();
    selectValue.city.length > 0 &&
      newSearchParams.append(
        "city",
        selectValue.city.map((item) => item.id).join(",")
      );
    selectValue.type.length > 0 &&
      newSearchParams.append("type", selectValue.type[0]?.id.toString());
    //FIX_ME add third filter

    setTimeout(() => {
      if (refetch) refetch();
    }, 0);
    navigate(`/estates/?${newSearchParams}`);
  };

  const getOptionsFromQuery = (
    searchParams: URLSearchParams,
    apiOptions: FilterValue
  ) => {
    const selectedOptions: FilterValue = {
      city: [],
      type: [],
      rating: [],
    };

    (Object.keys(selectedOptions) as Array<keyof FilterValue>).forEach(
      (selectKey) => {
        const optionIds = searchParams.get(selectKey);
        console.log({ params: searchParams.toString(), selectKey, optionIds });
        if (optionIds) {
          const optionIdsArray = optionIds.split(",").map((id) => parseInt(id));
          console.log({ optionIdsArray, apiOptions });
          const validOptionIds = optionIdsArray.filter((id) =>
            apiOptions[selectKey]
              .map((optionObject) => optionObject.id)
              .includes(id)
          );
          console.log({ validOptionIds });
          selectedOptions[selectKey] =
            apiOptions[selectKey].filter((item) =>
              validOptionIds.includes(item.id)
            ) || [];
        }
      }
    );

    //setSelectValue(selectedOptions);
    return selectedOptions;
  };

  useEffect(() => {
    getOptionsFromQuery(searchParams, apiOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.filter}>
      <div className={styles.filterBlock}>
        <div className={styles.filterSelect}>
          <Select
            value={selectValue.city}
            options={cityOptions}
            placeholder={"City"}
            checkbox={true}
            onChange={(option) => {
              setSelectValue({ ...selectValue, city: option });
            }}
          />
          <Select
            value={selectValue.type}
            options={typeOptions}
            placeholder={"Type"}
            onChange={(option) => {
              setSelectValue({ ...selectValue, type: option });
            }}
          />
          <Select
            value={selectValue.rating}
            options={ratingOptions}
            placeholder={"Popular"}
            onChange={(option) => {
              setSelectValue({ ...selectValue, rating: option });
            }}
          />
          <Button type="primary" onClick={handleFilter}>
            <Typography variant="button">Show results</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};
