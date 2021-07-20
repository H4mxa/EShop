import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import "./CartIcon.scss"

import { connect } from 'react-redux'

import { toggleCartHiddle } from 'redux/cart/cart.actions'

const CartIcon = ({ toggleCartHiddle }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHiddle}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHiddle: () => dispatch(toggleCartHiddle())
})


export default connect(null, mapDispatchToProps)(CartIcon)
