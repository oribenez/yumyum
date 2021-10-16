import classes from './ShoppingCartButton.module.css';
import { IconButton, Badge } from '@material-ui/core';
import Button from '../UI/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ReactComponent as IconBag } from '../../assets/cart_icon.svg' 

const ShoppingCartButton = (props) => {
	return (
		// <IconButton
		// 	aria-label="cart"
		// 	className={classes.button + ' ' + props.className}
		// 	onClick={props.onClick}
		// >
			<Button className={classes.button + " " + classes[props.className]}
			onClick={props.onClick}>
			<Badge badgeContent={props.numItems} color="secondary" style={{height:'100%'}}>
				<IconBag className={classes.ShoppingCartIcon} />
				{/* <ShoppingCartIcon className={classes.ShoppingCartIcon} /> */}
			</Badge>
			</Button>
		// </IconButton>
	);
};

export default ShoppingCartButton;
