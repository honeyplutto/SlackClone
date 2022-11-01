import { Router } from 'express';
import { createWorkSpace, findWorkSpaceByUser } from '../controller/workspaceController';

const router = new Router();

router.post('/workspace', createWorkSpace);
router.get('/workspace', findWorkSpaceByUser);

export default router;