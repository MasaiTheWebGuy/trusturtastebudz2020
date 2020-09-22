import React from 'react'
import './MenuItems.css'

const MenuItems = ({ name, description, price, image, index }) => {
    
        return (
            <div>
                <div className="food"
                onClick={this.props.openModal}
                >
                    <div>
                        <img src={image} alt="" className="food-pic" />
                    </div>
                    <div className="food-descript">
                        <span className="food-name row">{name}</span><br />
                        <span className="food-desc row">{description}</span><br />
                        <span className="food-price row">${price}</span>
                    </div>
                </div>
                {console.log(index)}
            </div>
        )
}

export default MenuItems
