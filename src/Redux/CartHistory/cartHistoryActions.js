export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN";
export const SET_STATUS = "SET_STATUS";


export const addCart = (cart) => {
    return {
        type: ADD_CART,
        info: "Action to add current cart to cart history",
        payload: cart
    }
}

export const removeCart = (cart) => {
    return {
        type: REMOVE_CART,
        info: "Action to remove cart from cart history",
        payload: cart
    }
}

export const toggleDropdown = (cart) => {
    return {
        type: TOGGLE_DROPDOWN,
        info: "Action to toggle dropdown",
        payload: cart
    }
}

export const setStatus = (cart) => {
    return {
        type: SET_STATUS,
        info: "Action to set status of cart",
        payload: cart
    }
}