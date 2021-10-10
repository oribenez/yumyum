import classes from './Footer.module.css';

import whiteLogo from '../../../assets/logo-white-spaced.svg';
import BannerFader from '../../UI/BannerFader';
import Social from '../../UI/Social';

//images social
import facebook from '../../../assets/facebook_social.svg';
import instagram from '../../../assets/instagram_social.svg';
import dribble from '../../../assets/dribble_social.svg';

const socialLinks = [
	{
		link: '',
		imgUrl: facebook,
		alt: 'facebook',
	},
	{
		link: '',
		imgUrl: instagram,
		alt: 'instagram',
	},
	{
		link: '',
		imgUrl: dribble,
		alt: 'dribble',
	},
];

const Footer = () => {
	return (
		<footer className={classes.brownWrap}>
			<BannerFader edge="top" />
			<div className={'container ' + classes.footer_innerWrap}>
				<div>
					<img src={whiteLogo} alt="" className={classes.footer__logo} />
				</div>
				<Social items={socialLinks} />
			</div>
		</footer>
	);
};
export default Footer;
