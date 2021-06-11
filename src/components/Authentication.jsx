import React from 'react'
import axios from "axios";
import {connect} from "react-redux";
import {toLogin} from '../reducer/actions'
import {bindActionCreators} from "redux";

function Authentication(props) {
    const [name, setName] = React.useState('')

    const submitHandler = async (event) => {
        const id = Date.now()
        const connectInfo = {name, id}
        return props.toLogin(connectInfo)
    }

    return (
        <div className={'auth-window'}>
            <p className='auth-window__title'>Введите имя</p>
            <input placeholder={'Имя'} className='auth-window__input' type={'text'} value={name} onChange={event => setName(event.target.value)}/>
            <button onClick={submitHandler} className='auth-window__button'>Войти</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toLogin
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Authentication)