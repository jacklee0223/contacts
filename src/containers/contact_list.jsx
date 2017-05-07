import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchContacts } from '../actions/fetch_contacts';

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.props.fetchContacts()
    .then((response) => {
      this.setState({contacts: response.payload.data})
    })
  }

  renderContact(contactData) {
    if ( !contactData ) {
      return <tbody></tbody>
    }

    const contactItems = contactData.map( contact => {
      const id = contact.id
      const first_name = contact.first_name;
      const last_name = contact.last_name;
      const dob = contact.dob;
      const notes = contact.notes;
      const phone = contact.phone;
      const email = contact.email;
			return (
        <tr key={ id }>
          <td>{ first_name }</td>
          <td>{ last_name }</td>
          <td>{ phone }</td>
          <td>{ email }</td>
          <td>{ dob }</td>
          <td>{ notes }</td>
        </tr>
			)
		} )


    return (
      <tbody>
        { contactItems }
      </tbody>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Note</th>
          </tr>
        </thead>
        { this.renderContact( this.state.contacts ) }
      </table>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchContacts }, dispatch)
}

export default connect(null, mapDispatchToProps)(ContactList)
