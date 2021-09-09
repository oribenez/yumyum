import classes from './CartItem.module.css';
import BtnPlusMinusNum from '../UI/BtnPlusMinusNum';

const CartItem = (props) => {
	return (
		<li className={classes.className}>
			<div className={classes.productImgWrap}>
				<img src={props.productImg} className={classes.productImg} />
			</div>
			<div className={classes.info}>
				<div className={classes.productName}>{props.productName}</div>
				<div className={classes.productVariant}>{props.productVariant}</div>
				<div className={classes.amount}>
					<BtnPlusMinusNum
						defaultAmount={props.productAmount}
						minVal="0"
						maxVal="100"
					/>
				</div>
			</div>

			<div className={classes.productPrice}>${props.productPrice}</div>
		</li>
	);
};
export default CartItem;
