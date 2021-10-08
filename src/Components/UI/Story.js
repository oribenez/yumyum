import classes from './Story.module.css';

const story = (props) => {
	const style = props.flexStart ? classes.flex : '';

	return (
		<div>
			<h1 className="title">{props.title}</h1>
			<div className={style + ' ' + props.className} style={props.style}>
				{props.children}
			</div>
		</div>
	);
};

export default story;
