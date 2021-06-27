import React from 'react';
import {connect} from 'react-redux';
import {toLogin} from '../reducer/actions';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

function Authentication(props) {
  const [name, setName] = React.useState('');

  const submitHandler = (event) => {
    if (name) {
      const id = Date.now();
      const connectInfo = {name, id};
      return props.toLogin(connectInfo);
    }
  };

  return (
    <div className={'auth-window'}>
      <p className='auth-window__title'>Введите имя</p>
      <input placeholder={'Имя'} className='auth-window__input' type={'text'}
        value={name} onChange={(event) => setName(event.target.value)}/>
      <button onClick={submitHandler} className='auth-window__button'>
          Войти
      </button>
    </div>
  );
}

Authentication.propTypes = {
  toLogin: PropTypes.func,
};

// eslint-disable-next-line require-jsdoc
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toLogin,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Authentication);
