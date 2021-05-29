import { useState } from "react";
import './ShoppingList.scss';
// Redux
import { connect } from "react-redux"

// Components
import CartItems from "../CartItems/CartItems";
import { addItemToCart, reduceCartItem, removeCartItem, setCartName, clearCart } from '../../Redux/CurrentCart/CurrentCartActions';
import { addCart } from "../../Redux/CartHistory/cartHistoryActions";
// Modal
import AddItemModal from "../AddItemModal/AddItemModal";
const ShoppingList = ({ currentCart, removeItem, reduceItem, addItem, setCartName, cartHistory, addCart, clearCart }) => {
    // State to determing if input or cart name is displayed;
    const [editName, setEditName] = useState(false);
    // Cart Name state
    const [listName, setListName] = useState("");
    // Modal State
    const [modalIsOpen, setModalIsOpen] = useState(false)

    // Set Cart Name and Close input
    const handleName = () => {
        setEditName(false);
        setCartName(listName);
    }

    return (
        <div className="shopping-list">
            <div className="addItems-helper">
                {/* <img src="" alt="Ketchup Image"></img> */}
                <p>Don't find what you need?</p>
                <button onClick={() => setModalIsOpen(true)} className="add-btn">Add Item</button>
            </div>
            {/* Shopping List Name */}
            <div className="shopping-list-name">
                {!editName ?
                    <>
                        {/* <h3>{currentCart.currentCartName}</h3> */}
                        <h3>{currentCart.currentCartName}</h3>
                        <div className="edit-name-container">
                            <i className="fas fa-pencil-alt" onClick={() => setEditName(true)}></i>
                        </div>
                    </>
                    : <> <input className="edit-cart-name" onChange={(e) => setListName(e.target.value)}></input>
                        <div className="edit-name-container">
                            <i className="fas fa-check" onClick={handleName}></i>
                        </div> </>}

            </div>
            <CartItems currentCart={currentCart} removeItem={removeItem} reduceItem={reduceItem} addItem={addItem} addCart={addCart} cartHistory={cartHistory} clearCart={clearCart} setListName={setListName} />
            <AddItemModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} addItem={addItem} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentCart: state.currentCart,
        cartHistory: state.cartHistory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItemToCart(item)),
        removeItem: (item) => dispatch(removeCartItem(item)),
        reduceItem: (itemToReduce) => dispatch(reduceCartItem(itemToReduce)),
        setCartName: (name) => dispatch(setCartName(name)),
        clearCart: () => dispatch(clearCart()),
        addCart: (cart) => dispatch(addCart(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)
