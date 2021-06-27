// eslint-disable-next-line require-jsdoc
export function getNameFromState(state) {
  return {name: state.name, chatrooms: [...state.rooms.keys()]};
}

// eslint-disable-next-line require-jsdoc
export function getUsersList(state) {
  if (state.currentRoom.roomId) {
    return {users: state.currentRoom.users, roomId: state.currentRoom.roomId};
  }
  return {roomId: null};
}

// eslint-disable-next-line require-jsdoc
export function getMessages(state) {
  return {
    messages: state.currentRoom.messages,
    userName: state.name,
    roomId: state.currentRoom.roomId,
  };
}
