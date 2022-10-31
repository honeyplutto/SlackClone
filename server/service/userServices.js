import bcrypt from 'bcrypt'
import pool from "../db";
import { createUserQuery, findUserByEmail } from '../queries/userQuery';

const createUser = async (name, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword)
    const newUser = await pool.query(
        createUserQuery, 
        [name, email, hashedPassword]
    );
    return newUser;
}

const findUser = async (email) => {
    const user = await pool.query(
        findUserByEmail,
        [email]
    );
    return user;
}

export {
    createUser,
    findUser
}