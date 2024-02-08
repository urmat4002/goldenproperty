import style from './Features.module.scss'
import { Section } from '@/features'
import {
  Featuresimg1,
  Featuresimg2,
  Featuresimg3,
  Featuresimg4,
  Featuresimg5,
  Featuresimg6,
  Featuresimg7,
  Featuresimg8,
  Featuresimg9,
  Featuresimg10,
  Featuresimg11,
  Featuresimg12,
} from '@shared/ui/Icons/FeaturesImg'

export const Features = () => {
  const ftrsObject = [
    {
      img: <Featuresimg1 />,
      title: 'Treadmills',
    },
    {
      img: <Featuresimg2 />,
      title: 'Balcony',
    },
    {
      img: <Featuresimg3 />,
      title: 'Green spaces',
    },
    {
      img: <Featuresimg4 />,
      title: 'Children playground',
    },
    {
      img: <Featuresimg5 />,
      title: 'Tennis court',
    },
    {
      img: <Featuresimg6 />,
      title: 'Fitness center and gym',
    },
    {
      img: <Featuresimg7 />,
      title: 'Parking space',
    },
    {
      img: <Featuresimg8 />,
      title: 'Boutiques and shops',
    },
    {
      img: <Featuresimg9 />,
      title: 'Pool',
    },
    {
      img: <Featuresimg10 />,
      title: 'BBQ area',
    },
    {
      img: <Featuresimg11 />,
      title: 'Security ',
    },
    {
      img: <Featuresimg12 />,
      title: 'Sports grounds',
    },
  ]
  return (
    <Section title="Features & amenities" >
      <div className={style.features}>
        <div className={style.featuresContainer}>
          {ftrsObject.map((features) => (
            <div className={style.featuresItem}>
              {features.img}
              <p>{features.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
