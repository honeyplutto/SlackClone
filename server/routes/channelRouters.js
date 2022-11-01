import { Router } from 'express';
import { createChannel, findChannel } from '../controller/channelContorller'

const router = new Router();

router.post('/channel', createChannel);
router.get('/channel', findChannel);

export default router;