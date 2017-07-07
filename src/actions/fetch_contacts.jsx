import axios from 'axios'
import config from '../../config'
const serviceURL = config.api_url;

export const FETCH_CONTACTS = 'FETCH_CONTACTS'

export function fetchContacts() {
  const request = axios.get(serviceURL);

  return {type: FETCH_CONTACTS, payload: request}
}
