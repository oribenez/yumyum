import React, { useState } from "react";
import classes from "./TooltipMenuModal.module.css";

const TooltipMenuModal = (props) => {
	const [active, setActive] = useState(false);

	const showHideTip = () => {
		setActive((val) => !val);
	};
	const hideTip = () => {
		setActive(false);
	};

	return (
		<>
			<div className={classes.overlay} style={active?{display:'block'} : {display: 'none'}} onClick={hideTip}></div>
			<div className={classes.tooltipWrapper} onClick={showHideTip}>
				{props.children}
			</div>
			{active && (
				<div
					className={`${classes.tooltip} ${
						classes[props.direction] || classes.top
					}`}
				>
					{/* Content */}
					{props.content}
				</div>
			)}
		</>
	);
};

export default TooltipMenuModal;
