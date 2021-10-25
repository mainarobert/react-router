import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';


// With router react intercepts the html fie after being sent to the server so that it doesn't get sent again inorder to access other pages

export class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className= "App">
          <Navbar />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contacts} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App