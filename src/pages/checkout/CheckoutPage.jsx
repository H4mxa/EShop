import React from 'react'

import { connect } from 'react-redux'

import CheckoutItem from 'components/checkout-item/CheckoutItem'

// ---------- SELECTOR -------------
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from 'redux/cart/cart.selectors'

import "./CheckoutPage.scss"

const CheckoutPage = ({ cartItems, total }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="heade-block">
                    <span>Product</span>
                </div>
                <div className="heade-block">
                    <span>Description</span>
                </div>
                <div className="heade-block">
                    <span>Quantity</span>
                </div>
                <div className="heade-block">
                    <span>Price</span>
                </div>
                <div className="heade-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem cartItem={cartItem} />
                ))
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
