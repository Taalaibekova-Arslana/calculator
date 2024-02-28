import { createSlice } from "@reduxjs/toolkit";

interface Calculator {
	id: number;
	number1: number | string;
	number2: number | string;
}

interface CalculatorState {	
	calculators: Calculator[];
}

const initialState: CalculatorState = {
	calculators: [],
};

const calculatorSlice = createSlice({
	name: "calculatorSlice",
	initialState,
	reducers: {
		plusCalculator: (state, action) => {
			state.calculators = action.payload.numbers;
		},
		minusCalculator: (state, action) => {
			state.calculators = action.payload.numbers;
		},
		mulCalculator: (state, action) => {
			state.calculators = action.payload.numbers;
		},
	},
});

export const { plusCalculator, minusCalculator, mulCalculator } =
	calculatorSlice.actions;
export const dataReducer = calculatorSlice.reducer;
