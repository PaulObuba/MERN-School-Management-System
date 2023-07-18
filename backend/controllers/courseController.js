import Course from '../models/Course.js';

// CREATE NEW COURSE
export const createCourse = async (req, res) => {
  const newCourse = new Course(req.body)

  try {
    const savedCourse = await newCourse.save();

    res.status(200).json({ success: true, message: 'Successfully created', data: savedCourse })
  } catch (err) {
    res.status(500).json({ success: false, message: `${err}  ...Failed to create. Try again` })
  }
}

// UDATE COURSE
export const updateCourse = async (req, res) => {
  const id = req.params.id;

  try {
    const updateCourse = await Course.findByIdAndUpdate(
      id,
      { $set: req, body },
      { new: true }
    )
    res.status(200).json({ success: true, message: 'Successfully updated', data: updateCourse })
  } catch (err) {
    res.status(500).json({ success: false, message: `${err}  ...Failed to update. Try again` })
  }
}

// GET SINGLE COURSE
export const getSingleCourse = async (req, res) => {
  const id = req.params.id;
  try {
    const course = await Course.findById(id)

    res.status(200).json({ success: true, message: 'Successful', data: course })
  } catch (err) {
    res.status(500).json({ success: false, message: `${err}  ...Not found` })
  }
}

// GET ALL COURSE
export const getAllCourse = async (req, res) => {

  try {
    const courses = await Course.find({})

    res.status(200).json({ success: true, message: 'Successful', data: courses })
  } catch (err) {
    res.status(500).json({ success: false, message: `Not found.....    ${err}` })
  }
}

// GET COURSE BY SEARCH
export const getCourseBySearch = async (req, res) => {
  // here 'i' is case sensitive
  const title = RegExp(req.query.title, 'i');

  try {
    // gte means greater than equal
    const courses = await Course.find({ title })

    res.status(200).json({ success: true, message: 'Successful', data: courses })
  } catch (err) {
    res.status(404).json({ success: false, message: `Not found.....     ${err} ` })
  }
}

// DELETE COURSE
export const deleteCourse = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedCourse = await Course.findByIdAndDelete(id)

    res.status(200).json({ success: true, message: 'Successfully deleted', data: deletedCourse })
  } catch (err) {
    res.status(500).json({ success: false, message: `Failed to delete. Try again.....      ${err}` })
  }
}

