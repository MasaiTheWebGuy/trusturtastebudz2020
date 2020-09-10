import React, { Component } from 'react'
import MenuList from '../MenuList/MenuList'
import './Menu.css'
import Modal from 'react-modal'

export default class Menu extends Component {

    constructor(){
        super()
        this.state = {
          food: [],
          isOpen: false,
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
                    />
                    <MenuList 
                    food={this.state.food}
                    isOpen={this.state.isOpen}
                    />
                </div>
            </div>
        )
    }
}
