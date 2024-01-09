import { FC, useState } from 'react'
import { 
	setLanguage, 
	LanguageCount 
} from '../../app/lib/features/language/language-slice'
import { useAppDispatch, useAppSelector } from '../../app/lib/store/hooks'
import { ChevronDown, ChevronUp } from 'lucide-react'
import style from './lang-select.module.scss'
import { LanguageOptions } from './types/lang-select.types'

export const LangSelect: FC = () => {
	const [ open, setOpen ] = useState<boolean>(false)
	const [ options ] = useState<LanguageOptions[]>([
		{id: 1, lang: LanguageCount.EN},
		{id: 2, lang: LanguageCount.RU},
		{id: 3, lang: LanguageCount.AR},
		{id: 4, lang: LanguageCount.TR},
	])
	const dispatch = useAppDispatch();
	const currentLanguage = useAppSelector(state => state.languageSlice.currentState)

	const handleLanguageChange = (newLang: LanguageCount) => {
		dispatch(setLanguage(newLang))
	}

	const selectClass = open
    ? style['select--open'] : style['select--close']


	const handleIsOpen = (state: boolean) => {
		if (state === true) setOpen(false)
		if (state === false) setOpen(true)
	}

	return (
		<div className={style['lang-select']}>
			<div 
				className={style['lang-select__label']}
				onClick={() => handleIsOpen(open)}
			>
				<p>{currentLanguage}</p>
				{!open ? <ChevronDown /> : <ChevronUp />}
			</div>
			<div className={`${style['lang-select__list']} ${selectClass}`}>
				{options.map(option => {
					return (
						<span 
							className={style['lang-select__option']}
							key={option.id} 
							onClick={() => (
								handleLanguageChange(option.lang),
								setOpen(false)
							)}>
							{option.lang}
						</span>
					)
				})}
			</div>
		</div>
	)
}