import { createChannelToggle, findChannelById } from '../service/channelService'

export const createChannel = async(req, res) => {
    const { name, user_id, work_id } = req.body; 
    const newChannel = await createChannelToggle(name, user_id, work_id);

    if(newChannel) {
        res.status(200).json(newChannel.rows[0]);
    } else {
        res.status(400).json('Invalid credentials');
    }
}

export const findChannel = async(req,res) => {
    const id = req.query.id;
    const channel = await findChannelById(id);
    if(channel) {
        res.status(200).json(channel.rows);
    } else {
        res.status(400).json('Invalid credentials');
    }
}