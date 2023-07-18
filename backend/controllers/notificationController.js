import Notification from '../models/Notification.js';

// CREATE NEW Notification
export const createNotification = async (req, res) => {
  const newNotification = new Notification(req.body)

  try {
    const savedNotification = await newNotification.save();

    res.status(200).json({ success: true, message: 'Successfully created', data: savedNotification })
  } catch (err) {
    res.status(500).json({ success: false, message: `${err}  ...Failed to create. Try again` })
  }
}

// UDATE Notification
export const updateNotification = async (req, res) => {
  const id = req.params.id;

  try {
    const updateNotification = await Notification.findByIdAndUpdate(
      id,
      { $set: req, body },
      { new: true }
    )
    res.status(200).json({ success: true, message: 'Successfully updated', data: updateNotification })
  } catch (err) {
    res.status(500).json({ success: false, message: `${err}  ...Failed to update. Try again` })
  }
}

// GET SINGLE Notification
export const getSingleNotification = async (req, res) => {
  const id = req.params.id;
  try {
    const notification = await Notification.findById(id)

    res.status(200).json({ success: true, message: 'Successful', data: notification })
  } catch (err) {
    res.status(500).json({ success: false, message: `${err}  ...Not found` })
  }
}

// GET ALL Notification
export const getAllNotification = async (req, res) => {

  try {
    const notifications = await Notification.find({})

    res.status(200).json({ success: true, message: 'Successful', data: notifications })
  } catch (err) {
    res.status(500).json({ success: false, message: `Not found.....    ${err}` })
  }
}

// GET Notification BY SEARCH
export const getNotificationBySearch = async (req, res) => {
  // here 'i' is case sensitive
  const title = RegExp(req.query.title, 'i');

  try {
    // gte means greater than equal
    const notifications = await Notification.find({ title })

    res.status(200).json({ success: true, message: 'Successful', data: notifications })
  } catch (err) {
    res.status(404).json({ success: false, message: `Not found.....     ${err} ` })
  }
}

// DELETE Notification
export const deleteNotification = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedNotification = await Notification.findByIdAndDelete(id)

    res.status(200).json({ success: true, message: 'Successfully deleted', data: deletedNotification })
  } catch (err) {
    res.status(500).json({ success: false, message: `Failed to delete. Try again.....      ${err}` })
  }
}

