import classes from './AvailableProducts.module.css';
import ProductItem from './ProductItem';

const DUMMY_PRODUCTS = [
	{
		productId: 'c1',
		productName: 'Chocolate Chip Cookie',
		productDescription: 'Finest fish and veggies',
		productImgUrl:
			'https://media.istockphoto.com/photos/chocolate-chip-cookie-isolated-picture-id517109442?k=20&m=517109442&s=612x612&w=0&h=Fe3NT8oPm31-00MtJOZv9cfgC3jyc9ix32CzWrqpu5Y=',
		productVariant: 'jelly belly toppings',
		productPrice: 22.99,
	},
	{
		productId: 'm2',
		productName: 'Monster Cookie',
		productDescription: 'A german specialty!',
		productImgUrl:
			'https://www.inkatrinaskitchen.com/wp-content/uploads/2011/04/Cookie-Monster-Cookies.jpg',
		productPrice: 16.5,
		productVariant: 'jelly belly toppings',
	},
	{
		productId: 'm3',
		productName: 'Kid`s Butter Cookie',
		productDescription: 'American, raw, meaty',
		productImgUrl:
			'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2021_kid%E2%80%99s-favorite-butter-cookie_ice-cream-sandwich_18781_600x600.jpg?ext=.jpg',
		productPrice: 12.99,
		productVariant: 'jelly belly toppings',
	},
	{
		productId: 'm4',
		productName: 'Granola Cookie',
		productDescription: 'Healthy...and green...',
		productImgUrl:
			'https://minimalistbaker.com/wp-content/uploads/2021/03/Granola-Cookies-SQUARE.jpg',
		productPrice: 18.99,
		productVariant: 'jelly belly toppings',
	},
	{
		productId: 'm1',
		productName: 'Chocolate Chip Cookie',
		productDescription: 'Finest fish and veggies',
		productImgUrl:
			'https://media.istockphoto.com/photos/chocolate-chip-cookie-isolated-picture-id517109442?k=20&m=517109442&s=612x612&w=0&h=Fe3NT8oPm31-00MtJOZv9cfgC3jyc9ix32CzWrqpu5Y=',
		productPrice: 22.99,
		productVariant: 'jelly belly toppings',
	},
	{
		productId: 'm2',
		productName: 'Monster Cookie',
		productDescription: 'A german specialty!',
		productImgUrl:
			'https://www.inkatrinaskitchen.com/wp-content/uploads/2011/04/Cookie-Monster-Cookies.jpg',
		productPrice: 16.5,
		productVariant: 'jelly belly toppings',
	},
	{
		productId: 'm3',
		productName: 'Kid`s Butter Cookie',
		productDescription: 'American, raw, meaty',
		productImgUrl:
			'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2021_kid%E2%80%99s-favorite-butter-cookie_ice-cream-sandwich_18781_600x600.jpg?ext=.jpg',
		productPrice: 12.99,
		productVariant: 'jelly belly toppings',
	},
	{
		productId: 'm4',
		productName: 'Granola Cookie',
		productDescription: 'Healthy...and green...',
		productImgUrl:
			'https://minimalistbaker.com/wp-content/uploads/2021/03/Granola-Cookies-SQUARE.jpg',
		productPrice: 18.99,
		productVariant: 'jelly belly toppings',
	},
];

const AvailableProducts = (props) => {
	const productsList = DUMMY_PRODUCTS.map((product) => (
		<ProductItem {...product} item={product} type={props.type} />
	));
	return (
		<section className={classes.productsList}>
			<ul className={classes[props.type]}>{productsList}</ul>
		</section>
	);
};
export default AvailableProducts;
