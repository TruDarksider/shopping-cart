import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import ShoppingCart from './ShoppingCart';

/* Ways this can be better:
Amount in cart only updates on decrements or +Add to cart (so not increase)
There is no price total on cart (this is just another reduce function)
*/

//{id: 1, quantity: 0},{id: 2, quantity: 3},{id: 3, quantity: 2},{id: 4, quantity: 1}
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [item, setItem] = useState({});
  const [cartAction, setCartAction] = useState('');

    function cartActionHandler(e){
      const idForAction = Number(e.target.parentNode.parentNode.parentNode.firstChild.firstChild.getAttribute('name'));
      const itemInCart = cartItems.find(({id}) => id === idForAction );
      setItem( {
        id: idForAction,
        quantity: itemInCart ? itemInCart.quantity : 0
        });
      setCartAction(e.target.textContent);
    }

    function increaseItemQuantity(idToIncrease){
      if(cartItems.length===0){setCartItems([{id: item.id, quantity: item.quantity+1}])}
      for(let i=0;i<cartItems.length;i++){
        if(!(cartItems.find(({id}) => id === item.id))){
          setCartItems(cartItems.concat({id: item.id, quantity: item.quantity+1}));
        }
        if (cartItems[i].id===item.id){
          cartItems[i].quantity++
        }
      }
    }
  
    function decreaseItemQuantity(idToIncrease){
       setCartItems(currItems => {
        if(currItems.find(({id}) => id === idToIncrease)?.quantity === 1){
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

    function handleItemChange(action, itemId){
      switch (action){
        case 'Remove': removeFromCart(itemId); break;
        case '+': increaseItemQuantity(itemId); break;
        case '-': decreaseItemQuantity(itemId); break;
        case '+ Add To Cart': increaseItemQuantity(itemId); break;
        default: console.log('handleItemChange called with no matching case');
      }
    }

  //Things should fire when a button is clicked, which is always a cartAction
  useEffect(()=>{
    handleItemChange(cartAction, item.id);
    
  }, [cartAction, item] );

  

  return (
    <BrowserRouter>
      <Nav cartItems={cartItems}/>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/shop' exact element={<Shop cartActionHandler={cartActionHandler} cartItems={cartItems} />} />
        <Route path='/shoppingcart' element={
          <ShoppingCart 
            cartItems={cartItems}
          />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
