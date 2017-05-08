import React, { Component } from 'react';
import '../style/main.css';

import Navbar from './navbar';
import ContactList from '../containers/contact_list'
import AddContact from '../containers/add_contact'
import SearchBar from '../containers/search_bar'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchBar />
        <AddContact />
        <ContactList />
      </div>
    );
  }
}
