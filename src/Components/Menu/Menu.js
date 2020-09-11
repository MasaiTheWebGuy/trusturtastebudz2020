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
          isOpen: true,
          order: {}
        }
      }
    
    componentDidMount(){
    fetch('http://localhost:3001/menu')
        .then(results => { return results.json()
        })
        .then(food => { this.setState({ food: food })
        })
    } 

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
                    />
                </div>
            </div>
        )
    }
}
