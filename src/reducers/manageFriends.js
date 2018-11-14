export function manageFriends(state, action){
  switch (action.type){
    case "ADD_FRIEND":
      return {...state, friends: [...state.friends, action.friend]};
    case "REMOVE_FRIEND":
      const friendIndex = state.friends.findIndex(friend => friend.id === action.id)

      var firstHalf = state.friends.slice(0, friendIndex);
      var secondHalf = state.friends.slice(friendIndex + 1);

      return {...state, friends: [...firstHalf, ...secondHalf]}
    default:
      return state;
  }
}
