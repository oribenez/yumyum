import classes from './AvailableProducts.module.css';
import ProductItem from './ProductItem';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Chocolate Chip Cookie',
		description: 'Finest fish and veggies',
		price: 22.99,
	},
	{
		id: 'm2',
		name: 'Rainstorm Cookie',
		description: 'A german specialty!',
		price: 16.5,
	},
	{
		id: 'm3',
		name: 'Giant Cookie',
		description: 'American, raw, meaty',
		price: 12.99,
	},
	{
		id: 'm4',
		name: 'Sweetheart Cookie',
		description: 'Healthy...and green...',
		price: 18.99,
	},
];

const AvailableProducts = () => {
	const productsList = DUMMY_MEALS.map((product) => (
		<ProductItem
			id={product.id}
			key={product.id}
			name={product.name}
			description={product.description}
			price={product.price}
		/>
	));
	return (
		<section className={classes.productsList}>
			<ul>{productsList}</ul>
		</section>
	);
};
export default AvailableProducts;
