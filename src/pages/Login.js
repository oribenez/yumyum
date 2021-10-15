import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/use-input-v2";
import { useHttpClient } from "../hooks/http-hook";
import { useHistory } from "react-router";

import classes from "./Login.module.css";

import Card from "../Components/UI/Card";
import Input from "../Components/UI/Input";
import SubmitButton from "../Components/UI/SubmitButton";
import {
	VALIDATOR_BUNDLE_REQUIRE,
	VALIDATOR_BUNDLE_EMAIL,
} from "../util/validators";
import AuthContext from "../store/auth-context";
import LoadingSpinner from "../Components/UI/LoadingSpinner";

// images
import profileIcon from "../assets/user_icon.svg";
import lockIcon from "../assets/lock_icon.svg";
import logo from "../assets/logo3.svg";

const Login = () => {
	const ctxAuth = useContext(AuthContext);
	// eslint-disable-next-line
	const { isLoading, error, sendRequest, clearError } = useHttpClient();
	const [clientError, setClientError] = useState("");
	const history = useHistory();

	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		assistiveText: emailAssistiveText,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
	} = useInput([VALIDATOR_BUNDLE_REQUIRE(), VALIDATOR_BUNDLE_EMAIL()]);

	const {
		value: passwordValue,
		isValid: passwordIsValid,
		hasError: passwordHasError,
		assistiveText: passwordAssistiveText,
		valueChangeHandler: passwordChangeHandler,
		inputBlurHandler: passwordBlurHandler,
	} = useInput([VALIDATOR_BUNDLE_REQUIRE()]);

	const loginHandler = async (e) => {
		e.preventDefault();

		if (!emailIsValid || !passwordIsValid) {
			setClientError(
				"Could not sign you in, please check email and password you have entered"
			);
			return;
		}
		setClientError("");

		const user = {
			email: emailValue,
			password: passwordValue,
		};
		try {
			const responseData = await sendRequest(
				`${process.env.REACT_APP_BACKEND}/api/${process.env.REACT_APP_API_VER}` +
					"/users/login",
				"POST",
				JSON.stringify(user),
				{
					"Content-Type": "application/json",
				}
			);

			ctxAuth.login(responseData.userId, responseData.token);

			history.push("/");
		} catch (error) {
			setClientError(error.message);
		}
	};

	return (
		<Card className={classes.authWrap}>
			{isLoading && <LoadingSpinner asOverlay />}
			<div className={classes.innerCardWrap}>
				<img src={logo} alt="" className={classes.logo} />
				<div className={classes.title}>Log in to your account</div>
				<form onSubmit={loginHandler}>
					<Input
						type="text"
						id="email"
						placeholder="email"
						imgUrl={profileIcon}
						value={emailValue}
						onChange={emailChangeHandler}
						onBlur={emailBlurHandler}
						hasError={emailHasError}
						assistiveText={emailAssistiveText}
						required
					/>
					<Input
						type="password"
						id="password"
						placeholder="password"
						imgUrl={lockIcon}
						value={passwordValue}
						onChange={passwordChangeHandler}
						onBlur={passwordBlurHandler}
						hasError={passwordHasError}
						assistiveText={passwordAssistiveText}
						required
					/>
					<div className={classes.actions}>
						{clientError && (
							<div className={classes.clientError}>{clientError}</div>
						)}
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
