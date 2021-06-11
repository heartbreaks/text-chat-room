import Message from "./Message";
import {getMessages} from '../reducer/selectors'
import {getNewMessage} from '../reducer/actions'
import {connect} from "react-redux";
import React from "react";
import socket from "../connection/connectionSocket";
import {logger} from "redux-logger/src";

function Chat({messages, getNewMessage, userName, roomId}) {
  const [messageText, setMessageText] = React.useState('')
  const messageRef = React.useRef(null)

  const submitHandler = () => {
     if (messageText) {
         const timeOfMessage = new Date().toLocaleDateString('en-US', {
             hour: '2-digit',
             minute: '2-digit',
             second: '2-digit'
         }).split(' ').slice(1).join(' ')

         socket.emit('CHATROOM::SET_MESSAGE', { messageText, userName, roomId, timeOfMessage })
         getNewMessage({ messageText, userName, timeOfMessage })
         setMessageText('')
     }
  }

  React.useEffect(() => {
      messageRef.current.scrollTo(0, 99999)
  },[messages])

  return (
    <div className="chat-window__chat">
      <div ref={messageRef} className="wrapper">
          {messages.map((message, index) => {
              return <Message userName={userName} message={message} key={index}/>
          })}
      </div>
        <div className="chat-window__control">
            <input value={messageText} onChange={(e) => setMessageText(e.target.value)} className='chat-window__chat-input' />
            <button onClick={submitHandler} className='auth-window__button auth-window__button_space_left auth-window__button_radius_none'>Отправить</button>
        </div>
    </div>
  );
}

export default connect(getMessages, {getNewMessage})(Chat);
