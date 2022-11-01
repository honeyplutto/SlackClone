import db from '../db';
import { createImageQuery, checkImageQuery } from '../queries/imageQuery'

const createImage = async ({filename, mimetype, size, path}) => {
    const res = await db.query(
        createImageQuery,
        [filename, path, mimetype, size]
    )
    return res;
}

const findImage = async (filename) => {
    const res = await db.query(
        checkImageQuery,
        [filename]
    )
    return res.rows[0];
}

export {
    createImage,
    findImage    
};

