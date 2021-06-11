export function getNameFromState(state) {
    return {name: state.name}
}

export function getUsersList(state) {
    return {users: state.users}
}

export function getMessages(state) {
    return {messages: state.messages, userName: state.name, roomId: state.roomId}
}