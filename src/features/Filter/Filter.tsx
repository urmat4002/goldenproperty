import { useState } from "react";
import { FilterValues } from "./types/Filter.types";
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

const getOptionsFromQueryparams = (searchParams: URLSearchParams) => {
  const selectedOptions: FilterValues = {
    city: [],
    type: [],
    rating: [],
  };

  (Object.keys(selectedOptions) as Array<keyof FilterValues>).forEach(
    (selectKey) => {
      const optionIds = searchParams.get(selectKey);
      //console.log({ params: searchParams.toString(), selectKey, optionIds });
      if (optionIds) {
        selectedOptions[selectKey] = optionIds
          .split(",")
          .map((id) => parseInt(id));
        // console.log({ optionIdsArray, apiOptions });
        /* const validOptionIds = optionIdsArray.filter((id) =>
          apiOptions[selectKey]
            .map((optionObject) => optionObject.id)
            .includes(id)
        ); */
        // console.log({ validOptionIds });
      }
    }
  );

  //setSelectValue(selectedOptions);
  return selectedOptions;
};

export const Filter = ({ refetch }: { refetch?: () => Promise<any> }) => {
  const { cityOptions } = useGetCities();
  const { typeOptions } = useGetEstateTypes();
  /* const apiOptions: FilterValue = {
    city: cityOptions,
    type: typeOptions,
    rating: ratingOptions,
  }; */
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  /* const [selectValue, setSelectValue] = useState<FilterValue>(
    getOptionsFromQuery(searchParams)
  ); */
  const [filterValues, setFilterValues] = useState<FilterValues>(
    getOptionsFromQueryparams(searchParams)
  );
  /* const [filterValues, setFilterValues] = useState<FilterValue>({
    city: [],
    type: [],
    rating: [],
  }); */

  const handleFilter = () => {
    const newSearchParams = new window.URLSearchParams();
    filterValues.city.length > 0 &&
      newSearchParams.append("city", filterValues.city.join(","));
    filterValues.type.length > 0 &&
      newSearchParams.append("type", filterValues.type[0]?.toString());
    //FIX_ME add third filter

    setTimeout(() => {
      if (refetch) refetch();
    }, 0);
    navigate(`/estates/?${newSearchParams}`);
  };

  /*   useEffect(() => {
    getOptionsFromQuery(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  return (
    <div className={styles.filter}>
      <div className={styles.filterBlock}>
        <div className={styles.filterSelect}>
          <Select
            value={filterValues.city}
            options={cityOptions}
            placeholder={"City"}
            checkbox={true}
            onChange={(option) => {
              setFilterValues({ ...filterValues, city: option });
            }}
          />
          <Select
            value={filterValues.type}
            options={typeOptions}
            placeholder={"Type"}
            onChange={(option) => {
              setFilterValues({ ...filterValues, type: option });
            }}
          />
          <Select
            value={filterValues.rating}
            options={ratingOptions}
            placeholder={"Popular"}
            onChange={(option) => {
              setFilterValues({ ...filterValues, rating: option });
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
