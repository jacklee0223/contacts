import axios from 'axios'
import config from '../../config'
const serviceURL = config.api_url;

export const CREATE_CONTACT = 'CREATE_CONTACT'

export function createContact(data) {
  const request = axios.post(serviceURL, data);

  return {type: CREATE_CONTACT, payload: request}
}
