import { Fragment } from "react";
import { ObjectCard } from "@/entities";
import { Section } from "@/features";
import { HeroEstates } from "@/widgets";
import { useAppSelector } from "@/shared/hooks/hooks";
import { Filter } from "@/features/Filter";
import styles from "./Estates.module.scss";
import { useGetEstates } from "@/shared/api/hooks";
import { Button } from "@/shared/ui";
import { useSearchParams } from "react-router-dom";

export const Estates = () => {
  const isOpen = useAppSelector((state) => state.citySlice.isOpen);

  const { data, status, fetchNextPage, refetch, isFetching, hasNextPage } =
    useGetEstates(3);

  /*   useEffect(() => {
    console.log(searchParams.toString());
    if (data) refetch();
  }, [searchParams]); */

  return (
    <>
      {isOpen ? (
        <HeroEstates />
      ) : (
        <Section title="All real estates" container>
          <Filter refetch={refetch} />
        </Section>
      )}
      <Section container>
        <div className={styles.estates}>
          {status === "success" &&
            data?.pages.map((page) => (
              <Fragment key={page.next}>
                {page.estates.map((item) => (
                  <ObjectCard
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
