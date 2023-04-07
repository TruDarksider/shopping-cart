import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import ShoppingCart from './ShoppingCart';

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

  function increaseItemQuantity(idToIncrease) {
       setCartItems(currItems => {
        if(!currItems.find(({id}) => id === idToIncrease)){
          return currItems.concat({id: item.id, quantity: item.quantity+1})
        } else {
          return currItems.map(item => {
            if (item.id === idToIncrease){
              return {...item, quantity: item.quantity+1}
            } else {
              return item
            }
          })
        }
      })
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
        default: console.log('This message will display twice');
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
