import { useContext } from 'react';
import classes from './ProductItem.module.css';
import cardsStyle from './ProductItemCards.module.css';
import ProductItemForm from './ProductItemForm';
import BtnPlusMinusNum from '../UI/BtnPlusMinusNum';
import CartContext from '../../store/cart-context';

const ProductItem = (props) => {
	const ctxCart = useContext(CartContext);

	const onChangeItemAmount = (itemAmount) => {
		const currItem = { ...props.item, productAmount: itemAmount };
		ctxCart.changeItemAmount(currItem);
	};

	const price = `$${props.productPrice.toFixed(2)}`;

	//check if this product is already listed in shopping cart
	let productAmount = 0;
	for (const item of ctxCart.items) {
		if (props.productId === item.productId) {
			productAmount = item.productAmount;
		}
	}

	let productItem = '';
	if (!props.type || props.type === 'list') {
		productItem = (
			<li className={classes.product}>
				<div>
					<h3>{props.productName}</h3>
					<div className={classes.description}>{props.productDescription}</div>
					<div className={classes.price}>{price}</div>
				</div>
				<div>
					<ProductItemForm id={props.id} />
				</div>
			</li>
		);
	} else if (props.type === 'cards') {
		productItem = (
			<li className={cardsStyle.product}>
				<div className={cardsStyle.imgWrap}>
					<img src={props.productImgUrl} />
				</div>

				<div className={cardsStyle.textWrap}>
					<h3>{props.productName}</h3>
					<div className={cardsStyle.actions}>
						<div className={cardsStyle.price}>{price}</div>
						<div className={cardsStyle.addToCart}>
							<BtnPlusMinusNum
								value={productAmount}
								minVal="0"
								maxVal="100"
								onChange={onChangeItemAmount}
							/>
						</div>
					</div>
				</div>
				{/* <div>
					<ProductItemForm id={props.id} />
				</div> */}
			</li>
		);
	}

	return productItem;
};
export default ProductItem;
