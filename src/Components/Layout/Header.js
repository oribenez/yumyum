import classes from './Header.module.css';
import Navbar from '../Navbar';
import ShoppingCartButton from './ShoppingCartButton';
import IconHamburger from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import Logo from './Logo';

const Header = (props) => {
	return (
		<>
			<header className={classes.headerWrap}>
				<div className={classes.headerBar}>
					<div className={classes.leftWrap}>
						<IconButton>
							<IconHamburger />
						</IconButton>

						<Navbar />
					</div>
					<div className={classes.rightWrap}>
						<ShoppingCartButton className={classes.ShoppingCartWrap} />
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
