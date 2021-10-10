import { Route } from 'react-router-dom';

import classes from './Auth.module.css';

import Button from '../../UI/Button';
import Login from '../../../pages/Login';
import SignUp from '../../../pages/SignUp';

const Auth = () => {
	return (
		<>
			<div className={classes.pageWrap}>
				<Button className={classes.actions} to="/">
					Back to Store
				</Button>
				<Route path="/auth/signup" component={SignUp} />
				<Route path="/auth/login" component={Login} />
			</div>
		</>
	);
};
export default Auth;
