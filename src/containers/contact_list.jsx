import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchContacts } from '../actions/fetch_contacts';

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.props.fetchContacts()

    this.sortTable = this.sortTable.bind(this);
  }

  sortTable(event) {
    const column = event.target.getAttribute('name');
    const sorted = this.props.contact[0].sort( ( a, b ) => {
      if(a[column] < b[column]) return -1;
      if(a[column] > b[column]) return 1;
      return 0;
    } );
    this.setState( { contacts: sorted } );
  }

  renderContact(contactData) {
    if ( !contactData ) {
      return <tbody></tbody>
    }

    const contactItems = contactData.map( contact => {
      const fields = [ 'first_name', 'last_name', 'dob', 'notes', 'phone', 'email' ]
      const missing_fields = fields.some( field => {
        return !contact[ field ];
      } )

      if ( missing_fields ) {
        return;
      }

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
            <th name="first_name" onClick={ this.sortTable }>First Name</th>
            <th name="last_name" onClick={ this.sortTable }>Last Name</th>
            <th name="phone" onClick={ this.sortTable }>Phone</th>
            <th name="email" onClick={ this.sortTable }>Email</th>
            <th name="dob" onClick={ this.sortTable }>DOB</th>
            <th name="notes" onClick={ this.sortTable }>Notes</th>
          </tr>
        </thead>
        { this.renderContact( this.props.contact[0] ) }
      </table>
    )
  }
}

function mapStateToProps( { contact } ) {
  return { contact };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchContacts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
