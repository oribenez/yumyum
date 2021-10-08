import classes from './Input.module.css';

const Input = (props) => {
	let content;
	switch (props.type) {
		case 'text':
		case 'email':
			content = (
				<div className={classes['form__group']}>
					<input
						type={props.type}
						id={props.id}
						className={classes['form__field']}
						placeholder={props.placeholder}
						style={props.inputStyle}
					/>
					<label htmlFor={props.id} className={classes['form__label']}>
						{props.placeholder} {props.required && ' *'}
					</label>
				</div>
			);
			break;

		default:
			break;
	}
	if (props.type === 'email') {
	}
	return content;
	// <div className={classes.input}>
	// 	<label htmlFor={props.input.id}>{props.label}</label>
	// 	<input {...props.input} />
	// </div>
};
export default Input;
