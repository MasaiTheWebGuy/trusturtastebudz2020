import React, { Component } from 'react'
import './Contact.css'
import Navigation from '../Navigation/Navigation'
import axios from 'axios'

export default class Contacts extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:'',
            email:'',
            message:''
        }

        this.formSubmit = this.formSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleMessageChange = this.handleMessageChange.bind(this)
    }

    handleNameChange = (event) => {this.setState({name: event.target.value})
    }

    handleEmailChange = (event) => {this.setState({ email: event.target.value})
    }

    handleMessageChange = (event) => {this.setState({ message: event.target.value})
    }



    async formSubmit(e){
        e.preventDefault();

       

        const { name, email, message } = this.state
      
        axios.post("http://localhost:3001/contact", {
            name,
            email,
            message
          });
       
    }




    render() {
        return (
            <div>
                <Navigation />

                <h3>Contact Us</h3>
                <p>If you are looking to get a quote on Catering Services or have general questions, shoot me an email! I will get back to you as soon as I can. <br /><br />Thanks for reaching out!</p>
            
                <form onSubmit={this.formSubmit }>
                    <img src="/Images/TYTBsvg.svg" alt="logo" />
                    <label htmlFor="Name">Name</label>
                    <input 
                    type="text" required
                    value={this.state.name} 
                    placeholder="Name"
                    name="name"
                    onChange={this.handleNameChange}
                    />
                    <br />
                    <label htmlFor="Email">Email</label>
                    <input type="text" required 
                    placeholder="Email" 
                    name="mail" 
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    />
                    <br />
                    <textarea
                    id="Subject" 
                    placeholder="Message"
                    name={this.state.message}
                    onChange={this.handleMessageChange}
                    ></textarea>
                    <br />
                    <button type="submit" name="submit"> Send Mail </button>
                </form>
                <div className="media">
                    <img src="/Images/facebook.png" alt="facebook"/>
                    <img src="/Images/instagram.png" alt="instagram"/>
                    <img src="/Images/gmail.png" alt="gmail"/>
                </div>
            </div>
        )
    }
}
