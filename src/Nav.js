import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    const { cartItems } = props;
    
    const quantity = cartItems.reduce(function(quantity, item){ return item.quantity + quantity}, 0);
    
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
                    <div>Cart</div>
                    <div className='cartCount'>{quantity}</div>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;