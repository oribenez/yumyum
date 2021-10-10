import { useContext, useEffect, useState } from 'react';
import useInput from '../hooks/use-input';

import classes from './Checkout.module.css';

import CartContext from '../store/cart-context';
import CartItem from '../Components/Cart/CartItem';
import Story from '../Components/UI/Story';
import Card from '../Components/UI/Card';
import Input from '../Components/UI/Input';
import Button from '../Components/UI/Button';
import Radio from '../Components/UI/btnRadio';
import { useHistory } from 'react-router';

//Validation
const isNotEmpty = (value) => [
	value.trim() !== '',
	'Please fill the field above',
];
const isEmail = (value) => [
	value.includes('@'),
	'Please type a valid email address',
];

const Checkout = (props) => {
	const ctxCart = useContext(CartContext);
	const [shippings, setShippings] = useState();
	const history = useHistory();
	// * * * pay as guest * * *

	const {
		value: fullnameValue,
		isValid: fullnameIsValid,
		hasError: fullnameHasError,
		assistiveText: fullnameAssistiveText,
		valueChangeHandler: fullnameChangeHandler,
		inputBlurHandler: fullnameBlurHandler,
		reset: fullnameReset,
	} = useInput(isNotEmpty);

	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		assistiveText: emailAssistiveText,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInput(isEmail);

	const {
		value: phoneValue,
		isValid: phoneIsValid,
		hasError: phoneHasError,
		assistiveText: phoneAssistiveText,
		valueChangeHandler: phoneChangeHandler,
		inputBlurHandler: phoneBlurHandler,
		reset: phoneReset,
	} = useInput(isNotEmpty);

	//  check if the form is valid
	let formIsValid =
		fullnameIsValid && emailIsValid && phoneIsValid ? true : false;

	const placeOrderHandler = (e) => {
		if (!formIsValid) return;

		console.log('Order Placed');

		history.push('/payment');
	};

	// * * * Shipping Solutions * * *

	const fetchShippings = async () => {
		try {
			const response = await fetch(
				process.env.REACT_APP_BACKEND_URL + '/shippings',
				{
					method: 'GET',
				}
			);
			const data = await response.json();
			console.log(data);
			setShippings(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchShippings();
	}, []);

	let htmlShipping = <h2>...</h2>;
	if (shippings) {
		htmlShipping = shippings.map((item) => (
			<Radio
				name="shipping"
				label={`${item.name} | ${item.description} | (extra charge: $${item.price})`}
				value={item._id}
				id={item._id}
				key={item._id}
			/>
		));
	}

	return (
		<>
			<Story className={classes.storyCheckout} title="Place Your Order">
				<section
					className="container cards-gap"
					style={{ padding: '1.5rem 0' }}
				>
					<Card>
						<p>*Please fill below details in order to complete order</p>
					</Card>
					<Card>
						<div className={classes.flexCard}>
							<div className={classes.guestDetails}>
								<h1>Pay as Guest</h1>
								<form>
									<Input
										type="text"
										id="fullname"
										placeholder="Full Name"
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
										placeholder="Email"
										required
										value={emailValue}
										hasError={emailHasError}
										onChange={emailChangeHandler}
										onBlur={emailBlurHandler}
										assistiveText={emailAssistiveText}
									/>
									<Input
										type="text"
										id="phoneNum"
										placeholder="Phone Num."
										required
										value={phoneValue}
										hasError={phoneHasError}
										onChange={phoneChangeHandler}
										onBlur={phoneBlurHandler}
										assistiveText={phoneAssistiveText}
									/>
								</form>
							</div>
							<div>OR</div>
							<div className={classes.actions}>
								<Button>Sign In</Button>
							</div>
						</div>
					</Card>
					<Card>
						<h1>Shipping Solution</h1>
						{htmlShipping}
					</Card>
					<Card>
						<h1>Order</h1>
						<ul className={classes['cart-items']}>
							{ctxCart.items.map((item) => (
								<CartItem key={item.productId} item={item} {...item} />
							))}
						</ul>
						<div className={classes.paymentSummary}>
							<div className={classes.paymentSummary__subtotal}>
								Subtotal : ${ctxCart.moneySubtotal.toFixed(2)}
							</div>
							<div className={classes.paymentSummary__shipping}>
								Shipping and Handling : $
								{ctxCart.moneyShippingHandling.toFixed(2)}
							</div>
							<br />
							<div className={classes.paymentSummary__total}>
								Total Payment : ${ctxCart.moneyTotal.toFixed(2)}
							</div>
						</div>
						<br />
						<div className={classes.actions}>
							<Button disabled={!formIsValid} onClick={placeOrderHandler}>
								Place Your Order
							</Button>
						</div>
					</Card>
				</section>
			</Story>
		</>
	);
};

export default Checkout;
