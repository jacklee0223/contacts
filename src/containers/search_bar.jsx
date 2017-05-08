import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Form
} from 'react-bootstrap'

import {searchContacts} from '../actions/search_contacts';
import {resetSearch} from '../actions/reset_search';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {keyword: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onInputChange( event ) {
    const inputValue = event.target.value;
    this.setState( { keyword: inputValue } )
    if ( inputValue === "" ) {
      this.props.resetSearch( this.state.default_contact );
    }
  }

  onSearch( event ) {
    event.preventDefault();
    this.setState( {default_contact: this.props.contact} )
    this.props.searchContacts(this.state.keyword)
  }

  preventDefault( event ) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup controlId="formBasicText" className="search-input">
            <FormControl
              type="text"
              placeholder="Search"
              onChange={this.onInputChange}
            />
          </FormGroup>
          <button
            type="submit"
            onClick={this.onSearch}
          >
            <span
              className="glyphicon glyphicon-search"
              aria-hidden="true"
              ></span>
          </button>
      </Form>
      </div>
    )
  }
}

function mapStateToProps({contact}) {
  return {contact};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    searchContacts,
    resetSearch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
