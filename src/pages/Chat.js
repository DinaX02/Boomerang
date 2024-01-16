import React from 'react'
import {useNavigate} from "react-router-dom";

const Chat = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => {navigate(-1)}}>
            Back
        </div>
    )
}

export default Chat;