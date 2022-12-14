import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
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
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;