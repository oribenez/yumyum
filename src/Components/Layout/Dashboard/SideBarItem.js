import { NavLink } from "react-router-dom";
import classes from "./SideBarItem.module.css";

const SideBarItem = (props) => {
	const reverse = props.reverse ? "row-reverse" : "row";
    const imgs = props.svgAsComponent? props.img : <img src={props.img} alt={props.label} />;

	return (
		<NavLink to={props.to} className={classes.itemWrap} activeClassName={classes.active} style={{ flexDirection: reverse }}>
			{imgs}
			<span>{props.label}</span>
		</NavLink>
	);
};

export default SideBarItem;
