import BannerFader from '../../../UI/BannerFader';
import classes from './HeaderWelcomeImg.module.css';

const HeaderWelcomeImg = () => {
	return (
		<>
			<div className={classes.firstPageWallImage}>
				<div className={classes.firstPageWallTextWrap}>
					<h1>The perfect cookie.. at the perfect time.</h1>
				</div>
			</div>
			<BannerFader />
		</>
	);
};
export default HeaderWelcomeImg;
