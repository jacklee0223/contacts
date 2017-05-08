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

export default connect(null, null)(SearchBar)
