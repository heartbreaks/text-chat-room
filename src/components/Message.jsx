function Message(props) {
    return (
        <div className="chat-window__message">
            <p className='chat-window__message-title'>{props.message.messageText}</p>
            <p className='chat-window__message-user'>{props.message.userName}</p>
            <span className='chat-window__message-time'>{props.message.timeOfMessage}</span>
        </div>
    )
}

export default Message