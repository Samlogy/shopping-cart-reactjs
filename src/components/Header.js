import { FiShoppingCart } from 'react-icons/fi';

const Header = props => {
  const { countCartItems } = props;

  return (
    <header className="cart-header">
      <a href="#/" className='cart-header__title'> <h1> Shopping Cart </h1> </a>
      
      <a href="#/cart" className='cart-header__basket'>
          <FiShoppingCart className='cart-header__icon' />
          { countCartItems ? ( <button className="cart-header__badge"> {countCartItems} </button> ) : '' }
        </a>
    </header>
  );
}

export default Header;