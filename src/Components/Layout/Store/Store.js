import { Route } from 'react-router-dom';

import classes from './Store.module.css';

import Cart from '../../Cart/Cart';
import HeaderBar from './Header/HeaderBar';
import Home from '../../../pages/home';
import Shop from '../../../pages/shop';
import Checkout from '../../../pages/Checkout';
import Contact from '../../../pages/Contact';
import Payment from '../../../pages/Payment';
import Footer from './Footer';

const Store = () => {
	return (
		<>
			<Cart />
			<HeaderBar />
			<section className={classes.layout}>
				<Route path="/" exact component={Home} />
				<Route path="/shop" component={Shop} />
				<Route path="/contact" component={Contact} />
				<Route path="/checkout" component={Checkout} />
				<Route path="/payment" component={Payment} />
			</section>
			<Footer />
		</>
	);
};

export default Store;
