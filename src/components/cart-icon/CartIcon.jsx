import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";

import { createStructuredSelector } from 'reselect'
import { selectItemsCount } from 'redux/cart/cart.selectors'

import { connect } from "react-redux";

import { toggleCartHiddle } from "redux/cart/cart.actions";

const CartIcon = ({ toggleCartHiddle, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHiddle}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    itemCount: selectItemsCount
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHiddle: () => dispatch(toggleCartHiddle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
