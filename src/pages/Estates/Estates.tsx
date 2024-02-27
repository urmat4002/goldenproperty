import axios from "axios";
import { ObjectCard } from "@/entities";
import { Section } from "@/features";
import { HeroEstates } from "@/widgets";
import { useAppSelector } from "@/shared/hooks/hooks";
import { Filter } from "@/features/Filter";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { ObjectCardState } from "@/entities/ObjectCard/types/ObjectCard.types";
import styles from "./Estates.module.scss";
import { useEffect } from "react";

export const Estates = () => {
  const [searchParams] = useSearchParams();
  const isOpen = useAppSelector((state) => state.citySlice.isOpen);

  useEffect(() => {
    getEstates();
  }, [searchParams]);

  async function getEstates(): Promise<ObjectCardState> {
    try {
      const response = await axios.get(`/api/v1/estate`, {
        params: {
          search: searchParams.get("search"),
        },
      });

      return response.data;
    } catch (error) {
      throw new Error("Can't get estates!");
    }
  }

  const { data, isSuccess } = useQuery({
    queryKey: ["estates"],
    queryFn: getEstates,
  });

  return (
    <>
      {isOpen ? (
        <HeroEstates />
      ) : (
        <Section title="All real estates" container>
          <Filter />
        </Section>
      )}
      <Section container>
        <div className={styles.estates}>
          {isSuccess &&
            data.estates.map((item) => (
              <ObjectCard
                key={item.id}
                id={item.id}
                images={
                  Array.isArray(item.images) ? item.images : [item.images]
                }
                price_usd={item.price_usd}
                city={item.city}
                project={item.project}
              />
            ))}
        </div>
      </Section>
    </>
  );
};
