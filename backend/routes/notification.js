import express from 'express';
import { createNotification, updateNotification, getSingleNotification, getAllNotification, getNotificationBySearch, deleteNotification } from '../controllers/notificationController.js';

const router = express.Router();

// CREATE NEW Notification
router.post('/', createNotification)

// UPDATE Notification
router.put('/:id', updateNotification)

// GET SINGLE Notification
router.get('/:id', getSingleNotification)

// GET ALL Notification
router.get('/', getAllNotification)

// GET Notification BY SEARCH
router.get('/search/getNotificationBySearch', getNotificationBySearch)

// DELETE Notification
router.delete('/:id', deleteNotification)


export default router;