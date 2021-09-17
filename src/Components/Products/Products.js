import classes from './Products.module.css';
import ProductsSummary from './ProductsSummary';
import AvailableProducts from './AvailableProducts';
import Card from '../UI/Card';
import Button from '../UI/Button';

const Products = (props) => {
	return (
		<section className={classes.foodMenuWrap + ' ' + props.className}>
			<ProductsSummary />

			<AvailableProducts type="cards" />
		</section>
	);
};

export default Products;
