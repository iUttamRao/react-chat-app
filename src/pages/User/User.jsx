import React, { useState } from 'react'
import "./user.css"
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/reducer/chatReducer';
import { useNavigate } from 'react-router-dom';
import { CHAT } from '../../router/keys';

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user,setUser] = useState();

  const submitHandle =()=>{
    dispatch(addUser(user));
    navigate(CHAT, {state: {name: user}});
  }
  return (
      <div className="user">
        <h1 className='user-heading'>Chat App</h1>
        <form className='user-form'>
          <input type="text" value={user} placeholder="Enter a username" onChange={(e)=>setUser(e.target.value)} required/>
          <button onClick={submitHandle}>Enter</button>
        </form>
      </div>
  )
}

export default User