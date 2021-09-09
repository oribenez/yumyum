import { useContext } from 'react';
import classes from './Header.module.css';
import Navbar from '../Navbar';
import ShoppingCartButton from './ShoppingCartButton';
import IconHamburger from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import CartContext from '../../store/cart-context';

const Header = (props) => {
	const ctxCart = useContext(CartContext);

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
						<ShoppingCartButton
							className={classes.ShoppingCartWrap}
							numItems={ctxCart.totalAmount}
							onClick={ctxCart.show.onShowModal}
						/>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
