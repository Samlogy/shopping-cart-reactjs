import { FiShoppingCart } from 'react-icons/fi';

const Header = props => {
  const { countCartItems } = props;

  return (
    <header className="cart-header">
      <a href="#/"> <h1> Shopping Cart </h1> </a>
      
      <a href="#/cart">
          <FiShoppingCart /> {' '}
          { countCartItems ? ( <button className="badge"> {countCartItems} </button> ) : ( '' ) }
        </a> {' '}
    </header>
  );
}

export default Header;