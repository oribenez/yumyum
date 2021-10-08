import classes from './FlexContainer.module.css';

const FlexContainer = (props) => {
	let dividerPercent = props.dividerPercent ? props.dividerPercent : 50;

	return (
		<div
			className={classes.wrap}
			style={props.reverse && { flexDirection: 'row-reverse' }}
		>
			<div style={{ width: dividerPercent + '%' }}>
				<h1 className={classes.title} style={props.titleStyle}>
					{props.title}
				</h1>
				<p className={classes.textContent} style={props.textContentStyle}>
					{props.textContent}
				</p>
			</div>
			<div style={{ width: 100 - +dividerPercent + '%' }}>
				<img src={props.imgUrl} className={classes.image} alt="" />
			</div>
		</div>
	);
};

export default FlexContainer;
