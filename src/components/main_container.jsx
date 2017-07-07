import React, { Component } from 'react';
import SearchAddPane from './search_add_pane'
import ContactList from '../containers/contact_list'

export default class MainContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <SearchAddPane />
        <ContactList />
      </div>
    );
  }
}
