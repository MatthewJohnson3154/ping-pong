/*
 * action types
 */

export const UPDATE_PLAYER_ELO = 'UPDATE_PLAYER_ELO'
export const ADD_MATCH = 'ADD_MATCH'
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 * TODO - I could use this for showing matches
 */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

/*
 * action creators
 */

export function updatePlayerElo (index, elo) {
  return { type: UPDATE_PLAYER_ELO, index, elo }
}

export function addMatch (match) {
  return { type: ADD_MATCH, match }
}

// export function setVisibilityFilter (filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }
