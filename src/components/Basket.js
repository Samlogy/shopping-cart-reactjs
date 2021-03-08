import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Basket = props => {
  const { cartItems, AddItem, RemoveItem } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  
  const checkout = () => {
    alert('Implement Checkout!');
  }

  return (
    <div className="basket-container">
      <h2> Cart Items </h2>

      <div>
        {cartItems.length === 0 && <div> Cart is empty </div> }

        {cartItems.map(item => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.name} className='item__img' />
            <div className="item__name"> {item.name} </div>
            

            <div className="item__actions">
              <AiOutlinePlus onClick={() => AddItem(item)} className="btn btn--add" />
              <AiOutlineMinus onClick={() => RemoveItem(item)} className="btn btn--remove" />
            </div>

            <div className="item__price-quantity">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="item__price-brut">
              <div className="">Items Price</div>
              <div className="">${itemsPrice.toFixed(2)}</div>
            </div>

            <div className="item__price-tax">
              <div className="">Tax Price</div>
              <div className="">${taxPrice.toFixed(2)}</div>
            </div>

            <div className="item__price-shipping">
              <div className="">Shipping Price</div>
              <div className=""> ${shippingPrice.toFixed(2)} </div>
            </div>
            
            <hr />

            <div className="item__price-total">
              <div className="">
                <strong> Total Price </strong>
              </div>

              <div className="">
                <strong> ${totalPrice.toFixed(2)} </strong>
              </div>
            </div>
            <hr />

            <div className="checkout">
              <button className='btn btn--checkout' onClick={() => checkout()}>
                  CHECKOUT
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Basket;