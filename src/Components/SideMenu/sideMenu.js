import React, { Component } from 'react'
import './SideMenu.css'

export default class sideMenu extends Component {


    closeOrder = () =>{
        var menu = document.getElementById('sidemenu')
        menu.classList.toggle("active")
    }


    render() {

        return (
            <div className="sidemenu" id="sidemenu">
                <span className="close" onClick={this.closeOrder}>X</span>
                <div className="ordered-items"></div>
                <div className="cart-total">
                    <strong className="cart-total-title">Total</strong>
                    <span className="cart-total-price">$0</span>
                </div>
                <div className="checkout">
                    <button className="purchase-btn">Checkout</button>
                    <button className="keep-shop">KEEP SHOPPING</button>
                </div>
            </div>
        )
    }
}
