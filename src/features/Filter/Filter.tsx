import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, Select, Typography } from "@/shared/ui";
import {
  useGetCities,
  useGetEstateTypes,
  useGetStaticData,
} from "@/shared/api/hooks";
import styles from "./Filter.module.scss";
import {
  InfiniteData,
  QueryObserverResult,
  RefetchOptions,
} from "@tanstack/react-query";
import { EstatesResponse } from "@/shared/api/types";

interface FilterValues {
  city: number[];
  type: number[];
  order: number[];
}

const getOptionsFromQueryparams = (searchParams: URLSearchParams) => {
  const selectedOptions: FilterValues = {
    city: [],
    type: [],
    order: [],
  };

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

type RefetchFn = (
  _options?: RefetchOptions | undefined
) => Promise<
  QueryObserverResult<InfiniteData<EstatesResponse, unknown>, Error>
>;

export const Filter = ({ refetch }: { refetch?: RefetchFn }) => {
  const { cityOptions } = useGetCities();
  const { typeOptions } = useGetEstateTypes();
  const { orderOptions } = useGetStaticData();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filterValues, setFilterValues] = useState<FilterValues>(
    getOptionsFromQueryparams(searchParams)
  );

  const handleFilter = () => {
    const newSearchParams = new window.URLSearchParams();
    filterValues.city.length > 0 &&
      newSearchParams.append("city", filterValues.city.join(","));
    filterValues.type.length > 0 &&
      newSearchParams.append("type", filterValues.type[0]?.toString());
    filterValues.order.length > 0 &&
      newSearchParams.append("order", filterValues.order[0]?.toString());

    setTimeout(() => {
      if (refetch) refetch();
    }, 0);
    navigate(`/estates/?${newSearchParams}`);
  };

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
            value={filterValues.order}
            options={orderOptions}
            placeholder={"Popular"}
            onChange={(option) => {
              setFilterValues({ ...filterValues, order: option });
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
