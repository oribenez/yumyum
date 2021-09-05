import classes from './App.module.css';
import Header from './Components/Layout/Header';
import Logo from './Components/Layout/Logo';
import Products from './Components/Products/Products';
import PersistentDrawerLeft from './Components/Layout/PersistentDrawerLeft';

function App() {
	return (
		<>
			<Header />
			<div className={classes.firstPageWallImage}>
				<Logo className={classes.bigLogo} />
				<Products />
			</div>
		</>
	);
}

export default App;
