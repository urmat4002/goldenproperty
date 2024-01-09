import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum LanguageCount {
	EN = 'EN',
	RU = 'RU',
	AR = 'AR',
	TR = 'TR'
}

interface LanguageState {
	currentState: LanguageCount;
}

const initialState: LanguageState = {
	currentState: LanguageCount.EN,
}

const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		setLanguage: (state, action: PayloadAction<LanguageCount>) => {
			state.currentState = action.payload;
		}
	}
})

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;