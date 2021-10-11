import { useState } from 'react';
import { validate } from '../util/validators';

const useInput = (validators) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	const [valueIsValid, assistiveText] = validate(enteredValue, validators);
	const hasError = !valueIsValid && isTouched;

	const valueChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};

	const inputBlurHandler = (event) => {
		setIsTouched(true);
	};

	const reset = () => {
		setEnteredValue('');
		setIsTouched(false);
	};

	return {
		value: enteredValue,
		isValid: valueIsValid,
		assistiveText,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};

export default useInput;
