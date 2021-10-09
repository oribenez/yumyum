import classes from './btnRadio.module.css';

const btnRadio = (props) => {
	return (
		<div>
			<input
				type="radio"
				name={props.name}
				id={props.id}
				defaultChecked={props.defaultChecked}
				value={props.value}
			/>
			<label htmlFor={props.id}>{props.label}</label>
		</div>
	);
};

export default btnRadio;
