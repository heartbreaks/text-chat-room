import Menu from "./Menu";
import Chat from "./Chat";
import {connect} from "react-redux";
import {getUsersList} from '../reducer/selectors'

function ChatWindow(props) {

    return (
        <>
            <Menu />
            <Chat />
            <div className="chat-window__users">
                <h2>Пользователи: ({props.users.length})</h2>
                <ul>
                    {props.users.map((user, index) => {
                        return <li className='chat-window__user-tall' key={index}>{user}</li>
                    })}
                </ul>
            </div>
        </>
    )
}


export default connect(getUsersList)(ChatWindow)