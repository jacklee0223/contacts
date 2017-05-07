import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createContact } from '../actions/create_contact';

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onAddContact = this.onAddContact.bind(this);
  }

  onAddContact( event ) {
    event.preventDefault();
    this.props.createContact( { testing: 'click' } )
  }

  render() {
    return (
      <button
        onClick={ this.onAddContact }
        >
        button
      </button>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ AddContact }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddContact)
