import {AUTHENTICATED, UPDATE_USER_LIST, ADD_NEW_CHAT, SET_DATA_CHAT, SELECT_CHAT, SET_NEW_MESSAGE} from "./types";
import axios from "axios";
import socket from "../connection/connectionSocket";

export function toLogin(connectInfo) {
    return {
        type: AUTHENTICATED,
        payload: {isAuth: true, users: [],  name: connectInfo.name, /* roomId: connectInfo.roomId ,*/ id: connectInfo.id},
    }
}


export function addNewChat({roomId, name, id}) {
    return async (dispatch) => {
        socket.emit('CHATROOM::CONNECT',
            {
                name: name,
                roomId: roomId,
                id: id}
        )

        await axios.post('/rooms', {roomId, name, id})
        const {data} = await axios.get(`/rooms/${roomId}`)

        dispatch({
            type: ADD_NEW_CHAT,
            payload: {...data, roomId},
        })
    }
}

export function updateListeners(userList) {
    return {
        type: UPDATE_USER_LIST,
        payload: userList
    }
}

export function getNewMessage(message) {
    return {
        type: SET_NEW_MESSAGE,
        payload: message
    }
}

export function selectChat(roomId) {
    return {
        type: SELECT_CHAT,
        payload: roomId
    }
}