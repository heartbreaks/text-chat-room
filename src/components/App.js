import React, {Fragment} from 'react'
import ChatWindow from "./ChatWindow";
import Authentication from "./Authentication";
import {connect} from "react-redux";
import socket from "../connection/connectionSocket";
import {updateListeners, getNewMessage} from '../reducer/actions'

function App({isAuth, updateListeners, getNewMessage}){

    React.useEffect(() => {
        socket.on('CHATROOM::UPDATE_USERS',  updateListeners)
        socket.on('CHATROOM::SET_MESSAGE',  getNewMessage)
    }, [])

    return (
        <Fragment>
            {isAuth ? <ChatWindow /> :  <Authentication />}
        </Fragment>
    );
}

function mapStateToProps(state) {
    return {
        isAuth: state.isAuth
    }
}

export default connect(mapStateToProps, {updateListeners, getNewMessage})(App);
