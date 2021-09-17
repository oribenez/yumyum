import classes from './App.module.css';
import HeaderBar from './Components/Layout/Header/HeaderBar';
import Home from './pages/home';
import Shop from './pages/shop';
import Cart from './Components/Cart/Cart';
import { Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Cart />
			<HeaderBar />
			<div className={classes.layout}>
				<Route path="/story">
					<Home />
				</Route>
				<Route path="/shop">
					<Shop />
				</Route>
			</div>
		</>
	);
}

export default App;
