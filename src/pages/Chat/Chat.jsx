import React, { useState } from 'react'
import './chat.css'
import { useDispatch, useSelector } from 'react-redux'
import { addChat } from '../../redux/reducer/chatReducer'
import { useLocation } from 'react-router-dom'

const Chat = () => {
  const dispatch= useDispatch();
  const {state} = useLocation();
  const {chats} = useSelector(state => state.chat)
  //console.log(chats);
  // console.log(chats[state.name])
  // console.log(state.name);
  const currentUser = state.name;
  const time =new Date().toLocaleTimeString()
  const [chat,setChat] = useState("")
  // console.log(chat)
  const handleSubmit = (e) => {
    e.preventDefault()
      dispatch(addChat({
        username:currentUser,
        time: time, 
        chat: chat,
      }))
      setChat("");
  }

  const allMessages = Object.keys(chats).reduce((acc,username)=> {
    return acc.concat(
      Object.entries(chats[username]).map(([time,chat]) => ({
        sender:username,
        time,
        chat,
      }))
    );
  },[]);

  allMessages.sort((a,b) => a.time.localeCompare(b.time));


  return (
    <div className="chat">
        <h1 className='chat-heading'>Chat App</h1>
        <h4 className='current-user'>Hi, {currentUser}</h4>
        <div className='chat-container'>
              {allMessages.map(({sender,time,chat})=>(
                <div key={time}
                     className={sender ===currentUser ? 'right':'left'}
                >
                  <strong>{sender}:</strong>{chat}
                  <br />
                  <span className='message-time'>({time})</span>
                </div>
              ))}
        </div>
        <form className="chat-form" onSubmit={handleSubmit}>
          <input type="text" value={chat} placeholder="Enter a chat" onChange={(e) => setChat(e.target.value)} required/>
          <button type='submit'>send</button>
        </form>
    </div>
  )
}

export default Chat