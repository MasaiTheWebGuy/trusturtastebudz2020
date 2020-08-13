import React, { Component } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    
    render() {
        return (
            <div>
                <nav>
                    <Link to="/home">
                        <div className="logo">
                            <img src="/Images/Logo.svg" alt="Logo" className="ttb"/>
                        </div>
                    </Link>
                    <ul>
                        <Link to="/home">
                         <li className="active">Menu</li>
                        </Link>
                        <Link to="/contact">
                         <li>Contact</li>
                        </Link>
                    </ul>
                    <div className="order">
                        <div>
                            <img src="/Images/food-donation.svg" alt=""  />
                        </div>    
                        <div className="nav">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
