import Teacher from '../models/Teacher.js';

// CREATE NEW Teacher
export const createTeacher = async (req, res) => {
  const newTeacher = new Teacher(req.body)

  try {
    const savedTeacher = await newTeacher.save();

    res.status(200).json({ success: true, message: 'Successfully created', data: savedTeacher })
  } catch (err) {
    res.status(500).json({ success: false, message: `${err}  ...Failed to create. Try again` })
  }
}

// UDATE Teacher
export const updateTeacher = async (req, res) => {
  const id = req.params.id;

  try {
    const updateTeacher = await Teacher.findByIdAndUpdate(
      id,
      { $set: req, body },
      { new: true }
    )
    res.status(200).json({ success: true, message: 'Successfully updated', data: updateTeacher })
  } catch (err) {
    res.status(500).json({ success: false, message: `${err}  ...Failed to update. Try again` })
  }
}

// GET SINGLE Teacher
export const getSingleTeacher = async (req, res) => {
  const id = req.params.id;
  try {
    const teacher = await Teacher.findById(id)

    res.status(200).json({ success: true, message: 'Successful', data: teacher })
  } catch (err) {
    res.status(500).json({ success: false, message: `${err}  ...Not found` })
  }
}

// GET ALL Teacher
export const getAllTeacher = async (req, res) => {

  try {
    const teachers = await Teacher.find({})

    res.status(200).json({ success: true, message: 'Successful', data: teachers })
  } catch (err) {
    res.status(500).json({ success: false, message: `Not found.....    ${err}` })
  }
}

// GET Teacher BY SEARCH
export const getTeacherBySearch = async (req, res) => {
  // here 'i' is case sensitive
  const title = RegExp(req.query.title, 'i');

  try {
    // gte means greater than equal
    const teachers = await Teacher.find({ title })

    res.status(200).json({ success: true, message: 'Successful', data: teachers })
  } catch (err) {
    res.status(404).json({ success: false, message: `Not found.....     ${err} ` })
  }
}

// DELETE Teacher
export const deleteTeacher = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(id)

    res.status(200).json({ success: true, message: 'Successfully deleted', data: deletedTeacher })
  } catch (err) {
    res.status(500).json({ success: false, message: `Failed to delete. Try again.....      ${err}` })
  }
}

