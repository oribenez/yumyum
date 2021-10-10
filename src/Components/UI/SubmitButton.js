import classes from './SubmitButton.module.css';
const SubmitButton = (props) => {
	return (
		<input
			type="submit"
			className={classes.button + ' ' + props.className}
			onSubmit={props.onSubmit}
			disabled={props.disabled}
			value={props.value}
		/>
	);
};
export default SubmitButton;
