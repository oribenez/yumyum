import classes from './Navbar.module.css';

const Navbar = (props) => {
	return (
		<nav className={`${classes.nav} ${props.className}`}>
			<span className={classes.navbarItem}>MENU</span>
			<span className={classes.navbarItem}>ABOUT</span>
		</nav>
	);
};

export default Navbar;
