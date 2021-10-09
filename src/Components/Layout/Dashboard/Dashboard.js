import { Link } from 'react-router-dom';

import classes from './Dashboard.module.css';
import Logo from '../../UI/Logo';

const Dashboard = () => {
	return (
		<>
			<div className={classes.headerBar}>
				<div className={classes.leftWrap}>
					<Link to="/dashboard">
						<Logo className={classes.bigLogo} />
					</Link>
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
		</>
	);
};

export default Dashboard;
