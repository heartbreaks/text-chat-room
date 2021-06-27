import PropTypes from 'prop-types';


function Message(props) {
  return (
  // eslint-disable-next-line react/react-in-jsx-scope
    <div className="chat-window__message">
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <h4 className='chat-window__message-title'>
        {props.message.messageText}
      </h4>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <p className='chat-window__message-user'>{props.message.userName}</p>
      {/* eslint-disable-next-line max-len,react/react-in-jsx-scope */}
      <span className='chat-window__message-time'>{props.message.timeOfMessage}</span>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.object,
};

export default Message;
