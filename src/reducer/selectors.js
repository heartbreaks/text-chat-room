export function getNameFromState(state) {
    return {name: state.name, chatrooms: [...state.rooms.keys()]}
}

export function getUsersList(state) {
    return {users: state.currentRoom.users}
}

export function getMessages(state) {
    return {messages: state.currentRoom.messages, userName: state.name, roomId: state.currentRoom.roomId}
}
