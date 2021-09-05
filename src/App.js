import classes from './App.module.css';
import Header from './Components/Layout/Header';
import Logo from './Components/Layout/Logo';
import FoodMenu from './Components/FoodMenu/FoodMenu';
import PersistentDrawerLeft from './Components/Layout/PersistentDrawerLeft';

function App() {
	return (
		<>
			<Header />
			<div className={classes.firstPageWallImage}>
				<Logo className={classes.bigLogo} />
				<FoodMenu />
			</div>
		</>
	);
}

export default App;
