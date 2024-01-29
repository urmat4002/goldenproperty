import { ReactNode } from 'react'

export type TypographyVariants =
	| 'Large'
	| 'SubLarge'
	| 'Title1'
	| 'Title2'
	| 'Title3'
	| 'Headline'
	| 'Body'
	| 'Callout'
	| 'Subhead'
	| 'Footnote'
	| 'Caption1'
	| 'Caption2'

export type ColorVariants = 'black' | 'white'

export interface TypographyProps {
	children: ReactNode
	variant: TypographyVariants
	className?: string
	weight: 'bold' | 'semibold' | 'medium' | 'regular'
	color?: ColorVariants
}

export interface ITags {
	Large: string
	SubLarge: string
	Title1: string
	Title2: string
	Title3: string
	Headline: string
	Body: string
	Callout: string
	Subhead: string
	Footnote: string
	Caption1: string
	Caption2: string
}

export const Tags: ITags = {
	Large: 'h1',
	SubLarge: 'h2',
	Title1: 'h3',
	Title2: 'h4',
	Title3: 'h5',
	Headline: 'p',
	Body: 'p',
	Callout: 'p',
	Subhead: 'p',
	Footnote: 'p',
	Caption1: 'span',
	Caption2: 'span',
}
