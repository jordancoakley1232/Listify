import { ADD_CART, REMOVE_CART, TOGGLE_DROPDOWN, SET_STATUS } from "./cartHistoryActions";


const INITIAL_STATE = {
    cartHistory: [],
}

const generateId = () => {
    return Math.floor(Math.random() * 100000) + 1;
}

export const cartHistoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CART:
            return { cartHistory: [...state.cartHistory, { date: new Date(), id: generateId(), status: "pending", shoppingCartName: action.payload.currentCartName, shoppingCartList: action.payload.currentCart, dropdown: false }] };
        case TOGGLE_DROPDOWN:
            return {
                cartHistory: state.cartHistory.map(cart => {
                    if (cart.id === action.payload.id) {
                        cart.dropdown = !cart.dropdown;
                    }
                    return cart;
                })
            }
        case SET_STATUS:
            return {
                cartHistory: state.cartHistory.map(cart => {
                    if (cart.id === action.payload.id) {
                        cart.status = "completed";
                        cart.dropdown = !cart.dropdown
                    }
                    return cart;
                })
            };
        case REMOVE_CART:
            return {
                cartHistory: state.cartHistory.filter(cart => {
                    return cart.id !== action.payload.id
                })
            }
        default:
            return state;
    }
}

