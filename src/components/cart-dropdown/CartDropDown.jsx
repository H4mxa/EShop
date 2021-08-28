import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "redux/cart/cart.selectors";

import { toggleCartHiddle } from "redux/cart/cart.actions";

import CustomButton from "components/custom-button/CustomButton";
import CartItem from "components/cart-item/CartItem";

import "./CartDropDown.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHiddle());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
