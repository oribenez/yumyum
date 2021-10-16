import { Link } from 'react-router-dom';
import classes from './ButtonIcon.module.css';

const ButtonIcon = (props) => {
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
export default ButtonIcon;
