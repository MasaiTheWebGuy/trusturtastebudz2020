import React, { Component } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import SideMenu from '../SideMenu/SideMenu'

export default class Navigation extends Component {


    mobileNav = () => {
        var nav = document.querySelector("ul")
        if (nav.style.display === "block"){
            nav.style.display = "none";
        } else {
            nav.style.display = "block"
        }
    }    
    
    showMenu =() => { 
        var menu = document.getElementById('sidemenu')
        menu.classList.toggle("active")
        }

    scrollFunction = (event) => {

        let header = document.getElementsByClassName("topNav");
        let sticky = header.offsetTop;

        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
     }
    }
    
    render() {
        return (
            <div>
                <nav className="topNav" onScroll={this.scrollFunction}>
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
                            <img 
                            src="/Images/food-donation.svg" 
                            alt="cart"
                            onClick={this.showMenu}  
                            />
                        </div>    
                        <div className="nav"
                        onClick={this.mobileNav}
                        >
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <SideMenu />
                </nav>
                
            </div>
        )
    }
}
