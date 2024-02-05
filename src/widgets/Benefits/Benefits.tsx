import { BenefitsImg1 } from '@/shared/ui/Icons/BenefitsImg1'
import style from './Benefits.module.scss'
import { Section } from '@/features'
import { Typography } from '@/shared/ui'
import { BenefitsImg2 } from '@/shared/ui/Icons/BenefitsImg2'
import { BenefitsImg4 } from '@/shared/ui/Icons/BenefitsImg4'
import { BenefitsImg3 } from '@/shared/ui/Icons/BenefitsImg3'

export const Benefits = () => {
	return (
		<Section title='Benefits of Golden House'>
			<div className={style.benefits}>
				<div className={style.benefitsContainer}>
					<div className={style.benefitsItem}>
						<BenefitsImg1 />
						<Typography variant='h3' color='white' weight='medium'>
							A wide selection
						</Typography>
					</div>
					<div className={style.benefitsItem}>
						<BenefitsImg2 />
						<Typography variant='h3' color='white' weight='medium'>
							Confidentiality
						</Typography>
					</div>
					<div className={style.benefitsItem}>
						<BenefitsImg3 />
						<Typography variant='h3' color='white' weight='medium'>
							Exclusive offers
						</Typography>
					</div>
					<div className={style.benefitsItem}>
						<BenefitsImg4 />
						<Typography variant='h3' color='white' weight='medium'>
							Feedback
						</Typography>
					</div>
				</div>
			</div>
		</Section>
	)
}
