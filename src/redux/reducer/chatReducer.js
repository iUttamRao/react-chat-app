const { createSlice } = require("@reduxjs/toolkit")

const initialState ={
    chats:{},
}

const chatReducer = createSlice({
    name:'chat',
    initialState,
    reducers:{
        addUser : (state,action) =>{
            if(!state.chats[action.payload]){
                state.chats = {
                    ...state.chats,
                    [action.payload] : {}
                };
            }
        },
        addChat : (state,action) =>{
            state.chats[action.payload.username] = {...state.chats[action.payload.username],[action.payload.time] :action.payload.chat }
            // console.log(state.chats)
        }
    }
})

export default chatReducer.reducer;
export const {addUser,addChat} = chatReducer.actions;



