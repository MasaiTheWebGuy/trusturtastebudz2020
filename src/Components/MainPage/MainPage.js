import React, { Component } from 'react'
import Menu from '../Menu/Menu'
import Navigation from '../Navigation/Navigation'

export default class MainPage extends Component {
    
    render() {
        return (
            <div>
                <Navigation />
                
                <section className="mid">
                    <p>Welcome to Trust Ur Tastebudz</p>
                    <p>Place your order online to have your food delivered on Weds & Sats</p>
                    <p>We will meet at a central location in Charlotte</p>
                </section>
                <section className="btm">
                    <h3>Today's Menu</h3>
                    
                   <Menu />
                </section>    
            </div>
        )
    }
}
