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
			<div className={classes.layout}>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/shop">
					<Shop />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/checkout">
					<Checkout />
				</Route>
				<Route path="/payment">
					<Payment />
				</Route>
			</div>
			<Footer />
		</>
	);
};

export default Store;
