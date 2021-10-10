import { Route, Switch } from 'react-router-dom';

import Store from './Components/Layout/Store/Store';
import Dashboard from './Components/Layout/Dashboard/Dashboard';

function App() {
	return (
		<>
			<Switch>
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/" component={Store} />
			</Switch>
		</>
	);
}

export default App;
