import { useEffect, useContext } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import IconClose from '../Layout/IconClose';
import CartContext from '../../context/cart-context';

const Backdrop = (props) => {
	const ctxCart = useContext(CartContext);

	return (
		<div
			className={classes.backdrop + ' ' + classes[ctxCart.currClass]}
			onClick={ctxCart.onHideModal}
		></div>
	);
};

const ModalOverlay = (props) => {
	const ctxCart = useContext(CartContext);

	return (
		<div className={classes.modal + ' ' + classes[ctxCart.currClass]}>
			<button
				className={
					classes.btnCloseCartDrawer + ' ' + classes[ctxCart.currClass]
				}
				onClick={ctxCart.onHideModal}
			>
				<IconClose />
			</button>
			{props.children}
		</div>
	);
};

const portalElement = document.querySelector('#overlays');

const Modal = (props) => {
	const ctxCart = useContext(CartContext);

	return (
		<>
			{ReactDOM.createPortal(
				ctxCart.isModalShown && <Backdrop />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</>
	);
};
export default Modal;
