import items from './items.json'

const Shop = (props) =>{
    const { cartItems } = props;

    const quantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
      );
    return (
        <div>
            <h1>I am Shop Page</h1>
            <div className="cardContainer">
            {items.map((item) => {
                return (
                    <div className="card">
                        <div className="cardHeader">
                            <h3 key={item.id}>{item.name}</h3>
                            <span>${item.price}</span>
                        </div>
                        <p>{item.description}</p>
                        <div className="addToCart">
                        {quantity === 0 ? (
                            <button>+ Add To Cart</button>
                        ) : 
                            (
                                <div className='changeQuantity'>
                                    <button>-</button>
                                    <input type='number' value={quantity} />
                                    <button>+</button>
                                    <button>Remove</button>
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