import { Link } from 'react-router-dom';
import classes from './Button.module.css';

const Button = (props) => {
	let btnJSX = (
		<button
			className={classes.button + ' ' + props.className}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);

	btnJSX = props.to ? (
		<Link to={props.to} className={classes.link}>
			{btnJSX}
		</Link>
	) : (
		btnJSX
	);

	return btnJSX;
};
export default Button;
