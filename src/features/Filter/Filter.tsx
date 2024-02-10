import { Select } from "@features/Select";
import style from "./Filter.module.scss";
import { Button } from "@/shared/ui";
import { useState } from "react";

export const Filter = () => {
  const [cityValue, setCityValue] = useState<
    (typeof dataCity)[0] | undefined
  >();
  const [typeValue, setTypeValue] = useState<
    (typeof dataCity)[0] | undefined
  >();
  const [ratingValue, setRatingValue] = useState<
    (typeof dataCity)[0] | undefined
  >();

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
  const types = [
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
  const ratings = [
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

  return (
    <div className={style.filter}>
      <div className={style.filterBlock}>
        <div className={style.filterSelect}>
          <Select
            value={cityValue}
            options={dataCity}
            placeholder={"City"}
            onChange={(option) => setCityValue(option)}
          />
          <Select
            value={typeValue}
            options={types}
            placeholder={"Type"}
            onChange={(option) => setTypeValue(option)}
          />
          <Select
            value={ratingValue}
            options={ratings}
            placeholder={"Popular"}
            onChange={(option) => setRatingValue(option)}
          />
        </div>

        <Button type="primary">Show results</Button>
      </div>
    </div>
  );
};
