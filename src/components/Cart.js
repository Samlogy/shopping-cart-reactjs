import { useState } from 'react';

import { Header, Main , Basket } from './';
import data from '../data';

const Cart = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const AddItem = product => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) setCartItems( cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x ));
    else setCartItems([...cartItems, { ...product, qty: 1 }]);
  };

  const RemoveItem = product => {
    const exist = cartItems.find((x) => x.id === product.id);
    
    if (exist.qty === 1) setCartItems(cartItems.filter((x) => x.id !== product.id));
    else setCartItems( cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x ) );
  };
  
  return (
    <div className="App">
      <Header countCartItems={cartItems.length} />
      
      <div className="row">
        <Main products={products} onAdd={AddItem} />
        <Basket cartItems={cartItems} onAdd={AddItem} onRemove={RemoveItem} />
      </div>
    </div>
  );
}

export default Cart;