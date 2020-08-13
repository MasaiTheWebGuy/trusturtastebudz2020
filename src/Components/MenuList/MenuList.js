import React from 'react'
import MenuItems from '../MenuItems/MenuItems'

const MenuList = ({ food }) => {

    return(
        <div>
            {
                food.map((foods, i) => {
                return (
                <MenuItems 
                key={i} 
                id={food[i].id} 
                name={food[i].name} 
                description={food[i].description}
                price={food[i].price}
                image={food[i].image}
                />
                )
            })
        }
        </div>
    )
}

export default MenuList