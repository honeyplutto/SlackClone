import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from './authService';

export const handleRegistration = createAsyncThunk('users/registration', async (user, thunkApi) => {
    try {
        return await authService.registration(user);
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const handleLogin = createAsyncThunk('users/login', async (user, thunkApi) => {
    try {
        return await authService.login(user);
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const handleLogout = createAsyncThunk('users/logout', async () => {
    return await authService.logout();
})

const initialState = {
    message: '',
    user: null,
    loading: false,
    success: false,
    userLogin: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.success = false;
            state.userLogin = false;
            state.message = '';
        }
    },
    extraReducers: {
        [handleRegistration.pending]: (state) => {
            state.loading = true;
        },
        [handleRegistration.fulfilled]: (state, action) => {
            state.loading = false;
            state.success = true;
            state.user = action.payload;
        },
        [handleRegistration.rejected]: (state, action) => {
            state.loading = true;
            state.message = action.payload;
        },
        [handleLogin.pending]: (state) => {
            state.loading = true;
        },
        [handleLogin.fulfilled]: (state, action) => {
            state.loading = false;
            state.success = true;
            state.userLogin = true;
            state.user = action.payload;
            localStorage.setItem('userInfo', JSON.stringify({userLogin: state.userLogin}));
        },
        [handleLogin.rejected]: (state, action) => {
            state.loading = true;
            state.message = action.payload;
        }
    }
});

export const { reset } = authSlice.actions

export default authSlice.reducer;