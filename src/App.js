import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
//import React, { useEffect, useState} from 'react';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import ShoppingCart from './ShoppingCart';
import { useState } from 'react';

/*WHERE YOU LEFT OFF
https://www.youtube.com/watch?v=lATafp15HWA video for reference. Make it to 44min mark
shoppingCart should become a factory function with all logic (probably)
everything displayed until logic for opening/closing cart was added into ShoppingCart.js
*/

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [item, setItem] = useState({});

  const openCart = () => setCartOpen(true)
  const closeCart = () => setCartOpen(false)

  function getItemQuantity(idForQuantity){
    return cartItems.find(item=>item.id === idForQuantity)?.quantity || 0
  }

  function increaseItemQuantity(idToIncrease){
    setCartItems(currItems => {
      if(currItems.find(item => item.id === idToIncrease) == null){
        return [...currItems, {id: item.id, quantity: 1}]
      } else {
        if (item.id===idToIncrease){
          return {...item, quantity: item.quantity+1}
        } else {
          return item
        }
      }
    })
  }

  function decreaseItemQuantity(idToIncrease){
    setCartItems(currItems => {
      if(currItems.find(item => item.id === idToIncrease)?.quantity === 1){
        return currItems.filter(item=>item.id !== idToIncrease)
      } else {
        return currItems.map(item => {
          if (item.id === idToIncrease){
            return {...item, quantity: item.quantity-1}
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(idToRemove){
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== idToRemove)
    });
  }

  function handleItemChange(e){
    setItem(
      {
        id: e.target.id,
        quantity: e.target.quantity
      }
    )
  }

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/shop' exact element={<Shop cartItems={cartItems} />} />
        <Route path='/shoppingcart' element={<ShoppingCart cartItems={cartItems} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
