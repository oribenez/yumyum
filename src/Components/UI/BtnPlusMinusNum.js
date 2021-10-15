import classes from './BtnPlusMinusNum.module.css';

const BtnPlusMinusNum = (props) => {
	const onMinusHandler = (e) => {
		if (+e.target.form[1].value.trim() >= 1)
			e.target.form[1].value = +e.target.form[1].value - 1;

		const num = e.target.form[1].value;
		props.onChange(num);
	};
	const onPlusHandler = (e) => {
		e.target.form[1].value = +e.target.form[1].value + 1;

		const num = e.target.form[1].value;
		props.onChange(num);
	};
	const numberValidity = (e) => {
		if (e.target.value.trim() === '') e.target.value = 0;
		else if (+e.target.value.trim() <= 0) e.target.value = 0; // it's best to instead call the remove function

		const num = e.target.form[1].value;
		props.onChange(num);
	};

	return (
		<form
			className={classes.wrap}
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<button className={classes.minus} onClick={onMinusHandler}>
				-
			</button>
			<input
				type="number"
				step={1}
				value={props.value}
				className={classes.number}
				min={props.minVal}
				max={props.maxVal}
				onChange={numberValidity}
			/>
			<button className={classes.plus} onClick={onPlusHandler}>
				+
			</button>
		</form>
	);
};
export default BtnPlusMinusNum;
