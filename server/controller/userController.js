import { registrationSchema } from "../schema/validationSchema";
import { jwtTokens } from "../utils/jwtHelpers";
import { createUser, findUser } from '../service/userServices';
import bcrypt from 'bcrypt';

export const registrationUser = async (req, res) => {

    const result = await registrationSchema.validateAsync(req.body)
    const user = await createUser(result.name, result.email, result.password);
    
    if(user) {
        res.status(201).json({
            user: {
                _id: user.rows[0].user_id,
                name: user.rows[0].user_name,
                email: user.rows[0].user_email,
                password: user.rows[0].user_password,
                token: jwtTokens(user.rows[0].user_id, user.rows[0].user_name, user.rows[0].user_email, user.rows[0].user_password)
            }
        })
    } else {
        res.status(400).json('Invalid credentials');
    }
};

export const loginUser = async (req, res) => {

    const { email, password } = req.body;
    const user = await findUser(email);
    
    const correctPassword = user.rows[0] ? user.rows[0].user_password : ''

    if(user && (await bcrypt.compare(password, correctPassword))) {
        res.status(200).json({
            id: user.rows[0].user_id,
            name: user.rows[0].user_name,
            email: user.rows[0].user_email,
            password: user.rows[0].user_password,
            token: jwtTokens(user.rows[0].user_id, user.rows[0].user_name, user.rows[0].user_email, user.rows[0].user_password)
        });
    } else {
        res.status(400).json('Invalid credentials');
    }
};










