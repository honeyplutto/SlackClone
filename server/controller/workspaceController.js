import { createWorkSpaceToggle, findWorkSpace} from '../service/workspaceService'

export const createWorkSpace = async (req, res) => {
    const { name, user_id } = req.body;
    const newWorkspace = await createWorkSpaceToggle(name, user_id);
    if(newWorkspace){
        res.status(200).json(newWorkspace.rows[0]);
    } else {
        res.status(400).json('Invalid credentials');
    }
};

export const findWorkSpaceByUser = async (req, res) => {
    const { user_id } = req.query;
    const workspace = await findWorkSpace(user_id);
    if(workspace) {
        res.status(200).json(workspace.rows);
    } else {
        res.status(400).json('Invalid credentials');
    }
    
}
