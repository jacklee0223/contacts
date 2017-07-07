import React, { Component } from 'react';
import AddContact from '../containers/add_contact'
import SearchBar from '../containers/search_bar'

export default class SearchAddPane extends Component {
  render() {
    return (
      <div className="search-add-pane">
        <SearchBar />
        <AddContact />
      </div>
    );
  }
}
