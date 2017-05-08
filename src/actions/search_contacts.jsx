export const SEARCH_CONTACTS = 'SEARCH_CONTACTS'

export function searchContacts( keyword ) {
  return {type: SEARCH_CONTACTS, payload: keyword}
}
