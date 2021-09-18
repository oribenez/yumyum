import classes from './CartItem.module.css';
import BtnPlusMinusNum from '../UI/BtnPlusMinusNum';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const CartItem = (props) => {
	const ctxCart = useContext(CartContext);

	const onChangeItemAmount = (itemAmount) => {
		const currItem = { ...props.item, productAmount: itemAmount };
		ctxCart.changeItemAmount(currItem);
	};

	//check if this product is already listed in shopping cart
	let productAmount = 0;
	for (const item of ctxCart.items) {
		if (props.productId === item.productId) {
			productAmount = item.productAmount;
		}
	}

	return (
		<li className={classes.cartItemWrap + ' ' + classes.className}>
			<div className={classes.productImgWrap}>
				<img src={props.productImgUrl} className={classes.productImg} />
			</div>
			<div className={classes.info}>
				<div className={classes.productName}>{props.productName}</div>
				<div className={classes.productVariant}>{props.productVariant}</div>
				<div className={classes.amount}>
					<BtnPlusMinusNum
						value={productAmount}
						minVal="0"
						maxVal="100"
						onChange={onChangeItemAmount}
					/>
				</div>
			</div>

			<div className={classes.productPrice}>${props.productPrice}</div>
		</li>
	);
};
export default CartItem;
