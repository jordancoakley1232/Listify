import React from 'react';
// Components
import HistoryList from "../../Components/HistoryList/HistoryList";

// Redux
import { connect } from "react-redux";

// Actions
import { toggleDropdown, setStatus, removeCart } from "../../Redux/CartHistory/cartHistoryActions"

import "../Home/Home.scss"

const History = ({ history, toggleDrop, toggleStatus, cancelCart }) => {
    return (
        <div className="main-content" style={{ width: "100%" }}>
            <h2 className="heading">
                Your <span>Listify</span> History
            </h2>
            <HistoryList history={history} toggleDrop={toggleDrop} toggleStatus={toggleStatus} cancelCart={cancelCart} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        history: state.cartHistory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDrop: (cart) => dispatch(toggleDropdown(cart)),
        toggleStatus: (cart) => dispatch(setStatus(cart)),
        cancelCart: (cart) => dispatch(removeCart(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
