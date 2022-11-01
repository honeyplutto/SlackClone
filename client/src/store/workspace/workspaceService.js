import axios from "axios";

const createWorkSpace = async(payload) => {
    const res = await axios.post(`http://localhost:5000/api/workspace/workspace`, payload);
    return res.data
}

const getWorkSpaceByUser = async(id) => {
    const res = await axios.get(`http://localhost:5000/api/workspace/workspace?user_id=${id}`);
    return res.data;
}

export const workspaceService = {
    createWorkSpace,
    getWorkSpaceByUser
};