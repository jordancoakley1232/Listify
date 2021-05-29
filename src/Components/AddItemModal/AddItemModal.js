import { useState } from 'react'
import Modal from "react-modal";
// CSS
import "./AddItemModal.scss"

// Parent = Shopping List
Modal.setAppElement('#root');

const AddItemModal = ({ modalIsOpen, setModalIsOpen, addItem }) => {
    const [itemName, setItemName] = useState()

    // functiont to add custom item to cart
    const addCustomItem = (e) => {
        addItem({ id: Math.floor(Math.random() * 100000) + 1, name: itemName, quantity: 1 });
        setItemName("");
        setModalIsOpen(false);
        e.preventDefault();
    }
    // function to handle change of input
    const handleChange = (e) => {
        setItemName(e.target.value);
    }
    return (
        <Modal className="Modal" overlayClassName="Overlay" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <div className="form-container">
                <form className="add-item-form" onSubmit={addCustomItem}>
                    <i className="fas fa-shopping-basket basket"></i>
                    <div className="item-name-container field">
                        <label className="item-name-label label">Enter Item Name:</label>
                        <input onChange={handleChange} type="text" className="name input" placeholder="Item Name"></input>
                    </div>
                    <div className="item-description-container field">
                        <label className="item-description-label label">Enter Item Description:</label>
                        <input type="text" className="name input" placeholder="Describe the Item"></input>
                    </div>
                    <button className="add-button" type="submit">Add Item</button>
                </form>
            </div>
        </Modal>
    )
}

export default AddItemModal
