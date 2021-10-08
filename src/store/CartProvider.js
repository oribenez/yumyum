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
			productId: 'c1',
			productImgUrl:
				'https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16-600x868.jpg',
			productName: 'Giant Cookie',
			productVariant: 'jelly belly toppings',
			productAmount: 2,
			productPrice: 12.99,
		},
		{
			productId: 'c2',
			productImgUrl:
				'http://images6.fanpop.com/image/photos/33000000/Heart-Cookies-love-33075634-1680-1050.jpg',
			productName: 'Love Cookie',
			productVariant: 'Coconut toppings',
			productAmount: 5,
			productPrice: 22.59,
		},
	],

	moneySubtotal: 0,
	moneyShippingHandling: 0,
	moneyTotal: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'SHOW_MODAL') {
		return { ...state, show: { isModalShown: true, currClass: 'active' } };
	}
	if (action.type === 'HIDE_MODAL') {
		return { ...state, show: { isModalShown: false, currClass: 'close' } };
	}
	if (action.type === 'CHANGE_ITEM_AMOUNT') {
		let updatedItems = state.items;
		const newItem = action.item;

		if (+newItem.productAmount === 0) {
			updatedItems = state.items.filter((currItem) => {
				if (currItem.productId === newItem.productId) {
					return false;
				}
				return true;
			});
		} else {
			//if product exists in cart just update amount
			let isItemExistInCart = false;
			updatedItems = state.items.map((currItem) => {
				if (currItem.productId === newItem.productId) {
					isItemExistInCart = true;
					return { ...currItem, productAmount: newItem.productAmount };
				}
				return { ...currItem };
			});

			//if product *doesn't* exists in cart add item to cart
			if (!isItemExistInCart) {
				updatedItems = state.items.concat(newItem);
			}
		}

		//update subtotal amount
		let sumItemsPrices = 0;
		for (const item of updatedItems) {
			sumItemsPrices += +item.productPrice * +item.productAmount;
		}

		return {
			...state,
			items: updatedItems,
			moneySubtotal: sumItemsPrices,
			moneyTotal: sumItemsPrices,
		};
	}
	// if (action.type === 'ADD_ITEM') {
	// 	const newItem = action.item;

	// 	//if product exists in cart just update amount
	// 	let isItemExistInCart = false;
	// 	let updatedItems = state.items.map((currItem) => {
	// 		if (currItem.productId === newItem.productId) {
	// 			isItemExistInCart = true;
	// 			return { ...currItem, productAmount: newItem.productAmount };
	// 		}
	// 		return { ...currItem };
	// 	});

	// 	//if product *doesn't* exists in cart add item to cart
	// 	if (!isItemExistInCart) {
	// 		updatedItems = state.items.concat(newItem);
	// 	}

	// 	//update total amount
	// 	const updatedTotalAmount =
	// 		+state.totalAmount +
	// 		+action.item.productPrice * +action.item.productAmount;
	// 	return { ...state, items: updatedItems, totalAmount: updatedTotalAmount };
	// }
	// if (action.type === 'REMOVE_ITEM') {
	// }
	return initCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		initCartState
	);

	const changeItemAmountHandler = (item) => {
		dispatchCartAction({ type: 'CHANGE_ITEM_AMOUNT', item: item });
	};

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
		moneySubtotal: cartState.moneySubtotal,
		moneyShippingHandling: cartState.moneyShippingHandling,
		moneyTotal: cartState.moneyTotal,
		show: {
			isModalShown: cartState.show.isModalShown,
			currClass: cartState.show.currClass,
			onShowModal: showModalHandler,
			onHideModal: hideModalHandler,
		},
		changeItemAmount: changeItemAmountHandler,
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
