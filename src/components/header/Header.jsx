import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

// ------------ Firebase --------------
import { auth } from "firebase/firebase.utils";

import { ReactComponent as Logo } from "assets/eshop.svg";
import CartIcon from 'components/cart-icon/CartIcon'
import CartDropDown from 'components/cart-dropdown/CartDropDown'

import "./header.scss";

const Header = ({ currentUser, hidden }) => {
  debugger
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/shop' className='option'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {
        hidden ? null : <CartDropDown />
      }
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);
