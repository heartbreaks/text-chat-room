import {AUTHENTICATED, UPDATE_USER_LIST, SET_DATA_CHAT,ADD_NEW_CHAT, SET_NEW_MESSAGE} from './types'

const initialState = {
    name: null,
    roomId: null,
    id: null,
    users: [],
    messages: [],
    rooms: new Map(),
    currentRoom: {users: [], messages: []}
}

export const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATED:
            return {...state, ...action.payload}
        case UPDATE_USER_LIST:
            return {...state, currentRoom: {users: action.payload, messages: [...state.currentRoom.messages]}}
        case SET_DATA_CHAT:
            return {...state, ...action.payload}
        case SET_NEW_MESSAGE:
            state.rooms.get(action.payload.roomId).get('messages').push(action.payload)
            return {...state, currentRoom: {id: action.payload.roomId, users:state.currentRoom.users, messages: [...state.currentRoom.messages, action.payload]}}
        case ADD_NEW_CHAT:
            const {roomId} = action.payload
            const {rooms} = state

            if (!rooms.has(roomId)) {
                rooms.set(roomId, new Map([
                    ['users', [...action.payload.users]],
                    ['messages', []]
                ]))
                return {...state,roomId, currentRoom: {
                    users: [...rooms.get(roomId).get('users').values()],
                    messages: []
                }}
            }

            return {...state, roomId: action.payload.roomId}
        default:
            return {...state}
    }
}