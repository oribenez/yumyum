import classes from './shop.module.css';
import Products from '../Components/Products/Products';

const shop = () => {
	return (
		<>
			<Products className={classes.products} />
		</>
	);
};
export default shop;
