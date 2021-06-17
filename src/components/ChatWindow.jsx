import Menu from "./Menu";
import Chat from "./Chat";
import {connect} from "react-redux";
import {getUsersList} from '../reducer/selectors'
import React from "react";
import AlertChat from "./AlertChat";
import UsersList from './UsersList'

function ChatWindow(props) {

    return (
        <>
            <Menu />
            <Chat />
            {props.roomId ? <UsersList users={props.users}/> : <AlertChat />}
        </>
    )
}


export default connect(getUsersList)(ChatWindow)