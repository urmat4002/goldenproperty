import { useEffect, useState } from "react";
import { FilterValue, FiltertItem } from "./types/Filter.types";
import { Button, Select, Typography } from "@/shared/ui";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Filter.module.scss";
import { useGetCities, useGetEstateTypes } from "@/shared/api/hooks";
import { useQueryClient } from "@tanstack/react-query";

/* const dataCity = [
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
]; */

//FIX_ME get from static data api
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

export const Filter = ({ refetch }: { refetch?: () => Promise<any> }) => {
  const queryClient = useQueryClient();
  const { briefData: dataCity } = useGetCities();
  const { briefData: dataTypes } = useGetEstateTypes();
  const data = {
    city: dataCity || [],
    type: dataTypes || [],
    rating: dataRatings,
  };
  //const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectValue, setSelectValue] = useState<FilterValue>({
    city: [],
    type: [],
    rating: [],
  });

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
    return;

    const optionIds = option.map((obj) => obj.id);

    setSearchParams((prev) => {
      prev.set(paramType, optionIds.join(","));

      const params = prev.get(paramType);

      if (!params) prev.delete(paramType);
      return prev;
    });
  };

  //const handleFilter = (event: Event) => {
  const handleFilter = () => {
    //FIX_ME cover case when selectValue is empty
    //const searchParams = `type=${selectValue.type[0].id}`;
    const newSearchParams = new window.URLSearchParams();
    selectValue.city.length > 0 &&
      newSearchParams.append(
        "city",
        selectValue.city.map((item) => item.id).join(",")
      );
    selectValue.type.length > 0 &&
      newSearchParams.append("type", selectValue.type[0]?.id.toString());

    console.log("invalidating");
    /* setTimeout(() => {
      queryClient.invalidateQueries({ queryKey: ["estates"] });
    }, 0); */
    setTimeout(() => {
      if (refetch) refetch();
    }, 0);
    navigate(`/estates/?${newSearchParams}`);
    //event.preventDefault();
    /* console.log({ selectValue });
    const filterParams = {
      city: selectValue.city.map((city) => city.id),
      type: selectValue.type.map((type) => type.id),
      rating: [],
    };
    console.log({ filterParams }); */

    //const searchParams = `city=${selectValue.city?.[0].id}&type=${selectValue.type?.[0].id}`;
  };

  useEffect(() => {
    getOptionsFromQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //}, [pathname]);

  return (
    <div className={styles.filter}>
      <div className={styles.filterBlock}>
        <div className={styles.filterSelect}>
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
