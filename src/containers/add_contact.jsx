import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import popups from 'popups';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap'

import { createContact } from '../actions/create_contact';
import { fetchContacts } from '../actions/fetch_contacts';

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      dob: '',
      notes: ''
    };

    this.onAddContact = this.onAddContact.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onAddContact( event ) {
    event.preventDefault();
    const state = this.state;
    const data = {
      first_name: state.first_name,
      last_name: state.last_name,
      phone: state.phone,
      email: state.email,
      dob: state.dob,
      notes: state.notes,
    }

    const fields = [ 'first_name', 'last_name', 'dob', 'notes', 'phone', 'email' ]
    const missing_fields = fields.some( field => {
      return !data[ field ];
    } )

    if ( missing_fields ) {
      alert( "You have to fill out all inputs" );
      return;
    }

    this.props.createContact( data )
    .then((response) => {
      this.setState({
        contact: response.payload.data,
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        dob: '',
        notes: '',
        show: false
      })
    })
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
            <ControlLabel>First Name</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="First Name" name="first_name" inputRef={ref => { this.input = ref }} value={this.state.first_name} onChange={this.handleChange} />
          </FormGroup>
          {' '}
          <FormGroup className="add-contact-form" controlId="formInlineLastName">
            <ControlLabel>Last Name</ControlLabel>
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
            <FormControl type="text" placeholder="Notes" name="notes" inputRef={ref => { this.input = ref }} value={this.state.notes} onChange={this.handleChange} />
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
        <div className="add-contact-container">
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
        </div>
      );
    }
}

function mapStateToProps( { contact } ) {
  return { contact };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createContact }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContact)
