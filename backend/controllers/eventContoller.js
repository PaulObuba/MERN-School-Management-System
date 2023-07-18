import Event from '../models/Event.js';

// CREATE NEW Event
export const createEvent = async (req, res) => {
  const newEvent = new Event(req.body)

  try {
    const savedEvent = await newEvent.save();

    res.status(200).json({ success: true, message: 'Successfully created', data: savedEvent })
  } catch (err) {
    res.status(500).json({ success: false, message: `${err}  ...Failed to create. Try again` })
  }
}

// UDATE Event
export const updateEvent = async (req, res) => {
  const id = req.params.id;

  try {
    const updateEvent = await Event.findByIdAndUpdate(
      id,
      { $set: req, body },
      { new: true }
    )
    res.status(200).json({ success: true, message: 'Successfully updated', data: updateEvent })
  } catch (err) {
    res.status(500).json({ success: false, message: `${err}  ...Failed to update. Try again` })
  }
}

// GET SINGLE Event
export const getSingleEvent = async (req, res) => {
  const id = req.params.id;
  try {
    const event = await Event.findById(id)

    res.status(200).json({ success: true, message: 'Successful', data: event })
  } catch (err) {
    res.status(500).json({ success: false, message: `${err}  ...Not found` })
  }
}

// GET ALL Event
export const getAllEvent = async (req, res) => {

  try {
    const events = await Event.find({})

    res.status(200).json({ success: true, message: 'Successful', data: events })
  } catch (err) {
    res.status(500).json({ success: false, message: `Not found.....    ${err}` })
  }
}

// GET Event BY SEARCH
export const getEventBySearch = async (req, res) => {
  // here 'i' is case sensitive
  const title = RegExp(req.query.title, 'i');

  try {
    // gte means greater than equal
    const events = await Event.find({ title })

    res.status(200).json({ success: true, message: 'Successful', data: events })
  } catch (err) {
    res.status(404).json({ success: false, message: `Not found.....     ${err} ` })
  }
}

// DELETE Event
export const deleteEvent = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedEvent = await Event.findByIdAndDelete(id)

    res.status(200).json({ success: true, message: 'Successfully deleted', data: deletedEvent })
  } catch (err) {
    res.status(500).json({ success: false, message: `Failed to delete. Try again.....      ${err}` })
  }
}

