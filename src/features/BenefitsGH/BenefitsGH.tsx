import style from './BenefitsGH.module.scss'
import { BenefitsImg1 } from '../../shared/ui/Icons/BenefitsImg1'
import { BenefitsImg2 } from '../../shared/ui/Icons/BenefitsImg2'
import { BenefitsImg3 } from '../../shared/ui/Icons/BenefitsImg3'
import { BenefitsImg4 } from '../../shared/ui/Icons/BenefitsImg4'


export const BenefitsGH = () => {

  return (
    <div className={style.Benefits}>
      <div className={style.Benefits__content}>
        <h1>Benefits of Golden house</h1>
      </div>
      <div className={style.Benefits__blocks}>
        <div className={style.Benefits__block}>
          <BenefitsImg1 />
          <p>A wide selection</p>
        </div>
        <div className={style.Benefits__block}>
          <BenefitsImg2 />
          <p>Сonfidentiality</p>
        </div>
        <div className={style.Benefits__block}>
          <BenefitsImg3 />
          <p>Exclusive offers</p>
        </div>
        <div className={style.Benefits__block}>
          <BenefitsImg4 />
          <p>Feedback</p>
        </div>
      </div>
    </div>
    )
}