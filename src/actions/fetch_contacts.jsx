import axios from 'axios'

export const FETCH_CONTACTS = 'FETCH_CONTACTS'
const serviceURL = `https://5wgty5mn2i.execute-api.us-east-1.amazonaws.com/dev/contacts_api`;

export function fetchContacts() {
  const request = axios.get(`${ serviceURL }`);

  return {
    type: FETCH_CONTACTS,
    payload: request
  }
}
