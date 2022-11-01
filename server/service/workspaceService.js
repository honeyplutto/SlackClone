import db from '../db';
import query from '../queries/workspaceQuery'
import slugify  from 'slugify'
import { option } from '../utils/slugOptions'

const createWorkSpaceToggle = async(name, user_id) => {
    const slug = slugify(name, option);
    
    const newWorkspace = await db.query(
        query.createWorkSpaceQuery,
        [name, slug, user_id]
    );
    return newWorkspace;
}

const findWorkSpace = async(user_id) => {
    const workspace = await db.query(
        query.findWorkSpaceByUserQuery,
        [user_id]
    );
    return workspace
}

export {
    createWorkSpaceToggle,
    findWorkSpace
};

