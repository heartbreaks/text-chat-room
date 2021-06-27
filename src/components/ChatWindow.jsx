import Menu from './Menu';
import Chat from './Chat';
import {connect} from 'react-redux';
import {getUsersList} from '../reducer/selectors';
import React from 'react';
import AlertChat from './AlertChat';
import UsersList from './UsersList';
import PropTypes from 'prop-types';


function ChatWindow(props) {
  return (
    <>
      <Menu />
      <Chat />
      {props.roomId ? <UsersList users={props.users}/> : <AlertChat />}
    </>
  );
}

ChatWindow.propTypes = {
  roomId: PropTypes.number,
  users: PropTypes.array,
};

export default connect(getUsersList)(ChatWindow);
