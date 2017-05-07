import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import popups from 'popups';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap'

import { createContact } from '../actions/create_contact';

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      dob: '',
      note: '',
    };

    this.onAddContact = this.onAddContact.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onAddContact( event ) {
    event.preventDefault();
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }

  renderForm() {
      return (
        <Form inline>
          <FormGroup className="add-contact-form" controlId="formInlineFirstName">
            <ControlLabel bsSize="small">First Name</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="First Name" name="first_name" inputRef={ref => { this.input = ref }} value={this.state.first_name} onChange={this.handleChange} />
          </FormGroup>
          {' '}
          <FormGroup className="add-contact-form" controlId="formInlineLastName">
            <ControlLabel bsSize="small">Last Name</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="Last Name" name="last_name" inputRef={ref => { this.input = ref }} value={this.state.last_name} onChange={this.handleChange} />
          </FormGroup>
          {' '}
          <FormGroup className="add-contact-form" controlId="formInlinePhone">
            <ControlLabel>Phone</ControlLabel>
            {' '}
            <FormControl type="tel" placeholder="Phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
          </FormGroup>
          {' '}
          <FormGroup className="add-contact-form" controlId="formInlineEmail">
            <ControlLabel>Email</ControlLabel>
            {' '}
            <FormControl type="email" placeholder="Email" name="email" inputRef={ref => { this.input = ref }} value={this.state.email} onChange={this.handleChange} />
          </FormGroup>
          {' '}
          <FormGroup className="add-contact-form" controlId="formInlineDOB">
            <ControlLabel>Date of Birth</ControlLabel>
            {' '}
            <FormControl type="date" placeholder="Date of Birth" name="dob" inputRef={ref => { this.input = ref }} value={this.state.dob} onChange={this.handleChange} />
          </FormGroup>
          {' '}
          <FormGroup className="add-contact-form" controlId="formInlineNote">
            <ControlLabel>Note</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="Note" name="note" inputRef={ref => { this.input = ref }} value={this.state.note} onChange={this.handleChange} />
          </FormGroup>
          {' '}
          <Button
            type="submit"
            onClick={ this.onAddContact }
            >
            Add Contact
          </Button>
        </Form>
      )
  }

  render() {
      let close = () => this.setState({ show: false});

      return (
        <div className="modal-container">
          <Button
            bsStyle="primary"
            bsSize="small"
            onClick={() => this.setState({ show: true})}
          >
            Add Contact
          </Button>

          <Modal
            show={this.state.show}
            onHide={close}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">Add Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              { this.renderForm() }
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ AddContact }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddContact)
