import React from 'react'
import './MenuItems.css'

const MenuItems = ({ name, description, price, image, }) => {
    
        return (
            <div>
                <div className="food">
                    <div id="pic">
                        <img src={image} alt="" className="food-pic" />
                    </div>
                    <div className="food-descript">
                        <span className="food-name row">{name}</span><br />
                        <span className="food-desc row">{description}</span><br />
                        <span className="food-price row">{price}</span>
                    </div>
                </div>
            </div>
        )
}

export default MenuItems
