import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { channelService } from './channelService';


export const createChanel = createAsyncThunk('/channel/channel', async(payload, thunkApi) => {
    try {
        return await channelService.createChannel(payload)
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const getChannel = createAsyncThunk('channel/channel', async(work_id, thunkApi) => {
    try {
        return await channelService.getChannel(work_id);
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

const initialState = {
    loading: false,
    channel: [],
    error: '',
    channels: []
}

export const channelSlice = createSlice({
    name: 'channel',
    initialState,
    reducers: {},
    extraReducers: {
        [createChanel.pending]: (state) => {
            state.loading = true;
        },
        [createChanel.fulfilled]: (state, action) => {
            state.loading = false;
            state.channel = action.payload;
        },
        [createChanel.rejected]: (state, action) => {
            state.loading = true;
            state.error = action.payload;
        },
        [getChannel.pending]: (state) => {
            state.loading = true;
        },
        [getChannel.fulfilled]: (state, action) => {
            state.loading = false;
            state.channels = action.payload;
        },
        [getChannel.rejected]: (state, action) => {
            state.error = action.payload;
        },
    }
});

export default channelSlice.reducer;