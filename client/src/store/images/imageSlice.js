import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { imageService } from './imageService'

export const uploadImage = createAsyncThunk('images/image', async (file, thunkApi) => {
    try {
        const formData = new FormData();
        formData.append('image', file);
        return await imageService.uploadImage(formData);
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
});

export const getImage = createAsyncThunk('images/image', async(filename, thunkApi) => {
    try {
        return await imageService.getImage(filename);
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})



export const imageSlice = createSlice({
    name: 'image',
    initialState: {
        images: null,
        message: '',
        loading: false
    },
    reducers: () => {

    },
    extraReducers: {
        [uploadImage.pending]: (state) => {
            state.loading = true;
        },
        [uploadImage.fulfilled]: (state,action) => {
            state.loading = false;
            state.images = action.payload;
            localStorage.setItem('image', JSON.stringify(state.images.data));
        },
        [uploadImage.rejected]: (state,action) => {
            state.loading = true;
            state.message = action.payload;
        },
    }
});

export default imageSlice.reducer;