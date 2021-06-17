export function getNameFromState(state) {
    return {name: state.name, chatrooms: [...state.rooms.keys()]}
}

export function getUsersList(state) {
    if (state.currentRoom.roomId) {
        return {users: state.currentRoom.users, roomId: state.currentRoom.roomId}
    }
    return {roomId: null}
}

export function getMessages(state) {
    return {messages: state.currentRoom.messages, userName: state.name, roomId: state.currentRoom.roomId}
}
