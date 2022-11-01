import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import workspaceSlice from './workspace/workspaceSlice'
import channelSlice from './channel/channelSlice';
import imageSlice from './images/imageSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        workspace: workspaceSlice,
        channel: channelSlice,
        image: imageSlice
    }
});