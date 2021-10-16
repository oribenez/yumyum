import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./HeaderBar.module.css";

//Components
import Button from "../../../UI/Button";
import CartContext from "../../../../store/cart-context";
import AuthContext from "../../../../store/auth-context";
import Navbar from "../../../UI/Navbar";
import ShoppingCartButton from "../../../Cart/ShoppingCartButton";
import Logo from "../../../UI/Logo";
import Tooltip from "../../../UI/Tooltip";
import TooltipMenuModal_User from "../Header/TooltipMenuModal_User";
import ButtonIcon from "../../../UI/ButtonIcon";

// Images
import imgLogo from "../../../../assets/logo3.svg";
import { ReactComponent as IconProfile } from "../../../../assets/user_icon.svg";
import TooltipMenuModal from "../../../UI/TooltipMenuModal";

const HeaderBar = () => {
	const ctxCart = useContext(CartContext);
	const ctxAuth = useContext(AuthContext);

	return (
		<>
			<div className={classes.headerBar}>
				<div className={classes.leftWrap}>
					<Link to="/" className={classes.logoWrap}>
						<img src={imgLogo} alt="logo" />
					</Link>
				</div>
				<div className={classes.centerWrap}>
					<Navbar />
				</div>
				<div className={classes.rightWrap}>
					{ctxAuth.isLoggedIn ? (
						<>
							{/* <Link to="/dashboard">
								<Tooltip content="Dashboard" direction="bottom">
									<IconDashboard />
								</Tooltip>
							</Link> */}

							<TooltipMenuModal
								content={<TooltipMenuModal_User />}
								direction="bottom"
							>
								<ButtonIcon>
									<IconProfile />
								</ButtonIcon>
							</TooltipMenuModal>
						</>
					) : (
						<>
						<Button to='/auth/login'>Sign In</Button>
						</>
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
