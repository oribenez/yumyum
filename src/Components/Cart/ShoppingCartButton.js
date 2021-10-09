import classes from './ShoppingCartButton.module.css';
import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const ShoppingCartButton = (props) => {
	return (
		<IconButton
			aria-label="cart"
			className={classes.button + ' ' + props.className}
			onClick={props.onClick}
		>
			<Badge badgeContent={props.numItems} color="secondary">
				<ShoppingCartIcon className={classes.ShoppingCartIcon} />
			</Badge>
		</IconButton>
	);
};

export default ShoppingCartButton;
