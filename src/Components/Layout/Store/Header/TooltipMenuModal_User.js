import { useContext } from "react";

import classes from "./TooltipMenuModal_User.module.css";

import Button from '../../../UI/Button';
import SideBarItem from "../../Dashboard/SideBarItem";
import AuthContext from '../../../../store/auth-context';

import { ReactComponent as IconProfile } from "../../../../assets/user_icon.svg";
import { ReactComponent as IconDashboard } from "../../../../assets/owl_icon.svg";


const TooltipMenuModal_User = (props) => {
    const ctxAuth = useContext(AuthContext)

	return (
		<>
			<div className={classes.profileWrap}>
                <h3>{ctxAuth.userFullname}</h3>
                <h4>{ctxAuth.userEmail}</h4>
            </div>
			<div className={classes.linksWrap}>
                <SideBarItem img={<IconDashboard />} svgAsComponent to="/dashboard" label="Dashboard" />
				<SideBarItem img={<IconProfile />} svgAsComponent to="/profile" label="Profile" />
                
                

			</div>
            <Button onClick={ctxAuth.logout} className={classes.logout}>Log out</Button>
		</>
	);
};

export default TooltipMenuModal_User;
