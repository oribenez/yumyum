import shoppingBag from '../../assets/cart-icon.svg';
import classes from './ShoppingCartButton.module.css';
import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const ShoppingCartButton = (props) => {
	return (
		<div className={props.className}>
			<IconButton aria-label="cart" className={classes.button}>
				<Badge badgeContent={4} color="secondary">
					<ShoppingCartIcon className={classes.ShoppingCartIcon} />
				</Badge>
			</IconButton>
		</div>
	);
};

export default ShoppingCartButton;
