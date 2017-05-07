import { FETCH_CONTACTS } from '../actions/fetch_contacts';

export default function( state = [], action ) {
  switch( action.type ) {
    case FETCH_CONTACTS:
      return [ action.payload.data, ...state ]
  }
  return state;
}
