
const Product = props => {
  const { product, AddItem } = props;

  return (
    <div className="product-container">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className='price'>${product.price}</div>
      
      <div>
        <button className='btn btn--add' onClick={() => AddItem(product)}> Add To Cart </button>
      </div>
    </div>
  );
}

export default Product;