import { useContext } from 'react';

import classes from './Checkout.module.css';

import CartContext from '../store/cart-context';
import CartItem from '../Components/Cart/CartItem';
import Story from '../Components/UI/Story';
import Card from '../Components/UI/Card';
import Input from '../Components/UI/Input';
import Button from '../Components/UI/Button';
import HeroBanner from '../Components/UI/HeroBanner';
import Emoji from '../Components/UI/Emoji';

const Checkout = (props) => {
	const ctxCart = useContext(CartContext);

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
									/>
									<Input type="email" id="email" placeholder="Email" required />
									<Input
										type="text"
										id="phoneNum"
										placeholder="Phone Num."
										required
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
						<form>
							<div>
								<input
									type="radio"
									name="shipping"
									id="standardShipment"
									defaultChecked="checked"
								/>
								<label htmlFor="standardShipment">
									Standard shipping | Estimated Shipping and Handling time: 3-5
									days | (extra Charge: $2.50)
								</label>
							</div>
							<div>
								<input type="radio" name="shipping" id="airmailShipment" />
								<label htmlFor="airmailShipment">
									Air Mail | Estimated Shipping and Handling time: 3-5 days |
									(extra Charge: $9.99)
								</label>
							</div>

							<div>
								<input type="radio" name="shipping" id="pickupShipment" />
								<label htmlFor="pickupShipment">
									Self Pickup | Estimated Handling time: 1 day | (free of
									charge: $0.00)
								</label>
							</div>
						</form>
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
							<Button>Place Your Order</Button>
						</div>
					</Card>
				</section>
			</Story>
		</>
	);
};

export default Checkout;
