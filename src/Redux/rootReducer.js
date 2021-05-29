import { combineReducers } from "redux";
import { shoppingItemsReducer } from "./ShoppingItems/ShoppingItemsReducer";
import { currentCartReducer } from './CurrentCart/CurrentCartReducer';
import { cartHistoryReducer } from './CartHistory/cartHistoryReducer';


const rootReducer = combineReducers({
    shoppingItems: shoppingItemsReducer,
    currentCart: currentCartReducer,
    cartHistory: cartHistoryReducer
})


export default rootReducer