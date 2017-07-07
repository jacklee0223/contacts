import _ from 'underscore';
import { FETCH_CONTACTS } from '../actions/fetch_contacts';
import { CREATE_CONTACT } from '../actions/create_contact';
import { SEARCH_CONTACTS } from '../actions/search_contacts';
import { RESET_SEARCH } from '../actions/reset_search';

export default function( state = [], action ) {
  let newState
  switch( action.type ) {
    case FETCH_CONTACTS:
      return [ action.payload.data, ...state ]
    case CREATE_CONTACT:
      newState = state.slice()
      newState[0].splice(0, 0, action.payload.data)
      return newState
    case SEARCH_CONTACTS:
      const keyword = action.payload.toLowerCase();
      newState = state.slice()
      newState[0] = newState[0].filter( contact => {
        const hasKeyword = new RegExp( keyword );
        const some = _.some( contact, item => {
          if ( typeof item === 'string' ) {
            item = item.toLowerCase()
          }
          return hasKeyword.test( item )
        })
        return some
      } )
      return newState
    case RESET_SEARCH:
      return action.payload
    default:
      return state
  }
}
