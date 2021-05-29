import React from 'react';
import './Home.scss';
// Redux
import { connect } from "react-redux";
import { addItemToCart } from "../../Redux/CurrentCart/CurrentCartActions"

// Components
import ItemList from '../../Components/ItemList/ItemList';

const Home = ({ shoppingItems, addItem, currentCart }) => {
    return (
        <div className="main-content">
            <h2 className="heading">
                <span>Listify</span> allows you to take your shopping list wherever you go
            </h2>
            <ItemList shoppingItems={shoppingItems.shoppingItemsDetails} addItem={addItem} currentCart={currentCart} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        shoppingItems: state.shoppingItems,
        currentCart: state.currentCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItemToCart(item))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)
