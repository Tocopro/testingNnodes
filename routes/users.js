
import express from 'express';

import { createUser, getUsers, getUserbyId, deleteUserbyId, patchbyId } from '../controllers/users.js';



const router = express.Router();



router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUserbyId); 

router.delete('/:id', deleteUserbyId);

router.patch('/:id', patchbyId);

export default router;