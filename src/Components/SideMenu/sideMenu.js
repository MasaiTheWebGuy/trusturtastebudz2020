import React, { Component } from 'react'

export default class sideMenu extends Component {
    render() {
        return (
            <div class="sidemenu" id="sidemenu">
                <span class="close" onclick="closeNav()">X</span>
                <div class="ordered-items"></div>
                <div class="cart-total">
                    <strong class="cart-total-title">Total</strong>
                    <span class="cart-total-price">$0</span>
                </div>
                <div class="checkout">
                    <button class="purchase-btn">Checkout</button>
                    <button>KEEP SHOPPING</button>
                </div>
            </div>
        )
    }
}
