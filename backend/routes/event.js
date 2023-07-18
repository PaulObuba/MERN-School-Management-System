import express from 'express';
import { createEvent, updateEvent, getSingleEvent, getAllEvent, getEventBySearch, deleteEvent } from '../controllers/eventContoller.js';

const router = express.Router();

// CREATE NEW Event
router.post('/', createEvent)

// UPDATE Event
router.put('/:id', updateEvent)

// GET SINGLE Event
router.get('/:id', getSingleEvent)

// GET ALL Event
router.get('/', getAllEvent)

// GET Event BY SEARCH
router.get('/search/getEventBySearch', getEventBySearch)

// DELETE Event
router.delete('/:id', deleteEvent)


export default router;