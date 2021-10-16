// Packages
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/use-input-v2";
import { useHttpClient } from "../hooks/http-hook";
import { useHistory } from "react-router";

//	Styles
import classes from "./SignUp.module.css";

//	Components
import AuthContext from "../store/auth-context";
import Card from "../Components/UI/Card";
import Input from "../Components/UI/Input";
import SubmitButton from "../Components/UI/SubmitButton";
import LoadingSpinner from "../Components/UI/LoadingSpinner";

// Images
import profileIcon from "../assets/user_icon.svg";
import lockIcon from "../assets/lock_icon.svg";
import mailIcon from "../assets/plane_paper_icon.svg";
import addressIcon from "../assets/address_icon.svg";
import phoneIcon from "../assets/phone_icon.svg";
import logo from "../assets/logo3.svg";
import {
	VALIDATOR_BUNDLE_REQUIRE,
	VALIDATOR_BUNDLE_EMAIL,
	VALIDATOR_BUNDLE_MINLENGTH,
	VALIDATOR_BUNDLE_MAXLENGTH,
} from "../util/validators";

const SignUp = () => {
	const ctxAuth = useContext(AuthContext);
	// eslint-disable-next-line
	const { isLoading, error, sendRequest, clearError } = useHttpClient();
	const [clientError, setClientError] = useState();
	const history = useHistory();

	const {
		value: fullnameValue,
		isValid: fullnameIsValid,
		hasError: fullnameHasError,
		assistiveText: fullnameAssistiveText,
		valueChangeHandler: fullnameChangeHandler,
		inputBlurHandler: fullnameBlurHandler,
	} = useInput([VALIDATOR_BUNDLE_REQUIRE(), VALIDATOR_BUNDLE_MAXLENGTH(25)]);

	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		assistiveText: emailAssistiveText,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
	} = useInput([
		VALIDATOR_BUNDLE_REQUIRE(),
		VALIDATOR_BUNDLE_EMAIL(),
		VALIDATOR_BUNDLE_MAXLENGTH(25),
	]);

	const {
		value: passwordValue,
		isValid: passwordIsValid,
		hasError: passwordHasError,
		assistiveText: passwordAssistiveText,
		valueChangeHandler: passwordChangeHandler,
		inputBlurHandler: passwordBlurHandler,
	} = useInput([VALIDATOR_BUNDLE_MINLENGTH(6), VALIDATOR_BUNDLE_MAXLENGTH(25)]);

	const {
		value: shippingAddressValue,
		isValid: shippingAddressIsValid,
		hasError: shippingAddressHasError,
		assistiveText: shippingAddressAssistiveText,
		valueChangeHandler: shippingAddressChangeHandler,
		inputBlurHandler: shippingAddressBlurHandler,
	} = useInput([VALIDATOR_BUNDLE_MAXLENGTH(25)]);

	const {
		value: phoneValue,
		isValid: phoneIsValid,
		hasError: phoneHasError,
		assistiveText: phoneAssistiveText,
		valueChangeHandler: phoneChangeHandler,
		inputBlurHandler: phoneBlurHandler,
	} = useInput([VALIDATOR_BUNDLE_MAXLENGTH(25)]);

	const signupHandler = async (e) => {
		e.preventDefault();

		//Validation check before request to backend
		if (
			!fullnameIsValid ||
			!emailIsValid ||
			!passwordIsValid ||
			!shippingAddressIsValid ||
			!phoneIsValid
		) {
			setClientError(
				"Oops. Could not sign you up, make sure you've entered all the fields correctly"
			);
			return;
		}
		setClientError("");

		const newUser = {
			fullname: fullnameValue,
			email: emailValue,
			password: passwordValue,
			shippingAddress: shippingAddressValue,
			phone: phoneValue,
		};

		try {
			const responseData = await sendRequest(
				`${process.env.REACT_APP_BACKEND}/api/${process.env.REACT_APP_API_VER}` +
					"/users/signup",
				"POST",
				JSON.stringify(newUser),
				{
					"Content-Type": "application/json",
				}
			);

			ctxAuth.login(responseData.userId, responseData.token,responseData.fullname,responseData.email);

			history.push("/");
		} catch (error) {
			setClientError(error.message);
		}
		console.log(ctxAuth.userId + "   -   " + ctxAuth.token);
	};

	return (
		<>
			<Card className={classes.authWrap}>
				{isLoading && <LoadingSpinner asOverlay />}
				<div className={classes.innerCardWrap}>
					<img src={logo} alt="" className={classes.logo} />
					<div className={classes.title}>
						Sign up for free and earn
						<br /> 5% discount for your first purchase
					</div>
					<form onSubmit={signupHandler}>
						<Input
							type="text"
							id="fullname"
							placeholder="full name"
							imgUrl={profileIcon}
							required
							value={fullnameValue}
							hasError={fullnameHasError}
							onChange={fullnameChangeHandler}
							onBlur={fullnameBlurHandler}
							assistiveText={fullnameAssistiveText}
						/>
						<Input
							type="email"
							id="email"
							placeholder="email"
							imgUrl={mailIcon}
							required
							value={emailValue}
							hasError={emailHasError}
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
							assistiveText={emailAssistiveText}
						/>
						<Input
							type="password"
							id="password"
							placeholder="password"
							imgUrl={lockIcon}
							required
							value={passwordValue}
							hasError={passwordHasError}
							onChange={passwordChangeHandler}
							onBlur={passwordBlurHandler}
							assistiveText={passwordAssistiveText}
						/>

						<Input
							type="text"
							id="address"
							placeholder="shipping address"
							imgUrl={addressIcon}
							value={shippingAddressValue}
							hasError={shippingAddressHasError}
							assistiveText={shippingAddressAssistiveText}
							onChange={shippingAddressChangeHandler}
							onBlur={shippingAddressBlurHandler}
						/>
						<Input
							type="tel"
							id="phone"
							placeholder="phone num."
							imgUrl={phoneIcon}
							value={phoneValue}
							hasError={phoneHasError}
							onChange={phoneChangeHandler}
							onBlur={phoneBlurHandler}
							assistiveText={phoneAssistiveText}
						/>
						<div className={classes.actions}>
							{clientError && (
								<div className={classes.clientError}>{clientError}</div>
							)}
							<SubmitButton
								value="CREATE FREE ACCOUNT"
								className={classes.submitButton}
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
