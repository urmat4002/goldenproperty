import { ReactNode } from 'react'

export type TypographyVariants =
	| 'H1'
	| 'H2'
	| 'H3'
	| 'Button'
	| 'Body'

export interface ITags {
	H1: string;
	H2: string;
	H3: string;
	Button: string;
	Body: string;
}

export type ColorVariants = 'black' | 'white' | 'gold'

export interface TypographyProps {
	children: ReactNode
	variant: TypographyVariants
	className?: string
	weight?: 'bold' | 'semibold' | 'medium' | 'regular'
	color?: ColorVariants
}