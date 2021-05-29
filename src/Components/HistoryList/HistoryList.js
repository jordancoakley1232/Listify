import { useState } from 'react';
import "./HistoryList.scss"
// Modal Componant
import CartItemsModal from "../CartItemsModal/CartItemsModal"

// Parent Component = History Page
const HistoryList = ({ history, toggleDrop, toggleStatus, cancelCart }) => {
    // const [options, setOptions] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [cartToView, setCartToView] = useState();


    // function to open options (completed, cancelled, view cart)
    // const openOptions = () => {
    //     setOptions(!options);
    // }
    // function to open modal and view cart items
    const openModal = (cart) => {
        setCartToView(cart);
        setModalIsOpen(true);
        toggleDrop(cart)
    }

    return (
        <div className="history" style={{ marginLeft: "1rem" }}>
            {history.cartHistory ?
                history.cartHistory.map(cart => {
                    return <div className="cart" key={cart.id}>
                        <p className="cart-name">{cart.shoppingCartName}</p>
                        <p className="cart-quantity">{cart.shoppingCartList.length} Items</p>
                        <div className="cart-right">
                            <i className="far fa-calendar-alt"></i>
                            <p>Thu May 13 2021</p>
                        </div>
                        <p style={{ background: cart.status === "completed" ? "#99cc0b" : "#9f0bcc" }} className="status">{cart.status}</p>
                        <i onClick={() => toggleDrop(cart)} className="fas fa-chevron-down dropdown"></i>
                        {cart.dropdown ?
                            <ul className="dropdown-menu">
                                <li onClick={() => toggleStatus(cart)} className="dropdown-option completed">Completed</li>
                                <li onClick={() => cancelCart(cart)} className="dropdown-option cancelled">Cancelled</li>
                                <li onClick={() => openModal(cart)} className="dropdown-option view-cart">View Cart</li>
                            </ul>
                            : <></>}

                    </div>
                })
                : <div>No Cart</div>}
            <CartItemsModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} cartToView={cartToView} />

        </div>
    )
}

export default HistoryList
