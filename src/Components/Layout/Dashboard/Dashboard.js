import { Link } from "react-router-dom";

import classes from "./Dashboard.module.css";

import SideBarItemGroup from "./SideBarItemGroup";
import SideBarItem from "./SideBarItem";

import imgLogo from "../../../assets/logo3.svg";
import { ReactComponent as IconProfile } from "../../../assets/user_icon.svg";
import { ReactComponent as IconStore } from "../../../assets/store_icon.svg";
import { ReactComponent as IconDashboard } from "../../../assets/dashboard2_icon.svg";

const Dashboard = (props) => {
	return (
		<>
			<div className={classes.headerBar}>
				<div className={classes.leftWrap}>
					<div className={classes.logoWrap}>
						<Link to="/dashboard">
							<img src={imgLogo} alt="logo" />
						</Link>
					</div>
				</div>
				<div className={classes.centerWrap}></div>
				<div className={classes.rightWrap}>
					<Link to="/">
						<IconStore fill="#333" />
					</Link>
					<Link to="/dashboard/profile">
						<IconProfile fill="#333" />
					</Link>
				</div>
			</div>
			<div className={classes.spacer}></div>
			<div className={classes.sideBar}>
				<SideBarItemGroup title="General">
				<SideBarItem
					label="Overview"
					img={<IconDashboard />}
					to="/dashboard"
					svgAsComponent
				/></SideBarItemGroup>
			</div>
		</>
	);
};

export default Dashboard;
