import express from 'express';
import { createTeacher, updateTeacher, getSingleTeacher, getAllTeacher, getTeacherBySearch, deleteTeacher } from '../controllers/teacherController.js';

const router = express.Router();

// CREATE NEW Teacher
router.post('/', createTeacher)

// UPDATE Teacher
router.put('/:id', updateTeacher)

// GET SINGLE Teacher
router.get('/:id', getSingleTeacher)

// GET ALL Teacher
router.get('/', getAllTeacher)

// GET Teacher BY SEARCH
router.get('/search/getTeacherBySearch', getTeacherBySearch)

// DELETE Teacher
router.delete('/:id', deleteTeacher)


export default router;