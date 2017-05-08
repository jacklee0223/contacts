import axios from 'axios'

export const CREATE_CONTACT = 'CREATE_CONTACT'
const serviceURL = `https://wz2vh7su1d.execute-api.us-east-1.amazonaws.com/dev/contacts_api`;

export function createContact(data) {
  const request = axios.post(serviceURL, data);

  return {type: CREATE_CONTACT, payload: request}
}
