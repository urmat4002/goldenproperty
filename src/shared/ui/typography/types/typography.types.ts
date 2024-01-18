import { ReactNode } from 'react';

export type TypographyVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'label'
  | 'caption';

export type ColorVariants = 'black' | 'white';

export interface TypographyProps {
  children: ReactNode;
  variant: TypographyVariants;
  className?: string;
  weight: 'bold' | 'regular';
  color?: ColorVariants;
}

export enum Tags {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  label = 'p',
  caption = 'span',
}
