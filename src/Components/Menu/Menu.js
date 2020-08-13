import React, { Component } from 'react'
import MenuList from '../MenuList/MenuList'
import './Menu.css'

export default class Menu extends Component {

    constructor(){
        super()
        this.state = {
          food: []
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
            <div>
                <div className="main-menu">
                    <img src="/Images/TYTBsvg.svg" alt="" className="form-logo" />
                    <MenuList food={this.state.food}/>
                </div>
            </div>
        )
    }
}
