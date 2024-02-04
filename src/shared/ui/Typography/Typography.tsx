import clsx from 'clsx'
import { FC, createElement } from 'react'
import styles from './Typography.module.scss'
import { ITags, TypographyProps } from './types/Typography.types'

export const Typography: FC<TypographyProps> = props => {
	const { variant, weight = 'regular', children, className, color = '' } = props

	const Tags = {
		'H1': 'h1',
		'H2': 'h2',
		'H3': 'h3',
		'Button': 'p',
		'Body': 'p',
	}

	const classNamedGenerated = clsx(
		styles[variant],
		styles[weight],
		styles[color],
		className
	)

	return createElement(
		Tags[variant as keyof ITags],
		{ className: classNamedGenerated },
		children
	)
}
