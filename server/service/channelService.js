import db from '../db';
import { query } from '../queries/channelQuery'

const createChannelToggle = async(name, user_id, work_id) => {
    const newChannel = await db.query(
        query.createChannelQuery,
        [name, user_id, work_id]
    );
    return newChannel;
};

const findChannelById = async(work_id) => {
    const channel = await db.query(
        query.getChannelsByWorkspaceIds,
        [work_id]
    );
    return channel;
}

export {
    createChannelToggle,
    findChannelById
};