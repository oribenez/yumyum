import { Route } from 'react-router-dom';

import classes from './App.module.css';

import Cart from './Components/Cart/Cart';
import HeaderBar from './Components/Layout/Header/HeaderBar';
import Home from './pages/home';
import Shop from './pages/shop';
import Checkout from './pages/Checkout';

function App() {
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
				<Route path="/checkout">
					<Checkout />
				</Route>
			</div>
		</>
	);
}

export default App;
