import classes from './Logo.module.css';
import iconLogo from '../../assets/cookie-svgrepo-com.svg';

const Logo = (props) => {
	return (
		<div className={`${classes.logoWrap} ${props.className}`}>
			<img src={iconLogo} className={classes.imgLogo} alt="Cookie" />
			<h1 className={classes.txtLogo}>cookie</h1>
		</div>
	);
};

export default Logo;
