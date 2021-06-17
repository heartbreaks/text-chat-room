import React from "react";

export default function UsersList(props) {
    return (
        <div className="chat-window__users">
            <h2>Пользователи: ({props.users.length})</h2>
            <ul className='chat-window__users-list'>
                {props.users.map((user, index) => {
                    return <li className='chat-window__user-tall' key={index}>{user}</li>
                })}
            </ul>
        </div>
    )
}
