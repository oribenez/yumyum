import classes from "./Footer.module.css";

import whiteLogo from "../../../assets/logo-white-spaced.svg";
import BannerFader from "../../UI/BannerFader";
import Social from "../../UI/Social";

//images social
import facebook from "../../../assets/facebook_social.svg";
import instagram from "../../../assets/instagram_social.svg";
import dribble from "../../../assets/dribble_social.svg";
import { ReactComponent as BnrFdr } from "../../../assets/bnr_fdr.svg";

const socialLinks = [
	{
		link: "",
		imgUrl: facebook,
		alt: "facebook",
	},
	{
		link: "",
		imgUrl: instagram,
		alt: "instagram",
	},
	{
		link: "",
		imgUrl: dribble,
		alt: "dribble",
	},
];

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<BnrFdr style={{ fill: `var(--color-brown)` }} />
			<div style={{ background: `var(--color-brown)`,margin: '-5px' }}>
				<div className={"container " + classes.footer_innerWrap}>
					<img src={whiteLogo} alt="" className={classes.footer__logo} />
					<Social items={socialLinks} />
				</div>
			</div>
		</footer>
	);
};
export default Footer;
