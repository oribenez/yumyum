import classes from './BannerFader.module.css';

const BannerFader = (props) => {
	let style = classes.bnrFaderBottom;
	if (props.edge === 'top') style = classes.bnrFaderTop;

	return <div className={style}></div>;
};

export default BannerFader;
