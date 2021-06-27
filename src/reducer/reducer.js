// eslint-disable-next-line max-len
import {AUTHENTICATED, SELECT_CHAT, UPDATE_USER_LIST, ADD_NEW_CHAT, SET_NEW_MESSAGE} from './types';

const initialState = {
  name: null,
  id: null,
  rooms: new Map(),
  currentRoom: {roomId: null, users: [], messages: []},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {...state, ...action.payload};
    case UPDATE_USER_LIST:
      state.rooms.get(state.currentRoom.roomId).set('users', action.payload);
      return {...state,
        currentRoom: {roomId: state.currentRoom.roomId,
          users: action.payload, messages: [...state.currentRoom.messages],
        },
      };
    case SET_NEW_MESSAGE:
      // eslint-disable-next-line max-len
      state.rooms.get(action.payload.roomId).get('messages').push(action.payload);
      // eslint-disable-next-line max-len
      const messages = [...state.rooms.get(state.currentRoom.roomId).get('messages')];
      return {...state,
        currentRoom: {
          roomId: state.currentRoom.roomId,
          users: state.currentRoom.users, messages,
        }};
    case ADD_NEW_CHAT:
      const {roomId} = action.payload;
      const {rooms} = state;

      if (!rooms.has(roomId)) {
        rooms.set(roomId, new Map([
          ['users', [...action.payload.users]],
          ['messages', []],
        ]));
        return {...state, currentRoom: {
          roomId,
          users: [...rooms.get(roomId).get('users').values()],
          messages: [],
        }};
      }
      return {...state};
    case SELECT_CHAT:
      const room = state.rooms.get(action.payload);
      const users = [...room.get('users').values()];
      const messageList = [...room.get('messages')];

      return {...state, currentRoom: {
        roomId: action.payload,
        users,
        messages: messageList,
      }};
    default:
      return {...state};
  }
};
