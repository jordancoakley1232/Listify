import './CartItems.scss';



// PROPS FROM SHOPPING LIST COMPONENT
const CartList = ({ currentCart, removeItem, reduceItem, addItem, addCart, cartHistory, clearCart, setListName }) => {

    // Functiont to submit cart to history store
    const submitCart = (cart) => {
        addCart(cart);
        clearCart();
        setListName("Edit Cart Name")
    }



    return (
        <>
            {currentCart.currentCart.length ?
                <div className="cart-list">
                    {currentCart.currentCart.map(item => {
                        return <div key={item.id} className="cart-item">
                            <p className="item-name">{item.name}</p>
                            <div className="cart-item-details">
                                <i className="fas fa-trash trash" onClick={() => removeItem(item)}></i>
                                <i className="fas fa-minus-circle reduce" onClick={() => reduceItem(item)}></i>
                                <p className="quantity" onClick={() => console.log(item)}>{item.quantity}</p>
                                <i className="fas fa-plus-circle add" onClick={() => addItem(item)}></i>
                            </div>
                        </div>
                    })}
                    <div className="save-btn-container">
                        <button className="save-btn" style={{ padding: "0.5rem" }} onClick={() => submitCart(currentCart)}>
                            Save Cart
                        </button>
                    </div>
                </div>
                : <> <p className="empty-message">Cart is Empty!</p>
                    <div className="cart-illistration">
                        <i className="fas fa-shopping-basket basket"></i>
                    </div> </>}
        </>
    )
}



export default CartList
