import React from 'react';

const CartContext = React.createContext({
	show: {
		isModalShown: null,
		currClass: '',
		onShowModal: () => {},
		onHideModal: () => {},
	},
	items: [],
	moneySubtotal: 0,
	moneyShippingHandling: 0,
	moneyTotal: 0,
	addItem: (item) => {},
	removeItem: (id) => {},
});

export default CartContext;
