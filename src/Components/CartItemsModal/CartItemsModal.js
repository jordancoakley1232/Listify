import React from 'react';

import "./CartItemsModal.scss";
import Modal from "react-modal";

Modal.setAppElement('#root');


const CartItemsModal = ({ modalIsOpen, setModalIsOpen, cartToView }) => {
    return (
        <Modal className="Modal" overlayClassName="Overlay" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            {cartToView ?
                <div className="cart-info-container" style={{ height: "100%" }}>
                    <div className="cart-name">
                        <h2>{cartToView.shoppingCartName}...<span>({cartToView.status})</span></h2>
                    </div>
                    <div className="item-list-container" style={{ height: "90%" }}>
                        <ul className="item-list">
                            {cartToView.shoppingCartList.map(item => {
                                return <li key={item.id}>-{item.name} - {item.quantity}pcs</li>
                            })}

                        </ul>
                    </div>
                </div>
                : <h1>Cart Name</h1>
            }
        </Modal>
    )
}

export default CartItemsModal
