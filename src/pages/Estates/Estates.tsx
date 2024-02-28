import { ObjectCard } from "@/entities";
import { Section } from "@/features";
import { HeroEstates } from "@/widgets";
import { useAppSelector } from "@/shared/hooks/hooks";
import { Filter } from "@/features/Filter";
import styles from "./Estates.module.scss";
import { useGetEstates } from "@/shared/api/hooks";

export const Estates = () => {
  const isOpen = useAppSelector((state) => state.citySlice.isOpen);

  const { data, isSuccess } = useGetEstates();

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
            data?.estates.map((item) => (
              <ObjectCard
                key={item.id}
                id={item.id}
                images={
                  item.images
                  //Array.isArray(item.images) ? item.images : [item.images]
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
