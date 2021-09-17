import classes from './CartProvider.module.css';
import React, { useReducer } from 'react';
import CartContext from './cart-context';

const initCartState = {
	show: {
		isModalShown: false,
		currClass: '',
	},
	items: [
		{
			id: 'c1',
			productImg:
				'https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16-600x868.jpg',
			productName: 'Giant Cookie',
			productVariant: 'jelly belly toppings',
			productAmount: 2,
			productPrice: 12.99,
		},
		{
			id: 'c2',
			productImg:
				'http://images6.fanpop.com/image/photos/33000000/Heart-Cookies-love-33075634-1680-1050.jpg',
			productName: 'Love Cookie',
			productVariant: 'Coconut toppings',
			productAmount: 5,
			productPrice: 22.59,
		},
	],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'SHOW_MODAL') {
		return { ...state, show: { isModalShown: true, currClass: 'active' } };
	}
	if (action.type === 'HIDE_MODAL') {
		return { ...state, show: { isModalShown: false, currClass: 'close' } };
	}
	if (action.type === 'ADD_ITEM') {
		const updatedItems = state.items.concat(action.item);
		const updatedTotalAmount =
			state.totalAmount + action.item.productPrice * action.item.productAmount;
		return { items: updatedItems, totalAmount: updatedTotalAmount };
	}
	if (action.type === 'REMOVE_ITEM') {
	}
	return initCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		initCartState
	);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: 'ADD_ITEM', item: item });
	};
	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
	};

	const showModalHandler = () => {
		document.querySelector('body').classList.add('stop-scrolling');
		dispatchCartAction({ type: 'SHOW_MODAL' });
	};
	const hideModalHandler = () => {
		document.querySelector('body').classList.remove('stop-scrolling');
		dispatchCartAction({ type: 'HIDE_MODAL' });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		show: {
			isModalShown: cartState.show.isModalShown,
			currClass: cartState.show.currClass,
			onShowModal: showModalHandler,
			onHideModal: hideModalHandler,
		},
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
