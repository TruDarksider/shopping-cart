const ShoppingCart = (props) =>{
    const { cartItems } = props;

    return (
        <div className="shoppingCart">
            <h3>I am cart</h3>
            <ul>
                {cartItems.map((item) => {
                    return <li key={item.id}>{item.name}</li>;
                })}
            </ul>
        </div>
    );
};

export default ShoppingCart;