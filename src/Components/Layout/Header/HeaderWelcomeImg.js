import BannerFader from '../../UI/BannerFader';
import classes from './HeaderWelcomeImg.module.css';
import Emoji from '../../UI/Emoji';

const HeaderWelcomeImg = () => {
	return (
		<>
			<div className={classes.firstPageWallImage}>
				{/* <svg height="0" width="0">
				<defs>
					<clipPath id="svgPath">
						<path
							d="M190 696C87 696 77 625 1 696V1H1499V696C1397 690 1401 640 1348 633C1295 626 1176 684 1082 696C988 708 904 612 860 640C816 668 765 691 723 690C681 689 677 656 588 659C499 662 499 696 428 696C357 696 390 647 316 647C241 651 293 696 190 696Z"
							stroke="black"
						/>
					</clipPath>
				</defs>
			</svg> */}
				<div className={classes.firstPageWallTextWrap}>
					<h1>The perfect cookie.. at the perfect time.</h1>
				</div>
			</div>
			<BannerFader />
		</>
	);
};
export default HeaderWelcomeImg;
