import classes from './Input.module.css';

const ERROR_STYLE = 'error';

const Input = (props) => {
	const errorStyle = props.hasError ? classes.errorStyle : '';

	let content;
	switch (props.type) {
		case 'text':
		case 'email':
		case 'tel':
			content = (
				<div className={`${classes.formWrap} ${errorStyle}`}>
					<div className={`${classes['form__group']}`}>
						<input
							type={props.type}
							id={props.id}
							className={classes['form__field']}
							placeholder={props.placeholder}
							style={props.inputStyle}
							value={props.value}
							onChange={props.onChange}
							onBlur={props.onBlur}
						/>
						<label htmlFor={props.id} className={classes['form__label']}>
							{props.placeholder} {props.required && ' *'}
						</label>
						<img src="" alt="" />
					</div>
					<span className={classes.assistiveText}>{props.assistiveText}</span>
				</div>
			);
			break;

		default:
			break;
	}
	return content;
};
export default Input;
