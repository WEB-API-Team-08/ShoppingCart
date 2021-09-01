import axios from 'axios';

const Storage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []));
}

export const sumItems = cartItems => {
    Storage(cartItems);
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemCount, total }
}

const orderCheckout = async (cartItems) => {

    let result = false;

    const sendingcartItems = cartItems.map((item) => {
        return {
            _id: item._id,
            itemName: item.itemName,
            price: item.price,
            quantity: item.quantity
        }
    });

    return await axios.post(`http://localhost:5000/api/user/orders`, { cartItems: sendingcartItems })
        .then(res => {
            console.log(res.data);
            return true;

        }).catch(err => {
            console.log(err);
            return false;
        });
}

export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.cartItems.find(item => item._id === action.payload._id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }

            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                ...sumItems(state.cartItems.filter(item => item._id !== action.payload._id)),
                cartItems: [...state.cartItems.filter(item => item._id !== action.payload._id)]
            }
        case "INCREASE":
            state.cartItems[state.cartItems.findIndex(item => item._id === action.payload._id)].quantity++
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "DECREASE":
            state.cartItems[state.cartItems.findIndex(item => item._id === action.payload._id)].quantity--
            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "CHECKOUT":
            {

                if (orderCheckout(state.cartItems)) {
                    return {
                        cartItems: [],
                        checkout: true,
                        ...sumItems([]),
                    }

                }
                else {
                    return {
                        ...state,
                        ...sumItems(state.cartItems),
                        cartItems: [...state.cartItems]
                    }
                }
            }
        case "CLEAR":
            return {
                cartItems: [],
                ...sumItems([]),
            }
        default:
            return state

    }
}