const createUserQuery = `INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *`;
const findUserByEmail = `SELECT * FROM users WHERE user_email = $1`

export {
    createUserQuery,
    findUserByEmail
}
