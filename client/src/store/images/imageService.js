import axios from "axios";

const uploadImage = async (file) => {
    const res = await axios.post(`http://localhost:5000/api/images/image`, 
    file,
    {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return res;
};

const getItem = async (filename) => {
    const res = await axios.get(`http://localhost:5000/api/images/image/${filename}`);
    return res;
}

export const imageService = {
    uploadImage,
    getItem
};