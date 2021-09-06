import classes from './Products.module.css';
import { CardActions, CardContent, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductsSummary from './ProductsSummary';
import AvailableProducts from './AvailableProducts';
import Card from '../UI/Card';
import Button from '../UI/Button';

const useStyles = makeStyles({
	root: {
		minWidth: 600,
	},
	title: {
		fontSize: 14,
	},
});

const Products = () => {
	const classesMui = useStyles();

	return (
		<section className={classes.FoodMenuWrap}>
			<ProductsSummary />

			<Card>
				<AvailableProducts />
				<Button>add to cart</Button>
			</Card>
			{/* 
			<Card className={classesMui.root}>
				<CardHeader title="MENU"></CardHeader>
				<CardContent>
					<AvailableProducts />
				</CardContent>
				<CardActions>
					<Button size="small">Add to Cart</Button>
				</CardActions>
			</Card> */}
		</section>
	);
};

export default Products;
