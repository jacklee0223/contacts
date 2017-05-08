import axios from 'axios'

export const FETCH_CONTACTS = 'FETCH_CONTACTS'
const serviceURL = `https://wz2vh7su1d.execute-api.us-east-1.amazonaws.com/dev/contacts_api`;

export function fetchContacts() {
  const request = axios.get(serviceURL);

  return {
    type: FETCH_CONTACTS,
    payload: request
  }
}
