import React from 'react'
import MenuItems from '../MenuItems/MenuItems'
import './MenuList.css'


const MenuList = ({ food }) => {

    return(
        
           
            <div className="menuList">
                    {
                        food.map((foods, i) => {
                            return (
                                
                                    <MenuItems 
                                    key={i}
                                    index={i}
                                    openModal={this.props.openModal}
                                    id={food[i].id} 
                                    name={food[i].name} 
                                    description={food[i].description}
                                    price={food[i].price}
                                    image={food[i].image}
                                    />
                            )
                        })
                    }

                    {console.log(MenuItems.index)}
            </div>
    )
}

export default MenuList