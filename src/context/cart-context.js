import React, { useState } from 'react';

const CartContext = React.createContext({
	isModalShown: null,
	currClass: '',
	onShowModal: () => {},
	onHideModal: () => {},
});

export const CartContextProvider = (props) => {
	const [isModalShown, setIsModalShown] = useState(false);
	const [currClass, setCurrClass] = useState('');

	const showModalHandler = () => {
		setCurrClass('active');
		setIsModalShown(true);
	};
	const hideModalHandler = () => {
		setCurrClass('close');
		setIsModalShown(false);
	};

	return (
		<CartContext.Provider
			value={{
				isModalShown: isModalShown,
				currClass: currClass,
				onShowModal: showModalHandler,
				onHideModal: hideModalHandler,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContext;
