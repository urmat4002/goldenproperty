import { Fragment, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PropertyCard } from "@/entities";
import { Section } from "@/features";
import { HeroEstates } from "@/widgets";
import { Filter } from "@/features/Filter";
import { useGetEstates, useGetStaticData } from "@/shared/api/hooks";
import { Button } from "@/shared/ui";
import styles from "./Estates.module.scss";
import { capitalize } from "@/shared/helper/utils";

const getCitySearchParam = (searchParams: URLSearchParams): string | null => {
  const cityParams = searchParams.get("city");
  if (!cityParams || cityParams.includes(",")) return null;
  return cityParams;
};

export const Estates = () => {
  const [searchParams] = useSearchParams();
  const singleCityId = getCitySearchParam(searchParams);
  const gridRef = useRef(null);
  const [cardPageLimit, setCardPageLimit] = useState(9);
  const { data, fetchNextPage, isFetching, hasNextPage } = useGetEstates(
    cardPageLimit,
    searchParams
  );
  const { data: staticData } = useGetStaticData();

  useEffect(() => {
    if (!gridRef.current) return;
    const gridComputedStyle = window.getComputedStyle(gridRef.current);
    const gridColumnCount = gridComputedStyle
      .getPropertyValue("grid-template-columns")
      .split(" ").length;
    const cardPageLimit = gridColumnCount === 2 ? 8 : 9;
    setCardPageLimit(cardPageLimit);
  }, []);

  return (
    <>
      {singleCityId ? (
        <HeroEstates cityId={singleCityId} />
      ) : (
        <Section
          title={capitalize(staticData?.static_data.header.all_real_estates)}
          container
        >
          <Filter />
        </Section>
      )}
      <Section container>
        <div ref={gridRef} className={styles.estates}>
          {data &&
            data.pages.map((page) => (
              <Fragment key={page.next}>
                {page.estates.map((item) => (
                  <PropertyCard
                    key={item.id}
                    id={item.id}
                    images={item.images}
                    price_usd={item.price_usd}
                    city={item.city}
                    project={item.project}
                  />
                ))}
              </Fragment>
            ))}
        </div>

        {hasNextPage && (
          <div className={styles.viewMore}>
            <Button
              type="primary"
              disabled={isFetching}
              onClick={() => fetchNextPage()}
            >
              View more
            </Button>
          </div>
        )}
      </Section>
    </>
  );
};
