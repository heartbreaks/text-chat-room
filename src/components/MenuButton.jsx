import React from 'react'

function MenuButton(props) {
    return (
        <div className='chat-window__button'>
            <h1 className='chat-window__button-title'>{props.title}</h1>
        </div>
    )
}

export default MenuButton