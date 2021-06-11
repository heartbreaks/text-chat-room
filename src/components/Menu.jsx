import React from 'react'
import MenuButton from './MenuButton'
import {getNameFromState} from "../reducer/selectors";
import {connect} from "react-redux";
import axios from "axios";
import {addNewChat} from "../reducer/actions";

function Menu({name, addNewChat, chatrooms}){

    const [room, setRoom] = React.useState('')

    const submitHandler = async () => {
        const id = Date.now()

        const connectInfo = {roomId: room, name, id}
        await axios.post('/rooms', {roomId: room, name, id})
        setRoom('')
        return addNewChat(connectInfo)
    }


    return (
        <div className="chat-window__menu">
            <div className="chat-window__person">
                <div className="chat-window__person-image"></div>
                <h1 className={'chat-window__person-name'}>{name}</h1>
            </div>
            <p className='chat-window__subtitle'>Добавить комнату</p>
            <div className="chat-window__add-room">
                <input value={room} onChange={(e) => setRoom(e.target.value)} type="text" className="auth-window__input chat-window__add"/>
                <button onClick={submitHandler} className={'chat-window__add-room-button'}>Добавить</button>
            </div>
            {chatrooms.map((chat, index) => {
                return <MenuButton key={index} title={chat}/>
            })}
        </div>
    );
}

export default connect(getNameFromState, {addNewChat})(Menu);
