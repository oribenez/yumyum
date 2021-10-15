import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./HeaderBar.module.css";

//Components
import CartContext from "../../../../store/cart-context";
import AuthContext from "../../../../store/auth-context";
import Navbar from "../../../UI/Navbar";
import ShoppingCartButton from "../../../Cart/ShoppingCartButton";
import Logo from "../../../UI/Logo";

// Images
import userIcon from "../../../../assets/user_icon_grey.svg";

const HeaderBar = () => {
	const ctxCart = useContext(CartContext);
	const ctxAuth = useContext(AuthContext);

	return (
		<>
			<div className={classes.headerBar}>
				<div className={classes.leftWrap}>
					<Link to="/">
						<Logo className={classes.bigLogo} />
					</Link>
				</div>
				<div className={classes.centerWrap}>
					<Navbar />
				</div>
				<div className={classes.rightWrap}>
					{!ctxAuth.isLoggedIn && (
						<Link to="/auth/login">
							<img src={userIcon} alt="Auth" />
						</Link>
					)}

					<ShoppingCartButton
						className={classes.ShoppingCartWrap}
						numItems={ctxCart.items.length}
						onClick={ctxCart.show.onShowModal}
					/>
				</div>
			</div>
			<div className={classes.spacer}></div>
		</>
	);
};
export default HeaderBar;
