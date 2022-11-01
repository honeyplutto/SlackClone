import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import workspaceSlice from './workspace/workspaceSlice'
import channelSlice from './channel/channelSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        workspace: workspaceSlice,
        channel: channelSlice
    }
});