
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const REDUCE_CART_ITEM = "REDUCE_CART_ITEM";
export const SET_CART_NAME = "SET_CART_NAME";
export const CLEAR_CART = "CLEAR_CART"




// // ACTION CREATORS
export const addItemToCart = (item) => {
    return {
        type: ADD_ITEM_TO_CART,
        info: 'Action to add a item top cart, and also increase quantity by one, if already exists on cart',
        payload: item
    }
}

export const removeCartItem = (item) => {
    return {
        type: REMOVE_CART_ITEM,
        info: "This action is used to remove the item from cart completely",
        payload: item
    }
}

export const reduceCartItem = (itemToReduce) => {
    return {
        type: REDUCE_CART_ITEM,
        info: "This action is used to reduce the item from cart.",
        payload: itemToReduce
    }
}

export const setCartName = (name) => {
    return {
        type: SET_CART_NAME,
        info: "This action is used to set the name of the current cart",
        payload: name
    }
};

export const clearCart = () => {
    return {
        type: CLEAR_CART,
        info: "This action is used to clear the cart"
    }
}





