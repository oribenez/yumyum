import { Route, Switch } from 'react-router-dom';

import Store from './Components/Layout/Store/Store';
import Dashboard from './Components/Layout/Dashboard/Dashboard';
import Auth from './Components/Layout/Auth/Auth';

function App() {
	return (
		<>
			<Switch>
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/auth" component={Auth} />
				<Route path="/" component={Store} />
			</Switch>
		</>
	);
}

export default App;
