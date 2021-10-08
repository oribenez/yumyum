import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<nav className={`${classes.nav} ${props.className}`}>
			<span className={classes.navbarItem}>
				<NavLink activeClassName={classes.active} to="/" exact>
					Story
				</NavLink>
			</span>
			<span className={classes.navbarItem}>
				<NavLink activeClassName={classes.active} to="/shop">
					Cookie Shop
				</NavLink>
			</span>
			<span className={classes.navbarItem}>
				<NavLink activeClassName={classes.active} to="/contact">
					Contact Us
				</NavLink>
			</span>
		</nav>
	);
};

export default Navbar;
