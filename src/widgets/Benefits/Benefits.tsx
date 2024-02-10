import style from "./Benefits.module.scss";
import { Section } from "@/features";
import {
  BenefitsImg1,
  BenefitsImg2,
  BenefitsImg3,
  BenefitsImg4,
} from "@/shared/ui/Icons/BenefitsImg";

const objectBenefits = [
  {
    img: <BenefitsImg1 />,
    title: 'Exclusive offers', 
    body: 'Our company offers a wide selection of real estate from exclusive apartments to country houses'
  },
  {
    img: <BenefitsImg2 />,
    title: 'Confidentiality',
    body: 'We guarantee the confidentiality of your data and cooperate only with trusted agents and sellers.'
  },
  {
    img: <BenefitsImg3 />,
    title: 'A wide selection',
    body: 'Exclusive offers, virtual tours, consultations with experts - everything to make the process of choosing a property convenient and exciting.',
  },
  {
    img: <BenefitsImg4/>,
    title: 'Feedback',
    body: 'If you need help managing your property, we provide rental management services, ensuring your property receives maximum value and care.'
  }
]

export const Benefits = () => {
  return (
    <Section title="Benefits of Golden House" container>
      <div className={style.benefits}>
        {objectBenefits.map(item =>   
          <div className={style.benefitsItem}>
            {item.img}
            <p className={style.benefitsTitle}>{item.title}</p>
            <p className={style.benefitsBody}>{item.body}</p>
          </div>
        )}
      </div>
    </Section>
  );
};
