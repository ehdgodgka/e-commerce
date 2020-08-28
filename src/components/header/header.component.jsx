import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

import { auth } from '../../utils/firebase.utils';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const Header = ({ currentUser, toggleCartHidden, cartHidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <>
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
          <CartIcon toggleCartHidden={toggleCartHidden} />
          {!cartHidden && <CartDropDown />}
        </>
      ) : (
        <Link className='option' to='signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  cartHidden: hidden
});
const mapDispatchToProps = (dispatch) => ({ toggleCartHidden: () => dispatch(toggleCartHidden()) });

export default connect(mapStateToProps, mapDispatchToProps)(Header);
