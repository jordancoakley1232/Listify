
import { ADD_ITEM_TO_CART, REDUCE_CART_ITEM, REMOVE_CART_ITEM, SET_CART_NAME, CLEAR_CART } from './CurrentCartActions'

// INITIAL STATE
const INITIAL_STATE = {
    currentCart: [],
    currentCartName: "Edit Cart Name..."
};

// REDUCER EXAMPLE
export const currentCartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADD_ITEM_TO_CART:
            let { id, name } = action.payload;

            // set value to check if item is included
            let included = false;
            // loop through array and check if id is in the objects
            for (let i = 0; i <= state.currentCart.length; i++) {
                if (!state.currentCart[i]) {
                    break
                }
                if (state.currentCart[i].id === id) {
                    included = true
                }
            }
            if (!included) {
                return { ...state, currentCart: [...state.currentCart, { id: id, name: name, quantity: 1 }] }
            };
            if (included) {
                return {
                    ...state, currentCart: state.currentCart.map(item => {
                        if (item.id === action.payload.id) {
                            item.quantity = item.quantity + 1
                        }
                        return item
                    })
                }
            };
        case REMOVE_CART_ITEM:
            return { ...state, currentCart: state.currentCart.filter(item => item.id !== action.payload.id) };
        case REDUCE_CART_ITEM:
            return {
                ...state, currentCart: state.currentCart.map(item => {
                    if (item.quantity > 1 && item.id === action.payload.id) {
                        item.quantity = item.quantity - 1;
                    }
                    return item
                })
            };
        case SET_CART_NAME:
            return { ...state, currentCartName: action.payload };
        case CLEAR_CART:
            return { currentCart: [], currentCartName: "Edit Cart Name..." }
        default:
            return state
    }
}




