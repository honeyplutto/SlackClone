import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage } from '../../store/images/imageSlice';

function Avatar() {

    const dispatch = useDispatch();
    const [image, setImage] = useState('');

    const handleUpload = (e) => {
        e.preventDefault();
        dispatch(uploadImage(image));
    }

    return (
        <div>
            <form onSubmit={(e) => handleUpload(e)}>
                <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
                <button type='submit' >
                    Submit
                </button>
            </form>
        </div>
  )
}

export default Avatar