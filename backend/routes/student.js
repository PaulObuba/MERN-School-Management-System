import express from 'express';
import { createStudent, updateStudent, getSingleStudent, getAllStudent, getStudentBySearch, deleteStudent } from '../controllers/studentController.js';

const router = express.Router();

// CREATE NEW Student
router.post('/', createStudent)

// UPDATE Student
router.put('/:id', updateStudent)

// GET SINGLE Student
router.get('/:id', getSingleStudent)

// GET ALL Student
router.get('/', getAllStudent)

// GET Student BY SEARCH
router.get('/search/getStudentBySearch', getStudentBySearch)

// DELETE Student
router.delete('/:id', deleteStudent)


export default router;