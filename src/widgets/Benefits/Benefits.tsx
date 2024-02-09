import style from "./Benefits.module.scss";
import { Section } from "@/features";
import { Typography } from "@/shared/ui";
import {
  BenefitsImg1,
  BenefitsImg2,
  BenefitsImg3,
  BenefitsImg4,
} from "@/shared/ui/Icons/BenefitsImg";

export const Benefits = () => {
  return (
    <Section title="Benefits of Golden House">
      <div className={style.benefits}>
        <div className={style.benefitsContainer}>
          <div className={style.benefitsItem}>
            <BenefitsImg1 />
            <Typography variant="h3" color="white" weight="medium">
              <p className={style.benefitsTitle}>Exclusive offers</p>
            </Typography>
            <p className={style.benefitsBody}>Our company offers a wide selection of real estate from exclusive apartments to country houses.</p>
          </div>
          <div className={style.benefitsItem}>
            <BenefitsImg2 />
            <Typography variant="h3" color="white" weight="medium">
              <p className={style.benefitsTitle}>Confidentiality</p>
            </Typography>
            <p className={style.benefitsBody}>We guarantee the confidentiality of your data and cooperate only with trusted agents and sellers.</p>
          </div>
          <div className={style.benefitsItem}>
            <BenefitsImg3 />
            <Typography variant="h3" color="white" weight="medium">
              <p className={style.benefitsTitle}>Exclusive offers</p>
            </Typography>
            <p className={style.benefitsBody}>Exclusive offers, virtual tours, consultations with experts - everything to make the process of choosing a property convenient and exciting.</p>
          </div>
          <div className={style.benefitsItem}>
            <BenefitsImg4 />
            <Typography variant="h3" color="white" weight="medium">
              <p className={style.benefitsTitle}>Feedback</p>
            </Typography>
            <p className={style.benefitsBody}>If you need help managing your property, we provide rental management services, ensuring your property receives maximum value and care.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
