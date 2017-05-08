export const RESET_SEARCH = 'RESET_SEARCH'

export function resetSearch( defaultContacts ) {
  return {type: RESET_SEARCH, payload: defaultContacts}
}
