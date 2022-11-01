import axios from "axios";

const createChannel = async(payload) => {
    const res = await axios.post(`http://localhost:5000/api/channel/channel`, payload);
    return res.data;
};

const getChannel = async(work_id) => {
    const res = await axios.get(`http://localhost:5000/api/channel/channel?id=${work_id}`);
    return res.data;
}

export const channelService = {
    createChannel,
    getChannel
}