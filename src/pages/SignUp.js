import { Link } from 'react-router-dom';

import classes from './SignUp.module.css';

import Card from '../Components/UI/Card';
import Input from '../Components/UI/Input';
import SubmitButton from '../Components/UI/SubmitButton';

// images
import profileIcon from '../assets/user_icon.svg';
import lockIcon from '../assets/lock_icon.svg';
import mailIcon from '../assets/plane_paper_icon.svg';
import addressIcon from '../assets/address_icon.svg';
import phoneIcon from '../assets/phone_icon.svg';
import logo from '../assets/logo3.svg';

const SignUp = () => {
	return (
		<>
			<Card className={classes.authWrap}>
				<div className={classes.innerCardWrap}>
					<img src={logo} alt="" className={classes.logo} />
					<div className={classes.title}>
						Sign up for free and earn
						<br /> 5% discount for your first purchase
					</div>
					<form>
						<Input
							type="text"
							id="username"
							placeholder="username"
							imgUrl={profileIcon}
							required
						/>
						<Input
							type="text"
							id="password"
							placeholder="password"
							imgUrl={lockIcon}
							required
						/>
						<Input
							type="email"
							id="email"
							placeholder="email"
							imgUrl={mailIcon}
							required
						/>
						<Input
							type="text"
							id="address"
							placeholder="shipping address"
							imgUrl={addressIcon}
						/>
						<Input
							type="tel"
							id="phone"
							placeholder="phone num."
							imgUrl={phoneIcon}
						/>
						<div className={classes.actions}>
							<SubmitButton
								value="CREATE FREE ACCOUNT"
								className={classes.loginButton}
							/>
						</div>
					</form>
				</div>
				<div className={classes.bottomBar}>
					<span>
						Already a User? <Link to="/auth/login">Log in</Link>
					</span>
				</div>
			</Card>
		</>
	);
};

export default SignUp;
