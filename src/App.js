import React, { Component } from 'react';
import './App.css';
import FrontPage from './Components/FrontPage/FrontPage'
import MainPage from './Components/MainPage/MainPage'
import Contact from './Components/Contacts/Contacts'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">
          
          <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route path="/home" exact component={MainPage} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </div>
      </Router>  
    );
  }
}

export default App;
