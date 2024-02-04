import clsx from 'clsx'
import styles from './Section.module.scss'
import { Typography } from '@/shared/ui'
import { SectionProps } from './types/Section.types'

export const Section: React.FC<SectionProps> = ({
	title,
	container = false,
	showTitle = true,
	color = 'white',
	customClassName,
	children,
}: SectionProps) => {
	const classNamedGenerated = clsx(
		container ? styles.sectionContainer : styles.sectionDefault,
		customClassName
	)

	return (
		<section className={styles.section}>
			<div className={classNamedGenerated}>
				{showTitle && title && (
					<Typography
						variant='H2'
						weight='bold'
						color={color === 'gold' ? 'gold' : 'white'}
					>
						{title}
					</Typography>
				)}
				<div className={styles.sectionContent}>{children}</div>
			</div>
		</section>
	)
}
