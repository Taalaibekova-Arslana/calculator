import { useDispatch } from "react-redux";
import {
	minusCalculator,
	plusCalculator,
} from "../assets/redux/tools/colSlice";
import { FC, useState } from "react";
import { useAppSelector } from "../assets/redux/store";

const Calculator: FC = () => {
	const calculator = useAppSelector((state: unknown) => state.dataReducer);
	const dispatch = useDispatch();
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);

	const handleMinusCal = () => {
		dispatch(minusCalculator());
	};

	const handlePlusCalculator = () => {
		dispatch(plusCalculator());
	};

	console.log(calculator);

	return (
		<div>
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
			<button onClick={handleMinusCal}>-</button>
			<span>{calculator}</span>
			<button onClick={handlePlusCalculator}>+</button>
		</div>
	);
};

export default Calculator;
