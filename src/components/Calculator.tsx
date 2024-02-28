import { useDispatch } from "react-redux";
import {
	minusCalculator,
	mulCalculator,
	plusCalculator,
} from "../redux/tools/calculatorSlice";
import { useState } from "react";
import { useAppSelector } from "../redux/store";
import scss from "./Calculator.module.scss";

const Calculator = () => {
	const calculatorResult = useAppSelector(
		(state) => state.dataReducer.calculators
	);
	const dispatch = useDispatch();
	const [number1, setNumber1] = useState<number>(0);
	const [number2, setNumber2] = useState<number>(0);

	const handleCalculatorPlus = () => {
		dispatch(plusCalculator({ numbers: number1 + number2 }));
		setNumber1(0);
		setNumber2(0);
	};

	const handleCalculatorMinus = () => {
		dispatch(minusCalculator({ numbers: number1 - number2 }));
		setNumber1(0);
		setNumber2(0);
	};
	const handleCalculatorMul = () => {
		dispatch(mulCalculator({ numbers: number1 * number2 }));
		setNumber1(0);
		setNumber2(0);
	};
	const handleCalculatorDivi = () => {
		dispatch(mulCalculator({ numbers: number1 / number2 }));
		setNumber1(0);
		setNumber2(0);
	};

	console.log(calculatorResult);

	return (
		<div className={scss.calculatorContainer}>
			<div className={scss.inputContainer}>
				<input
					type="text"
					value={number1}
					onChange={(e) => setNumber1(+e.target.value)}
				/>
				<input
					type="text"
					value={number2}
					onChange={(e) => setNumber2(+e.target.value)}
				/>
			</div>
			<div className={scss.buttonContainer}>
				<button onClick={handleCalculatorPlus}>+</button>
				<button onClick={handleCalculatorMinus}>-</button>
				<button onClick={handleCalculatorMul}>*</button>
				<button onClick={handleCalculatorDivi}>/</button>
			</div>
			<h1 className={scss.result}>Result: {+calculatorResult}</h1>
		</div>
	);
};

export default Calculator;
