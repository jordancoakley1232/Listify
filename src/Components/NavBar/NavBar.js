// import { useEffect } from 'react';
import './NavBar.scss'
import { Link } from 'react-router-dom';

// REDUX
import { connect } from "react-redux";


const NavBar = ({ currentCart }) => {
    // receives current cart and displays the length at the bottom
    return (
        <div className="nav-container">
            <div className="home-logo">
                <i className="fas fa-cart-plus"></i>
            </div>
            {/* Nav Items */}
            <ul className="nav-items">
                <li className="shopping-items">
                    <Link to='/'><i className="fas fa-tasks nav-item"></i></Link>
                </li>
                <li className="history">
                    <Link to='/history'><i className="fas fa-history nav-item"></i></Link>
                </li>
            </ul>
            {/* Cart Box */}
            <div className="cart-box">
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-count">{currentCart.currentCart.length}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentCart: state.currentCart
    }
}

export default connect(mapStateToProps)(NavBar)
