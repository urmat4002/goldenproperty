import { ArrowRight } from 'lucide-react'
import style from './Property.module.scss'
import { Button, Typography } from '@/shared/ui'
import { Section } from '@/features'

export const Property = () => {
  return (
    <Section title="Property" container>
      <div className={style.propertyBody}>
        <div className={style.propertyContent}>
          <div className={style.textBlock}>
            <Typography
              variant="h2"
              color="gold"
              weight="bold"
              className={style.textBlockTitle}
            >
              Dubai
            </Typography>
            <div className={style.textBlockDescription}>
              <Typography variant="body">
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
              </Typography>
            </div>
          </div>
          <Button type="primary">
            See real estates
            <ArrowRight />
          </Button>
        </div>
        <div className={style.propertyImage}>
          <img
            src="https://cdnn21.img.ria.ru/images/152275/56/1522755601_0:0:1286:724_1920x0_80_0_0_5c15a33dbdf9a2a9e89e6f70b0b57166.jpg"
            alt="Картина"
          />
        </div>
      </div>
    </Section>
  )
}
