import React from 'react';
import PropTypes from 'prop-types';


export default function UsersList(props) {
  return (
    <div className="chat-window__users">
      {/* eslint-disable-next-line  */}
      <h2>Пользователи: ({props.users.length})</h2>
      <ul className='chat-window__users-list'>
        {/* eslint-disable-next-line  */}
        {props.users.map((user, index) => {
          return <li className='chat-window__user-tall' key={index}>{user}</li>;
        })}
      </ul>
    </div>
  );
}

UsersList.propTypes = {
  users: PropTypes.array,
};
