import classes from './Badge.module.css';

const Badge = () => {
	return (
		<span className={classes.badgeWrap}>
			{props.children}
			{props.text}
		</span>
	);
};
export default Badge;
