import items from './items.json'

const ShoppingCart = (props) =>{
    const { cartItems } = props;
    let total = 0;
    for (const item of cartItems) {
        total += matchIdtoItem(item.id).price * item.quantity;
    }

    function matchIdtoItem(idToMatch){

        return cartItems.find(({id}) => id === idToMatch ) ? items[idToMatch-1] : null;
    }

    return (
            <div className="shoppingCart">
                <h1>Your Cart:</h1>
                <div className='cartDetails'>
                    {cartItems.map((cartItem) => {
                        return (
                        <div className='cartItemDetails'>
                            <h3 key={cartItem.id}>{matchIdtoItem(cartItem.id).name}</h3>
                                <div>{'Qty: ' + cartItem.quantity + ' at ' + matchIdtoItem(cartItem.id).price.toLocaleString('us-US', { style: 'currency', currency: 'USD' }) + '/ea'}
                                    <div className='subtotal'>
                                        <span>{(matchIdtoItem(cartItem.id).price * cartItem.quantity).toLocaleString('us-US', { style: 'currency', currency: 'USD' })}</span>
                                    </div>
                                </div>
                        </div>
                        );
                    })}
                </div>
                <div>
                    -------------------------------------------------------------------
                <h3>Total:
                    <div className='total'>{total.toLocaleString('us-US', { style: 'currency', currency: 'USD' })}</div>
                </h3>
                </div>
            </div>
    );
};

export default ShoppingCart;