import React, { useState } from 'react';
import classes from './BtnPlusMinusNum.module.css';

const BtnPlusMinusNum = (props) => {
	const onMinusHandler = (e) => {
		if (+e.target.form[1].value.trim() > 1)
			e.target.form[1].value = +e.target.form[1].value - 1;
	};
	const onPlusHandler = (e) => {
		e.target.form[1].value = +e.target.form[1].value + 1;
	};
	const numberValidity = (e) => {
		if (e.target.value.trim() === '') e.target.value = 1;
		else if (+e.target.value.trim() <= 0) e.target.value = 1; // it's best to instead call the remove function
	};

	return (
		<div>
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
					defaultValue={props.defaultAmount}
					className={classes.number}
					min={props.minVal}
					max={props.maxVal}
					onChange={numberValidity}
				/>
				<button className={classes.plus} onClick={onPlusHandler}>
					+
				</button>
			</form>
		</div>
	);
};
export default BtnPlusMinusNum;
