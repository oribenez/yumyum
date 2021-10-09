import classes from './shop.module.css';
import AvailableProducts from '../Components/Products/AvailableProducts';
import HeroBanner from '../Components/UI/HeroBanner';
import Story from '../Components/UI/Story';

const shop = () => {
	const heroBanner = {
		content: (
			<>
				<h1>
					Celebrate <br />
					<span className="handwrite">more with</span>
					<br /> Cookie Mate
				</h1>
			</>
		),
		centerImgUrl:
			'https://images.pexels.com/photos/1196301/pexels-photo-1196301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		backImgUrl:
			'https://images.pexels.com/photos/1693626/pexels-photo-1693626.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
	};
	return (
		<>
			<HeroBanner {...heroBanner} />
			<section className={classes.foodMenuWrap}>
				<Story title="Homebrew Cookies">
					<div className="container">
						<AvailableProducts type="cards" />
					</div>
				</Story>
			</section>
		</>
	);
};
export default shop;
