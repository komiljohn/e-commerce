import { useState } from "react";

const useBooleanState = (initialState = false) => {
	const [state, setState] = useState(initialState);

	const turnOn = () => {
		setState(true);
	};

	const turnOff = () => {
		setState(false);
	};

	return [state, turnOn, turnOff];
};

export default useBooleanState;
