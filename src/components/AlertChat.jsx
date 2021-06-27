import React from 'react';
import {connect} from 'react-redux';

function AlertChat(props) {
  return (
    <>
      <h1 className='alert-chat__title'>Чат не выбран</h1>
    </>
  );
}

export default connect()(AlertChat);
