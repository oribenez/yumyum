import classes from './home.module.css';
import HeaderWelcomeImg from '../Components/Layout/Header/HeaderWelcomeImg';
import Products from '../Components/Products/Products';

const home = () => {
	return (
		<>
			<HeaderWelcomeImg />
			<Products className={classes.products} />
		</>
	);
};
export default home;
