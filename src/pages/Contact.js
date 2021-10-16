import classes from "./Contact.module.css";

import Story from "../Components/UI/Story";
import Input from "../Components/UI/Input";
import BannerFader from "../Components/UI/BannerFader";

// images
import phoneIcon from "../assets/phone_icon_grey.svg";
import emailIcon from "../assets/email_icon.svg";
import gpsIcon from "../assets/gps_icon.svg";
import { ReactComponent as BnrFdr } from "../assets/bnr_fdr.svg";
import SubmitButton from "../Components/UI/SubmitButton";

const Contact = () => {
	return (
		<>
			<Story title="Contact Us">
				<div className={"container " + classes.contactUsWrap}>
					<div className={classes.leftSide}>
						<div className={classes.imgContainer}>
							<img
								src="https://images.pexels.com/photos/6287295/pexels-photo-6287295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
								alt=""
							/>
						</div>
					</div>

					<div className={classes.rightSide}>
						<span>
							<h3>THANKS FOR STOPPING BY OUR SHOP TODAY!</h3>
							<p>
								We love to chat with you and hear about how we can better help
								you find your new favorite cookie. Please give us a day or two
								to get back to you, we appreciate your time!
							</p>
						</span>
						<span className={classes.detailsWrap}>
							<div className={classes.imgContainerDetails}>
								<img src={phoneIcon} alt="Phone" />
							</div>
							<p>+972 54-8321468</p>
						</span>
						<span className={classes.detailsWrap}>
							<div className={classes.imgContainerDetails}>
								<img src={emailIcon} alt="Email" />
							</div>
							<p>order@cookiemate.shop</p>
						</span>
						<span className={classes.detailsWrap}>
							<div className={classes.imgContainerDetails}>
								<img src={gpsIcon} alt="Location" />
							</div>
							<p>Center District, Israel</p>
						</span>
					</div>
				</div>
			</Story>
			<BnrFdr style={{ fill: `var(--color-purple)`, marginBottom: "-10px" }} />
			<section className={classes.purpleWrap}></section>
			<BannerFader />
			<section>
				<div className={"container " + classes.formContactUsWrap}>
					<form className={classes.formContactUs}>
						<p>Leave us a message and we will get back to you soon.</p>
						<Input type="text" id="fullname" placeholder="Full Name" required />
						<Input
							type="text"
							id="phonenum"
							placeholder="Phone Num."
							required
						/>
						<Input type="text" id="msg" placeholder="Your Message" required />
						<div className={classes.actions}>
							<SubmitButton value="send message" />
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Contact;
