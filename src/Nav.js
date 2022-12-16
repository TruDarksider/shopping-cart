import React from 'react';
import { Link } from 'react-router-dom';
import {useShoppingCart} from './App'

function Nav() {
    const {openCart, cartQuantity} = useShoppingCart();
    return (
        <nav>
            <h3>Test Shop</h3>
            <ul className='nav-links'>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link to='/shoppingcart'>
                    <button onClick={openCart}>Cart</button>
                    <div className='cartCount'>{cartQuantity}</div>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;