import React, { Component } from 'react';
import '../style/main.css';

import Navbar from './navbar';
import ContactList from '../containers/contact_list'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ContactList />
      </div>
    );
  }
}
