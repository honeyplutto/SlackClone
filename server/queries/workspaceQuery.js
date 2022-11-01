const createWorkSpaceQuery = `INSERT INTO workspace (workspace_name, slug, user_id) VALUES ($1, $2, $3) RETURNING *`;
const findWorkSpaceByUserQuery = `SELECT * FROM workspace WHERE user_id = $1`

const query = {
    createWorkSpaceQuery,
    findWorkSpaceByUserQuery
}

export default query