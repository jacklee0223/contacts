import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap'

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <FormGroup controlId="formBasicText" className="search-input">
            <FormControl
              type="text"
              placeholder="Search"
            />
          </FormGroup>
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        </form>
      </div>
    )
  }
}

export default connect(null, null)(SearchBar)
