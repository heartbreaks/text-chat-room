import React from 'react'
import {connect} from "react-redux";
import {selectChat} from '../reducer/actions'

function MenuButton(props) {
    return (
        <div onClick={() => props.selectChat(props.title)} className='chat-window__button'>
            <h1 className='chat-window__button-title'>{props.title}</h1>
        </div>
    )
}

export default connect(null, {selectChat})(MenuButton)