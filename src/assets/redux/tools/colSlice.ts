import { createSlice } from "@reduxjs/toolkit";

interface dataTypeSlice {
	id: number;
}

const initialState: { data: dataTypeSlice[] } = {
	data: [],
};

const calculatorSlice = createSlice({
	name: "calculatorSlice",
	initialState,
	reducers: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		minusCalculator: (state: any) => {
			state.data -= 1;
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		plusCalculator: (state: any) => {
			state.data += 1;
		},
		addCalculator: () => {
			(state, action) => state + action.payload;
		},
	},
});

export const { minusCalculator, plusCalculator } = calculatorSlice.actions;
export const dataReducer = calculatorSlice.reducer;
