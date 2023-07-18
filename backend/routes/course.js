import express from 'express';
import { createCourse, updateCourse, getSingleCourse, getAllCourse, getCourseBySearch, deleteCourse } from '../controllers/courseController.js';

const router = express.Router();

// CREATE NEW COURSE
router.post('/', createCourse)

// UPDATE COURSE
router.put('/:id', updateCourse)

// GET SINGLE COURSE
router.get('/:id', getSingleCourse)

// GET ALL COURSE
router.get('/', getAllCourse)

// GET COURSE BY SEARCH
router.get('/search/getCourseBySearch', getCourseBySearch)

// DELETE COURSE
router.delete('/:id', deleteCourse)


export default router;