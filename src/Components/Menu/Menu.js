import React, { Component } from 'react'
import MenuList from '../MenuList/MenuList'
import './Menu.css'

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
        .then(foods => { this.setState({ food: foods })
        })
    } 

    render() {
        return (
            <div className="main-menu">
                <div >
                    <img src="/Images/TYTBsvg.svg" alt="" className="form-logo" />
                    <MenuList food={this.state.food}/>
                </div>
            </div>
        )
    }
}
