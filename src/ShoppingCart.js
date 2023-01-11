import items from './items.json'

const ShoppingCart = (props) =>{
    const { cartItems } = props;

    function matchIdtoItem(idToMatch){

        return cartItems.find(({id}) => id === idToMatch ) ? items[idToMatch-1].name : null;
    }

    return (
            <div className="shoppingCart">
                <h3>I am cart</h3>
                <div className='cartDetails'>
                    {cartItems.map((cartItem) => {
                        return (
                        <div className='cartItemDetails'>
                            <h2 key={cartItem.id}>{matchIdtoItem(cartItem.id)}</h2>
                            <div>{'Qty: ' + cartItem.quantity}</div>
                        </div>
                        );
                    })}
                </div>
            </div>
    );
};

export default ShoppingCart;