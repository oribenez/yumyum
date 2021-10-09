import classes from './HeaderBar.module.css';
import { useContext } from 'react';
import Navbar from '../../../UI/Navbar';
import ShoppingCartButton from '../../../Cart/ShoppingCartButton';
import Logo from '../../../UI/Logo';
import CartContext from '../../../../store/cart-context';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
	const ctxCart = useContext(CartContext);

	return (
		<>
			<div className={classes.headerBar}>
				<div className={classes.leftWrap}>
					<Link to="/">
						<Logo className={classes.bigLogo} />
					</Link>
				</div>
				<div className={classes.centerWrap}>
					<Navbar />
				</div>
				<div className={classes.rightWrap}>
					<ShoppingCartButton
						className={classes.ShoppingCartWrap}
						numItems={ctxCart.items.length}
						onClick={ctxCart.show.onShowModal}
					/>
				</div>
			</div>
			<div className={classes.spacer}></div>
		</>
	);
};
export default HeaderBar;
