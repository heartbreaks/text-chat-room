import {AUTHENTICATED, UPDATE_USER_LIST, SET_DATA_CHAT,ADD_NEW_CHAT, SET_NEW_MESSAGE} from './types'

const initialState = {
    name: null,
    roomId: null,
    id: null,
    users: [],
    messages: [],
    rooms: new Map(),
    currentRoom: new Map([
        ['users', []],
        ['messages', []]
    ])
}

export const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATED:
            return {...state, ...action.payload}
        case UPDATE_USER_LIST:
            return {...state, users: action.payload}
        case SET_DATA_CHAT:
            return {...state, ...action.payload}
        case SET_NEW_MESSAGE:
            return {...state, messages: [...state.messages, action.payload]}
        case ADD_NEW_CHAT:
            console.log(action.payload)
            return {...state}
        default:
            return {...state}
    }
}