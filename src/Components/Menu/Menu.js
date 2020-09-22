import React, { Component } from 'react'
import MenuList from '../MenuList/MenuList'
import './Menu.css'
import Modal from 'react-modal'
import ModalPopUp from '../ModalPopUp/ModalPopUp'

Modal.setAppElement('#root');

export default class Menu extends Component {

    constructor(){
        super()
        this.state = {
          food: [],
          isOpen: false,
          order: {},
          foodModal: {}
        }
      }
    
    componentDidMount(){
    fetch('http://localhost:3001/menu')
        .then(results => { return results.json()
        })
        .then(food => { this.setState({ food: food })
        })
    }
    
    openModal = (key) => {
        const foodModal = { ...this.state.foodModal };
        foodModal[key] = key;
        this.setState({ foodModal });
        let isOpen = { ...this.state.isOpen };
        isOpen = true;
        this.setState({ isOpen });
      };

    render() {
        return (
            <div className="main-menu">
                <div >
                    <img src="/Images/TYTBsvg.svg" alt="" className="form-logo" />
                    <Modal
                    className="modal"
                    isOpen={this.state.isOpen}
                    >
                    <ModalPopUp />    
                    </Modal>
                    <MenuList 
                    food={this.state.food}
                    openModal={this.openModal}
                    />
                </div>
            </div>
        )
    }
}