import style from './Features.module.scss'
import { Section } from "@/features"
import { Featuresimg1 } from "@/shared/ui/Icons/FeaturesImg/Featuresimg1"
import { Featuresimg10 } from "@/shared/ui/Icons/FeaturesImg/Featuresimg10"
import { Featuresimg11 } from "@/shared/ui/Icons/FeaturesImg/Featuresimg11"
import { Featuresimg12 } from "@/shared/ui/Icons/FeaturesImg/Featuresimg12"
import { Featuresimg2 } from "@/shared/ui/Icons/FeaturesImg/Featuresimg2"
import { Featuresimg3 } from "@/shared/ui/Icons/FeaturesImg/Featuresimg3"
import { Featuresimg4 } from "@/shared/ui/Icons/FeaturesImg/Featuresimg4"
import { Featuresimg5 } from "@/shared/ui/Icons/FeaturesImg/Featuresimg5"
import { Featuresimg6 } from "@/shared/ui/Icons/FeaturesImg/Featuresimg6"
import { Featuresimg7 } from "@/shared/ui/Icons/FeaturesImg/Featuresimg7"
import { Featuresimg8 } from "@/shared/ui/Icons/FeaturesImg/Featuresimg8"
import { Featuresimg9 } from "@/shared/ui/Icons/FeaturesImg/Featuresimg9"

export const Features = () => {
  const ftrsObject = [
    {
        img: <Featuresimg1/>,
        title: 'Treadmills'
    },
    {
        img: <Featuresimg2 />,
        title: 'Balcony'
    },{
        img: <Featuresimg3 />,
        title: 'Green spaces'
    },{
        img: <Featuresimg4 />,
        title: 'Children playground'
    },{
        img: <Featuresimg5 />,
        title: 'Tennis court'
    },{
        img: <Featuresimg6/>,
        title: 'Fitness center and gym'
    },{
        img: <Featuresimg7/>,
        title: 'Parking space'
    },{
        img: <Featuresimg8 />,
        title: 'Boutiques and shops'
    },{
        img: <Featuresimg9/>,
        title: 'Pool'
    },{
        img:<Featuresimg10/>,
        title: 'BBQ area'
    },{
        img: <Featuresimg11/>,
        title: 'Security '
    },{
        img: <Featuresimg12/>,
        title: 'Sports grounds'
    }
  ]
  return (
    <Section title="Features & amenities">
      <div className={style.features}>
        <div className={style.featuresSection}>
          {ftrsObject.map((features) => 
            <div className={style.FeaturesBlocks}>
              {features.img}
              <p>{features.title}</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
