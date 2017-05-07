import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchContacts } from '../actions/fetch_contacts';

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.props.fetchContacts()
    .then((response) => {
      this.setState({contacts: response.payload.data})
    })
  }

  renderContact(contactData) {
    if ( !contactData ) {
      return <tbody></tbody>
    }

    console.log(contactData.first_name)
    const contactItems = contactData.map( contact => {
      const id = contact.id
      const first_name = contact.first_name;
      const last_name = contact.last_name;
      const dob = contact.dob;
      const note = contact.note;
      const phone = contact.phone;
      const email = contact.email;
			return (
        <tr key={ id }>
          <td>{ first_name }</td>
          <td>{ phone }</td>
          <td>{ email }</td>
          <td>{ dob }</td>
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
    console.log(this.state)
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
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

// this container doesn't care about recux maintaining this components state (null)
export default connect(null, mapDispatchToProps)(ContactList)
