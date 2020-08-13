import React, { Component } from 'react'
import './Contact.css'
import Navigation from '../Navigation/Navigation'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <Navigation />

                <h3>Contact Us</h3>
                <p>If you are looking to get a quote on Catering Services or have general questions, shoot me an email! I will get back to you as soon as I can. <br /><br />Thanks for reaching out!</p>
            
                <form action="mailto:maietry@gmail.com" method="post" enctype="text/plain">
                    <img src="/Images/TYTBsvg.svg" alt="logo" />
                <label for="Name">Name</label>
                    <input type="text" required placeholder="Name" name="name" />
                    <br />
                    <label for="Email">Email</label>
                    <input type="text" required placeholder="Email" name="mail" />
                    <br />
                    <label for="Name">Subject</label>
                    <input type="text" name="subject" placeholder="Subject" />
                    <br />
                    <textarea name="message" id="Subject" placeholder="Message"></textarea>
                    <br />
                    <button type="submit" name="submit"> Send Mail </button>
                </form>
            </div>
        )
    }
}
