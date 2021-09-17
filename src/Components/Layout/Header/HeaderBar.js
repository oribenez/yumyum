import classes from './HeaderBar.module.css';
import { useContext } from 'react';
import Navbar from '../../UI/Navbar';
import ShoppingCartButton from '../ShoppingCartButton';
import Logo from '../Logo';
import CartContext from '../../../store/cart-context';

const HeaderBar = () => {
	const ctxCart = useContext(CartContext);

	return (
		<>
			<div className={classes.headerBar}>
				<div className={classes.leftWrap}>
					<Logo className={classes.bigLogo} />
				</div>
				<div className={classes.centerWrap}>
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
			<div className={classes.spacer}></div>
		</>
	);
};
export default HeaderBar;
