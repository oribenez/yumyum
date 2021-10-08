import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Cart.module.css';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import Button from '../UI/Button';

const Cart = (props) => {
	const ctxCart = useContext(CartContext);
	const price = `$${ctxCart.moneySubtotal.toFixed(2)}`;

	const isCartEmpty = ctxCart.items.length === 0 ? true : false;

	return (
		<Modal>
			<div className={classes.header}>
				<h1>Your Cart</h1>
			</div>
			<div className={classes['cart-container']}>
				{isCartEmpty && (
					<p className={classes['cart-empty']}>Your cart is empty.</p>
				)}
				{!isCartEmpty && (
					<>
						<ul className={classes['cart-items']}>
							{ctxCart.items.map((item) => (
								<CartItem key={item.productId} item={item} {...item} />
							))}
						</ul>
						<div className={classes.total}>
							<span>Total Amount</span>
							<span>{price}</span>
						</div>
						<div className={classes.actions}>
							<NavLink to="/checkout" style={{ textDecoration: 'none' }}>
								<Button onClick={ctxCart.show.onHideModal}>
									Go to Checkout
								</Button>
							</NavLink>
						</div>
					</>
				)}
			</div>
		</Modal>
	);
};
export default Cart;
