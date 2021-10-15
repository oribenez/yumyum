import classes from './Input.module.css';

const Input = (props) => {
	const errorStyle = props.hasError ? classes.errorStyle : '';

	let content;
	switch (props.type) {
		case '':
		case 'text':
		case 'email':
		case 'password':
		case 'tel':
			content = (
				<div className={`${classes.formWrap} ${errorStyle}`}>
					<div className={classes.imginputWrap}>
						{props.imgUrl && (
							<label htmlFor={props.id}>
								<img src={props.imgUrl} alt="" />
							</label>
						)}

						<div className={classes['form__group']}>
							<input
								type={props.type || 'text'}
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
						</div>
					</div>
					{props.assistiveText && (
						<span
							className={classes.assistiveText}
							style={props.imgUrl && { marginLeft: '30px' }}
						>
							{props.assistiveText}
						</span>
					)}
				</div>
			);
			break;

		default:
			break;
	}
	return content;
};
export default Input;
