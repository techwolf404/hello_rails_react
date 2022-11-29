import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { fetchMessages } from './message/messageSlice';
import messageSlice from './message/messageSlice';

const store = configureStore({
    reducer: {
        message: messageSlice,
    },
})

export default store;
