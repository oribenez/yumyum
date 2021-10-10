import { Link } from 'react-router-dom';

import classes from './Login.module.css';

import Card from '../Components/UI/Card';
import Input from '../Components/UI/Input';
import SubmitButton from '../Components/UI/SubmitButton';

// images
import profileIcon from '../assets/user_icon.svg';
import lockIcon from '../assets/lock_icon.svg';
import logo from '../assets/logo3.svg';

const Login = () => {
	return (
		<Card className={classes.authWrap}>
			<div className={classes.innerCardWrap}>
				<img src={logo} alt="" className={classes.logo} />
				<div className={classes.title}>Log in to your account</div>
				<form>
					<Input
						type="text"
						id="username"
						placeholder="username"
						imgUrl={profileIcon}
					/>
					<Input
						type="text"
						id="password"
						placeholder="password"
						imgUrl={lockIcon}
					/>
					<div className={classes.actions}>
						<SubmitButton value="Login" className={classes.loginButton} />
					</div>
				</form>
			</div>
			<div className={classes.bottomBar}>
				<span>
					New to Cookie Mate? <Link to="/auth/signup">Sign Up</Link>
				</span>
			</div>
		</Card>
	);
};
export default Login;
