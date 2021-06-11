import React from 'react'
import MenuButton from './MenuButton'
import {getNameFromState} from "../reducer/selectors";
import {connect} from "react-redux";

function Menu({name}){
    const chatrooms = ['no role modelz']

    return (
        <div className="chat-window__menu">
            <div className="chat-window__person">
                <div className="chat-window__person-image"></div>
                <h1 className={'chat-window__person-name'}>{name}</h1>
            </div>
            {chatrooms.map((chat, index) => {
                return <MenuButton key={index} title={chat}/>
            })}
        </div>
    );
}

export default connect(getNameFromState)(Menu);
