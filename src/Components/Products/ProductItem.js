import classes from './ProductItem.module.css';
import cardsStyle from './ProductItemCards.module.css';
import ProductItemForm from './ProductItemForm';

const ProductItem = (props) => {
	const price = `$${props.price.toFixed(2)}`;

	let productItem = '';
	if (!props.type || props.type === 'list') {
		productItem = (
			<li className={classes.product}>
				<div>
					<h3>{props.name}</h3>
					<div className={classes.description}>{props.description}</div>
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
					<img src={props.imgUrl} />
				</div>

				<div className={cardsStyle.textWrap}>
					<h3>{props.name}</h3>
					<div className={cardsStyle.price}>{price}</div>
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
