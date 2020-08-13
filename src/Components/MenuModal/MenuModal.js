import React, { Component } from 'react'

const MenuModal = ({ name, price, image }) => {
        return (
            <div>
                <div id="foodModal" className="modal">
                    <div className="modal-content">
                        <span className="close">&times;</span>
                    <div className="menu">
                        <div className="modal-pic">
                            <img src={this.image} alt="" className="food-pic" />
                        </div>
                        <div className="modal-food">
                            <h3 className="food-name">{this.name}</h3>
                            <span className="cart-price">{this.price}</span>
                        </div>
                        <div className="total">
                            <h3>Quantity:</h3>
                            <div className="counter">
                                <input type="number" value="1" className="cart-quantity-input" />
                            </div>
                            <button className="btn-purchase">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
        )
    }
}

export default MenuModal