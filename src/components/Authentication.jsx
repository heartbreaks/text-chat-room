import React from 'react'
import axios from "axios";
import {connect} from "react-redux";
import {toLogin} from '../reducer/actions'
import {bindActionCreators} from "redux";
import socket from "../connection/connectionSocket";

function Authentication(props) {
    const [name, setName] = React.useState('')
    const [room, setRoom] = React.useState('')

    const submitHandler = async (event) => {
        const id = Date.now()
        if (name && !room) {
            console.log('RoomID', socket.id)
            const connectInfo = {roomId: socket.id, name, id}
            await axios.post('/rooms', {roomId: socket.id, name})
            return props.toLogin(connectInfo)
        }
        if (name && room) {
            console.log('RoomID', room)
            const connectInfo = {roomId: room, name, id}
            await axios.post('/rooms', {roomId: room, name, id})
            return props.toLogin(connectInfo)
        }
        alert('Поле введено не верно')
    }

    return (
        <div className={'auth-window'}>
            <p className='auth-window__title'>Введите имя</p>

            <input placeholder={'Комната'} className='auth-window__input' type={'text'} value={room} onChange={event => setRoom(event.target.value)}/>
            <input placeholder={'Имя'} className='auth-window__input' type={'text'} value={name} onChange={event => setName(event.target.value)}/>
            <button onClick={submitHandler} className='auth-window__button'>Поехали</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toLogin
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Authentication)