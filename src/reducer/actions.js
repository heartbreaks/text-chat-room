import {AUTHENTICATED, UPDATE_USER_LIST, SET_DATA_CHAT, SET_NEW_MESSAGE} from "./types";
import axios from "axios";
import socket from "../connection/connectionSocket";

export function toLogin(connectInfo) {
    return async (dispatch) => {
        dispatch({
            type: AUTHENTICATED,
            payload: {isAuth: true, users: [],  name: connectInfo.name, roomId: connectInfo.roomId, id: connectInfo.id},
        })
        socket.emit('CHATROOM::CONNECT',
            {
                name: connectInfo.name,
                roomId: connectInfo.roomId,
                id: connectInfo.id}
        )
        const {data} = await axios.get(`/rooms/${connectInfo.roomId}`)

        dispatch({
            type: SET_DATA_CHAT,
            payload: data,
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

export function sendNewMessage({ messageText, userName, roomId }) {

//     socket.emit('CHATROOM::SET_MESSAGE', { messageText, userName, roomId })
//     return {
//         type: SET_NEW_MESSAGE,
//         payload: { messageText, userName, roomId }
//     }
}