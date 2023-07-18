import express from 'express';
import { createUser, updateUser, getSingleUser, getAllUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

// CREATE USER
router.post('/', createUser)

// UPDATE USER
router.put('/:id', updateUser)

// GET SINGLE USER
router.get('/:id', getSingleUser)

// GET ALL USER
router.get('/', getAllUser)

// DELETE USER
router.delete('/:id', deleteUser)

export default router;
