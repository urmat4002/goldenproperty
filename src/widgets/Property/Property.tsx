import { ArrowRight } from 'lucide-react';
import { SliderCity } from '../../features/Slider/SliderCity/SliderCity';
import style from './Property.module.scss';
import { Button } from '@/shared/ui';

export const Property = () => {
  return (
    <div className={style.property}>
      <div className={style.propertyContainer}>
        <div className={style.propertyTitle}>
          <div>Property</div>
        </div>

        <div className={style.propertyBody}>
          <div className={style.propertyContent}>
            <div className={style.textBlock}>
              <h1 className={style.textBlockTitle}>Dubai</h1>

              <div className={style.textBlockDescription}>
                Living in Dubai has several advantages: Economic Growth: The
                city provides ample career opportunities with a vibrant economy
                and many business opportunities.International character: Dubai
                is a cultural bridge between East and West, providing unique
                diversity and intercultural experiences. Infrastructure: The
                city is known for its modern infrastructure, including tall
                buildings, innovative transport systems and modern entertainment
                complexes. Safety: Dubai is considered one of the safest places
                to live, which provides peace of mind to residents and permanent
                residents. Tax benefits: The absence of income tax and low tax
                rates are attractive
              </div>

              <Button type="primary">
                See real estates
                <ArrowRight />
              </Button>
            </div>
          </div>

          <div className={style.propertyImage}>
            <img
              src="https://cdnn21.img.ria.ru/images/152275/56/1522755601_0:0:1286:724_1920x0_80_0_0_5c15a33dbdf9a2a9e89e6f70b0b57166.jpg"
              alt="Картина"
            />
          </div>
        </div>

        <div>
          <SliderCity />
        </div>
      </div>
    </div>
  );
};
