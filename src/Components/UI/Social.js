import classes from './Social.module.css';

const Social = (props) => {
	const links = props.items.map((item, index) => (
		<a href={item.link} className={classes.imgWrap} key={index}>
			<img src={item.imgUrl} alt={item.alt} />
		</a>
	));
	return <div className={classes.socialWrap}>{links}</div>;
};

export default Social;
