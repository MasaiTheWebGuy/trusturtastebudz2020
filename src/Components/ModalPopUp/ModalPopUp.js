import React from 'react'


    const ModalPopUp = ({ name, price, image }) => {

        return (
            
                <div id="foodModal" className="modal">

                    <div className="modal-content">
                        <span className="close">&times;</span>
                    <div className="menu">
                        <div className="modal-pic">
                            <img src={image} alt="" className="food-pic" />
                        </div>
                        <div className="modal-food">
                            <h3 className="food-name">{name}</h3>
                            <span className="cart-price">{price}</span>
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

    export default ModalPopUp