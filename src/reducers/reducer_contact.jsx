import { FETCH_CONTACTS } from '../actions/fetch_contacts';
import { CREATE_CONTACT } from '../actions/create_contact';

export default function( state = [], action ) {
  switch( action.type ) {
    case FETCH_CONTACTS:
      return [ action.payload.data, ...state ]
    case CREATE_CONTACT:
      return [ action.payload.data, ...state ]
    default:
      return state
  }
}
