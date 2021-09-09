import React from 'react';

const CartContext = React.createContext({
	show: {
		isModalShown: null,
		currClass: '',
		onShowModal: () => {},
		onHideModal: () => {},
	},
	items: [],
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (id) => {},
});

export default CartContext;
