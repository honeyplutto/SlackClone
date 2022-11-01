const createChannelQuery = `INSERT INTO channel (channel_name, user_id, work_id) VALUES ($1, $2, $3) RETURNING *`;
const getChannelsByWorkspaceIds = `SELECT * FROM channel WHERE work_id = $1`

export const query = {
    createChannelQuery,
    getChannelsByWorkspaceIds
};