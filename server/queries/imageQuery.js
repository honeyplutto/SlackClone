const createImageQuery = `INSERT INTO image_files (filename, filepath, mimetype, size) VALUES ($1, $2, $3, $4) RETURNING *`;
const checkImageQuery = `SELECT * FROM image_files WHERE filename = $1`

export {
    createImageQuery,
    checkImageQuery
}