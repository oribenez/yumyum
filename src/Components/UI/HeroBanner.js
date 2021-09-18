import classes from './HeroBanner.module.css';

const HeroBanner = (props) => {
	const backBannerStyle = {
		background: 'url(' + props.backImgUrl + ')',
		backgroundSize: 'cover',
	};

	const centerBannerStyle = {
		background: 'url(' + props.centerImgUrl + ')',
		backgroundSize: 'cover',
	};

	return (
		<div className={classes.heroBannerWrap} style={backBannerStyle}>
			<div className={classes.blur}>
				<div className={classes.centerObject}>
					<div className={classes.leftWrap}>{props.content}</div>
					<div className={classes.rightWrap} style={centerBannerStyle}></div>
				</div>
			</div>
		</div>
	);
};
export default HeroBanner;
