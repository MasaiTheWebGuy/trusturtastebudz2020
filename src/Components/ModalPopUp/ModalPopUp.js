import React, { Component } from 'react'
import './ModalPopUp.css'

export default class ModalPopUp extends Component {
    render() {
        return (
            
                <div id="foodModal" className="modal">

                    <div className="modal-content">
                        <span className="close">&times;</span>
                    <div className="menu">
                        <div className="modal-pic">
                            <img src="/Images/IMG_12801.jpg" alt="" className="food-pic" />
                        </div>
                        <div className="modal-food">
                            <h3 className="food-name">General Tso w/ Fried Rice</h3>
                            <span className="cart-price">$18</span>
                        </div>
                        <div className="total">
                            <h3>Quantity:</h3>
                            <div className="counter">
                                <input type="number" value="defaultValue" className="cart-quantity-input" />
                            </div>
                            <button className="btn-purchase">ADD TO CART</button>
                        </div>
                    </div>
                    </div>

                </div>
        )
    }
}
