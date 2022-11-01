import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { workspaceService } from './workspaceService';

export const createWorkSpace = createAsyncThunk('workspace/workspace', async (payload, thunkApi) => {
    try {
        return await workspaceService.createWorkSpace(payload);
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const getUserWorkSpace = createAsyncThunk('workspace/workspace', async(id, thunkApi) => {
    try {
        return await workspaceService.getWorkSpaceByUser(id)
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

const initialState = {
    workspace: '',
    loading: false,
    message: '',
    workspaces: ''
}

export const workspaceSlice = createSlice({
    name: 'workspace',
    initialState,
    reducers: {

    },
    extraReducers: {
        [createWorkSpace.pending]: (state) => {
            state.loading = true;
        },
        [createWorkSpace.fulfilled]: (state, action) => {
            state.loading = false;
            state.workspace = action.payload;
        },
        [createWorkSpace.rejected]: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        [getUserWorkSpace.pending]: (state) => {
            state.loading = true;
        },
        [getUserWorkSpace.fulfilled]: (state, action) => {
            state.loading = false;
            state.workspaces = action.payload;
        },
        [getUserWorkSpace.rejected]: (state, action) => {
            state.loading = true;
            state.message = action.payload;
        },
    }
});

export default workspaceSlice.reducer;