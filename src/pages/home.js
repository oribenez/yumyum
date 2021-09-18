import classes from './home.module.css';
import HeaderWelcomeImg from '../Components/Layout/Header/HeaderWelcomeImg';
import Products from '../Components/Products/Products';

const home = () => {
	return (
		<>
			<HeaderWelcomeImg />

			<section className="container">
				<h1 className="title">Cookies Forever</h1>
				<p className="story">
					When it comes to cookies, it's hard to beat a warm, freshly baked
					batch featuring the dynamic duo of oats and raisins.
					<br />
					Each sweet, lightly spiced bite of a chewy oatmeal cookie is like
					catching up with an old friend - a friend that you can eat. <br />
					All our cookies are baked with high-quality ingredients, just-in-time
					and of course by experienced chefs!
				</p>
				<Products className={classes.products} />
			</section>
		</>
	);
};
export default home;
