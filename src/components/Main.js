import { Product } from './';

const Main = props => {
  const { products, AddItem } = props;

  return (
    <div className="cart-main">
      <h2> Products </h2>
      
      <div className="products-container">
          { products.map(product => (
              <Product key={product.id} product={product} AddItem={AddItem} />) )}
      </div>
    </div>
  );
}

export default Main