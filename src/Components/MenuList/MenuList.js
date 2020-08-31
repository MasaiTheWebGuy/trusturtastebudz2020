import React from 'react'
import MenuItems from '../MenuItems/MenuItems'
import './MenuList.css'
import Modal from 'react-modal'

const MenuList = ({ food }) => {

    return(
        
           
            <div className="menuList">
                    {
                        food.map((foods, i) => {
                            return (
                                // <Modal
                                // className="modal"
                                // isOpen
                                // >  
                                    <MenuItems 
                                    key={i}
                                    index={i}
                                    id={food[i].id} 
                                    name={food[i].name} 
                                    description={food[i].description}
                                    price={food[i].price}
                                    image={food[i].image}
                                    />
                                // </Modal>
                            )
                        })
                    }
            </div>
    )
}

export default MenuList