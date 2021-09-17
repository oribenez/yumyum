import classes from './AvailableProducts.module.css';
import ProductItem from './ProductItem';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Chocolate Chip Cookie',
		description: 'Finest fish and veggies',
		imgUrl:
			'https://media.istockphoto.com/photos/chocolate-chip-cookie-isolated-picture-id517109442?k=20&m=517109442&s=612x612&w=0&h=Fe3NT8oPm31-00MtJOZv9cfgC3jyc9ix32CzWrqpu5Y=',
		price: 22.99,
	},
	{
		id: 'm2',
		name: 'Monster Cookie',
		description: 'A german specialty!',
		imgUrl:
			'https://www.inkatrinaskitchen.com/wp-content/uploads/2011/04/Cookie-Monster-Cookies.jpg',
		price: 16.5,
	},
	{
		id: 'm3',
		name: 'Kid`s Butter Cookie',
		description: 'American, raw, meaty',
		imgUrl:
			'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2021_kid%E2%80%99s-favorite-butter-cookie_ice-cream-sandwich_18781_600x600.jpg?ext=.jpg',
		price: 12.99,
	},
	{
		id: 'm4',
		name: 'Granola Cookie',
		description: 'Healthy...and green...',
		imgUrl:
			'https://minimalistbaker.com/wp-content/uploads/2021/03/Granola-Cookies-SQUARE.jpg',
		price: 18.99,
	},
	{
		id: 'm1',
		name: 'Chocolate Chip Cookie',
		description: 'Finest fish and veggies',
		imgUrl:
			'https://media.istockphoto.com/photos/chocolate-chip-cookie-isolated-picture-id517109442?k=20&m=517109442&s=612x612&w=0&h=Fe3NT8oPm31-00MtJOZv9cfgC3jyc9ix32CzWrqpu5Y=',
		price: 22.99,
	},
	{
		id: 'm2',
		name: 'Monster Cookie',
		description: 'A german specialty!',
		imgUrl:
			'https://www.inkatrinaskitchen.com/wp-content/uploads/2011/04/Cookie-Monster-Cookies.jpg',
		price: 16.5,
	},
	{
		id: 'm3',
		name: 'Kid`s Butter Cookie',
		description: 'American, raw, meaty',
		imgUrl:
			'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2021_kid%E2%80%99s-favorite-butter-cookie_ice-cream-sandwich_18781_600x600.jpg?ext=.jpg',
		price: 12.99,
	},
	{
		id: 'm4',
		name: 'Granola Cookie',
		description: 'Healthy...and green...',
		imgUrl:
			'https://minimalistbaker.com/wp-content/uploads/2021/03/Granola-Cookies-SQUARE.jpg',
		price: 18.99,
	},
];

const AvailableProducts = (props) => {
	const productsList = DUMMY_MEALS.map((product) => (
		<ProductItem
			{...product}
			id={product.id}
			key={product.id}
			name={product.name}
			description={product.description}
			price={product.price}
			type={props.type}
		/>
	));
	return (
		<section className={classes.productsList}>
			<ul className={classes[props.type]}>{productsList}</ul>
		</section>
	);
};
export default AvailableProducts;
