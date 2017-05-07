import axios from 'axios'

export const CREATE_CONTACT = 'CREATE_CONTACT'
const serviceURL = `https://tj74yz30z6.execute-api.us-east-1.amazonaws.com/dev/contacts_api`;

export function createContact( data ) {
  console.log( data )

  return {
    type: CREATE_CONTACT
  }
}
