import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatId: null,
    chatName: null,
    backHome: true
  },
  reducers: {
    setChat: (state, action) => {
      state.chatId = action.payload.chatId;
      state.chatName = action.payload.chatName
    },
    setBackHome: (state, action) => {
      state.backHome = action.payload.backHome
    }
  },
});

export const { setChat, setBackHome } = chatSlice.actions;

export const selectChatId = state => state.chat.chatId;
export const selectChatName = state => state.chat.chatName;
export const selectBackHome = state => state.chat.backHome;

export default chatSlice.reducer;
