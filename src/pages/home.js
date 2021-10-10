import classes from './home.module.css';

import Story from '../Components/UI/Story';

//images
import HeaderWelcomeImg from '../Components/Layout/Store/Header/HeaderWelcomeImg';
import cookiesbunch from '../assets/cookies-batch.png';
import berries from '../assets/berries.png';
import FlexContainer from '../Components/UI/FlexContainer';
import AvailableProducts from '../Components/Products/AvailableProducts';
import BannerFader from '../Components/UI/BannerFader';

const home = () => {
	const stories = [
		{
			title: '🌾Best Ingredients',
			imgUrl: berries,
			textContent:
				"When it comes to cookies, it's hard to beat a warm, freshly baked batch featuring the dynamic duo of oats and raisins. Each sweet, lightly spiced bite of a chewy oatmeal cookie is like catching up with an old friend - a friend that you can eat. All our cookies are baked with high-quality ingredients, just-in-time and of course by experienced chefs!",
			dividerPercent: 60,
		},
		{
			reverse: true,
			title: 'Superior 👨🏻‍🍳 Chefs',
			imgUrl: cookiesbunch,
			textContent:
				"When it comes to cookies, it's hard to beat a warm, freshly baked batch featuring the dynamic duo of oats and raisins. Each sweet, lightly spiced bite of a chewy oatmeal cookie is like catching up with an old friend - a friend that you can eat. All our cookies are baked with high-quality ingredients, just-in-time and of course by experienced chefs!",
			dividerPercent: 60,
			textContentStyle: { color: '#fff' },
			titleStyle: { color: '#fff' },
		},
	];

	return (
		<>
			<HeaderWelcomeImg />

			<section className="container">
				<FlexContainer {...stories[0]} />
			</section>

			<section className={classes.purpleWrap}>
				<BannerFader edge="top" />
				<div className="container">
					<FlexContainer {...stories[1]} />
				</div>
			</section>
			<BannerFader />
			<section>
				<Story title="Our Top 5">
					<div className="container">
						<AvailableProducts type="cards" filter="top5" />
					</div>
				</Story>
			</section>
		</>
	);
};
export default home;
