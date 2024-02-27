import { useEffect, useState } from "react";
import { FilterValue, FiltertItem } from "./types/Filter.types";
import { Button, Select, Typography } from "@/shared/ui";
import { useNavigate, useSearchParams } from "react-router-dom";
import style from "./Filter.module.scss";

const dataCity = [
  {
    id: 1,
    label: "Istanbul",
  },
  {
    id: 2,
    label: "Dubai",
  },
  {
    id: 3,
    label: "Bishkek",
  },
];
const dataTypes = [
  {
    id: 1,
    label: "Apartments",
  },
  {
    id: 2,
    label: "Duplexes",
  },
  {
    id: 3,
    label: "Penthouses",
  },
  {
    id: 4,
    label: "Cottages",
  },
  {
    id: 5,
    label: "Townhouses",
  },
  {
    id: 6,
    label: "Commercial propertiesfdffdsdfdf",
  },
];
const dataRatings = [
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

const data = {
  city: dataCity,
  type: dataTypes,
  rating: dataRatings,
};

export const Filter = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectValue, setSelectValue] = useState<FilterValue>({
    city: [],
    type: [],
    rating: [],
  });

  useEffect(() => {
    getOptionsFromQuery();
  }, []);

  const getOptionsFromQuery = () => {
    const selectedOptions: FilterValue = {
      city: [],
      type: [],
      rating: [],
    };

    (Object.keys(selectValue) as Array<keyof FilterValue>).forEach(
      (selectKey) => {
        const optionIds = searchParams.get(selectKey);

        if (optionIds) {
          const optionArrayIds = optionIds.split(",").map((id) => parseInt(id));
          const foundOptions = (data as { [key: string]: FiltertItem[] })[
            selectKey
          ].filter((option) => optionArrayIds.includes(option.id));
          selectedOptions[selectKey] = foundOptions;
        }
      }
    );

    setSelectValue(selectedOptions);
  };

  const handleSearchParams = (option: FiltertItem[], paramType: string) => {
    const optionIds = option.map((obj) => obj.id);

    setSearchParams((prev) => {
      prev.set(paramType, optionIds.join(","));

      const params = prev.get(paramType);

      if (!params) prev.delete(paramType);
      return prev;
    });
  };

  const handleFilter = (event: Event) => {
    event.preventDefault();

    navigate(`/estates/?${searchParams}`);
  };

  return (
    <div className={style.filter}>
      <div className={style.filterBlock}>
        <div className={style.filterSelect}>
          <Select
            value={selectValue.city}
            options={dataCity}
            placeholder={"City"}
            checkbox={true}
            onChange={(option) => {
              handleSearchParams(option, "city");
              setSelectValue({ ...selectValue, city: option });
            }}
          />
          <Select
            value={selectValue.type}
            options={dataTypes}
            placeholder={"Type"}
            onChange={(option) => {
              handleSearchParams(option, "type");
              setSelectValue({ ...selectValue, type: option });
            }}
          />
          <Select
            value={selectValue.rating}
            options={dataRatings}
            placeholder={"Popular"}
            onChange={(option) => {
              handleSearchParams(option, "rating");
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
