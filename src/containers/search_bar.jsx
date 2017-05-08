import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap'

import {searchContacts} from '../actions/search_contacts';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {keyword: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onInputChange( event ) {
    this.setState( { keyword: event.target.value } )
  }

  onSearch() {
    this.props.searchContacts(this.state.keyword)
  }

  render() {
    return (
      <div>
        <form>
          <FormGroup controlId="formBasicText" className="search-input">
            <FormControl
              type="text"
              placeholder="Search"
              onChange={this.onInputChange}
            />
          </FormGroup>
          <span
            className="glyphicon glyphicon-search"
            aria-hidden="true"
            onClick={this.onSearch}
          ></span>
        </form>
      </div>
    )
  }
}

function mapStateToProps({contact}) {
  return {contact};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    searchContacts
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
