import React, {useEffect, useRef, useState} from 'react'
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import PhotoCameraBackRoundedIcon from '@mui/icons-material/PhotoCameraBackRounded';
import arrowBack from "../assets/icons/back_arrow.svg";
import userMockupImage from "../assets/perfil/user_mockup_image.jpg";

const Chat = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([
        { text: 'Boa noite?', sender: 'user' },
        { text: 'Boa noite, em que posso ajudar?', sender: 'other_user' }
    ]);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim() !== '') {
            setMessages([...messages, { text: newMessage, sender: 'user' }]);
            setNewMessage('');
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);

    return (
        <ChatStyle>
            <div className={'headerBoomerang'}>
                <div onClick={() => {navigate(-1)}} className={'back'}>
                    <img data-testid="svg-icon" src={arrowBack}  style={{ cursor: "pointer" }} alt="arrow go back" />
                </div>
                    <div className={'userDetails'}>
                        <img className={'userImage'} src={userMockupImage} alt='chat user profile image'/>
                        <div>maria_carmo</div>
                    </div>
            </div>
            <div className={'chatMessages'}>
                {messages.map((message, index) => (
                    <Message key={index} sender={message.sender}>
                        {message.text}
                    </Message>
                ))}
                <div ref={messagesEndRef}></div>
            </div>
            <div className={'inputBox'}>
                <form className={'chatInput'} onSubmit={handleSendMessage}>
                    <input
                        type='text'
                        maxLength="256"
                        placeholder="Escreve uma mensagem..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button><PhotoCameraBackRoundedIcon/></button>
                    <button type='submit' onClick={handleSendMessage}><SendRoundedIcon/></button>
                </form>
            </div>

        </ChatStyle>
    );
};

const ChatStyle = styled.div`

  .headerBoomerang {
    width: 100%;
    position: fixed;
    top: 0;
    padding: 0 25px;
    display: flex;
    align-items: center;
    gap: 20px;
    
    img{
      margin: 0;
    }
    
    .userDetails{
      display: flex;
      align-items: center;
      gap: 20px;
      font-weight: 500;
      font-size: 15px;
      .userImage {
        border: 2px solid #2e2e2e;
        padding: 0;
        height: 40px;
        width: 40px;
        border-radius: 50%;
      }
    }

    
  }
  .chatMessages{
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    padding: 80px 25px 90px 25px;
  }
  
  .inputBox{
    background-color: #F8F8F8;
    width: 100%;
    padding: 0 25px 25px 25px;
    position: fixed;
    bottom: 0;
    .chatInput{
      padding: 8px;
      background-color: white;
      width: 100%;
      display: flex;
      align-items: center;
      border-radius: 8px;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
      

      input {
        max-width: calc(100% - 100px);
        font-size: 14px;
        flex: 1;
        padding: 8px;
        border: none;
        &:focus{
          outline: none;
        }
        &:placeholder-shown{
          text-overflow: ellipsis;
        }
      }

      button {
        background-color: transparent;
        padding: 8px;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin: 0 5px;
        svg{
          color: #00C17C;
        }
      }
    }
  }
  
  
`;

const Message = styled.div`
  word-break: break-word;
  font-size: 14px;
    background-color: ${(props) => (props.sender === 'user' ? '#00c17c' : 'white')};
    color: ${(props) => (props.sender === 'user' ? '#fff' : '#000')};
    border-radius: 8px;
    padding: 8px 16px;
    max-width: 70%;
    border: ${(props) => (props.sender === 'user' ? 'none' : '1px solid rgb(0,0,0,0.1)')};
    margin-bottom: 8px;
    align-self: ${(props) => (props.sender === 'user' ? 'flex-end' : 'flex-start')};
  border-bottom-right-radius: ${(props) => (props.sender === 'user' ? '0' : '8px')};
  border-bottom-left-radius: ${(props) => (props.sender === 'user' ? '8px' : '0')};
`;

export default Chat;