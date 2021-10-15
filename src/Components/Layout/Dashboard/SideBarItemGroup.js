import classes from "./SideBarItemGroup.module.css";

const SideBarItemGroup = (props) => {
	return (
		<div className={classes.groupWrap}>
		<h3>{props.title}</h3>
		<div className={classes.groupLinksWrap}>
			{props.children}
		</div>
		</div>
	);
};

export default SideBarItemGroup;
