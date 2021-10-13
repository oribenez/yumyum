// Packages
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/use-input-v2";
import { useHttpClient } from "../hooks/http-hook";

//	Styles
import classes from "./SignUp.module.css";

//	Components
import { AuthProvider } from "../store/AuthProvider";
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
} from "../util/validators";

const SignUp = () => {
	const ctxAuth = useContext(AuthProvider);
	const { isLoading, error, sendRequest, clearError } = useHttpClient();

	const {
		value: fullnameValue,
		isValid: fullnameIsValid,
		hasError: fullnameHasError,
		assistiveText: fullnameAssistiveText,
		valueChangeHandler: fullnameChangeHandler,
		inputBlurHandler: fullnameBlurHandler,
	} = useInput([VALIDATOR_BUNDLE_REQUIRE()]);

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
	} = useInput([VALIDATOR_BUNDLE_REQUIRE(), VALIDATOR_BUNDLE_MINLENGTH(6)]);

	const {
		value: shippingAddressValue,
		isValid: shippingAddressIsValid,
		valueChangeHandler: shippingAddressChangeHandler,
		inputBlurHandler: shippingAddressBlurHandler,
	} = useInput([]);

	const {
		value: phoneValue,
		isValid: phoneIsValid,
		hasError: phoneHasError,
		assistiveText: phoneAssistiveText,
		valueChangeHandler: phoneChangeHandler,
		inputBlurHandler: phoneBlurHandler,
	} = useInput([VALIDATOR_BUNDLE_REQUIRE()]);

	const signupHandler = async (e) => {
		e.preventDefault();

		const newUser = {
			fullname: fullnameValue,
			email: emailValue,
			password: passwordValue,
			shippingAddress: shippingAddressValue,
			phone: phoneValue,
		};

		try {
			await sendRequest(
				`${process.env.REACT_APP_BACKEND}/api/${process.env.REACT_APP_API_VER}` +
					"/users/signup",
				"POST",
				newUser,
				{
					"Content-Type": "application/json",
				}
			);

			ctxAuth.login();
		} catch (error) {}
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
