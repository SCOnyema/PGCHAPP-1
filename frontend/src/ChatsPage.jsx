import React from 'react'
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic, useSingleChatLogic} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '9e561ed2-1535-4504-b175-26c2d26b84d3',
        props.user.username,
        props.user.secret
    );
    return (
        <div className="chatFont" style={{ height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
        </div>
    )
}

export default ChatsPage;