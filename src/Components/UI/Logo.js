import classes from './Logo.module.css';
import iconLogo from '../../assets/logo3.svg';

const Logo = (props) => {
	return (
		<div className={`${classes.logoWrap} ${props.className}`}>
			<img src={iconLogo} className={classes.imgLogo} alt="Cookie" />
			{props.title && <h1 className={classes.txtLogo}>{props.title}</h1>}
		</div>
	);
};

export default Logo;
