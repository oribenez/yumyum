import { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
	const ctxCart = useContext(CartContext);

	return (
		<Modal>
			<div className={classes.header}>
				<h1>Your Cart</h1>
			</div>
			<ul className={classes['cart-items']}>
				{ctxCart.items.map((item) => (
					<CartItem key={item.id} {...item} />
				))}
			</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>${ctxCart.totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes.button}>Go to Checkout</button>
			</div>
		</Modal>
	);
};
export default Cart;
