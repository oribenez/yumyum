import { Link } from 'react-router-dom';

import classes from './Dashboard.module.css';
import imgLogo from '../../../assets/logo-fullwhite-spaced.svg';

const Dashboard = (props) => {
	return (
		<>
			<div className={classes.headerBar}>
				<div className={classes.leftWrap}>
					<div className={classes.logoWrap}>
						<Link to="/dashboard">
							<img src={imgLogo} alt="logo" />
						</Link>
					</div>
				</div>
				<div className={classes.centerWrap}></div>
				<div className={classes.rightWrap}>
					<div className={classes.profileImgWrap}>
						<Link to="/dashboard/profile">
							<img src="" alt="" />
						</Link>
					</div>
				</div>
			</div>
			<div className={classes.spacer}></div>
			<div className={classes.sideBar}></div>
		</>
	);
};

export default Dashboard;
