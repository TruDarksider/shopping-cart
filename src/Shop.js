import items from './items.json'
//import { useState, useEffect } from 'react';

const Shop = (props) =>{
    const { cartActionHandler, cartItems } = props;
    

    /* function manualInputHandler(){
        console.log('Logic for manual quantity input needs to be implemented')
    } */

    function quantityInCart(itemId){
        const itemInCart = cartItems.find(({id}) => id === itemId );
        return itemInCart ? itemInCart.quantity : 0
    }
    
    return (
        <div>
            <h1>Test Shop Stock</h1>
            <div className="cardContainer">
            {items.map((item) => {
                return (
                    <div className="card">
                        <div className="cardHeader">
                            <h3 name={item.id} key={item.id}>{item.name}</h3>
                            <span>{item.price.toLocaleString('us-US', {style:'currency', currency:'USD'})}</span>
                        </div>
                        <p className='itemDesc'>{item.description}</p>
                        <div className="addToCart">
                        {quantityInCart(item.id) === 0 ? (
                            <div className='changeQuantity'>
                                <button onClick={cartActionHandler}>+ Add To Cart</button>
                            </div>
                        ) : 
                            (
                                <div className='changeQuantity'>
                                    <button onClick={cartActionHandler}>-</button>
                                        {/* <input type='number' value={quantityInCart(item.id)} onChange={manualInputHandler} /> */}
                                        <span className='quantity'>{quantityInCart(item.id)}</span>
                                    <button onClick={cartActionHandler}>+</button>
                                    <button className='btnRemove' onClick={cartActionHandler}>Remove</button>
                                </div>
                            )
                        }
                    </div>
                </div>
                );
            })}
            </div>
        </div>
    )
}

export default Shop;