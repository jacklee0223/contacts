import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createContact } from '../actions/create_contact';

import { Form, FormGroup, ControlLabel, FormControl, Button, Col } from 'react-bootstrap'

class AddContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onAddContact = this.onAddContact.bind(this);
  }

  render() {
    <Form horizontal>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl type="email" placeholder="Email" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Password
        </Col>
        <Col sm={10}>
          <FormControl type="password" placeholder="Password" />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">
            Sign in
          </Button>
        </Col>
      </FormGroup>
    </Form>
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ AddContactForm }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddContactForm)
