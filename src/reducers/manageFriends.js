export function manageFriends(state, action){
  switch(action.type){
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      let copy = [...state.friends]
      let filtered_friend = copy.filter(friend => friend.id !== action.id)
      return {friends: filtered_friend}
    default:
      return state
  }
}
