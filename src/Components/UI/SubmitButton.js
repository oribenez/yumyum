import classes from './SubmitButton.module.css';
const SubmitButton = (props) => {
	const inverseStyle = props.inverse? classes.inverse : "";
	return (
		<input
			type="submit"
			className={`${classes.button} ${inverseStyle} ${props.className || ''}`}
			onSubmit={props.onSubmit}
			disabled={props.disabled}
			value={props.value}
		/>
	);
};
export default SubmitButton;
