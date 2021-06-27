import React, {Fragment} from 'react';
import ChatWindow from './ChatWindow';
import Authentication from './Authentication';
import {connect} from 'react-redux';
import socket from '../connection/connectionSocket';
import {updateListeners, getNewMessage} from '../reducer/actions';
import PropTypes from 'prop-types';

function App({isAuth, updateListeners, getNewMessage}) {
  React.useEffect(() => {
    socket.on('CHATROOM::UPDATE_USERS', updateListeners);
    socket.on('CHATROOM::SET_MESSAGE', getNewMessage);
  }, []);

  return (
    <Fragment>
      {isAuth ? <ChatWindow /> : <Authentication />}
    </Fragment>
  );
}

App.propTypes = {
  isAuth: PropTypes.bool,
  updateListeners: PropTypes.func,
  getNewMessage: PropTypes.func,
};

// eslint-disable-next-line require-jsdoc
function mapStateToProps(state) {
  return {
    isAuth: state.isAuth,
  };
}

export default connect(mapStateToProps, {updateListeners, getNewMessage})(App);
