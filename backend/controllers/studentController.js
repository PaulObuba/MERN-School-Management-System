import Student from '../models/Student.js';

// CREATE NEW Student
export const createStudent = async (req, res) => {
  const newStudent = new Student(req.body)

  try {
    const savedStudent = await newStudent.save();

    res.status(200).json({ success: true, message: 'Successfully created', data: savedStudent })
  } catch (err) {
    res.status(500).json({ success: false, message: `${err}  ...Failed to create. Try again` })
  }
}

// UDATE Student
export const updateStudent = async (req, res) => {
  const id = req.params.id;

  try {
    const updateStudent = await Student.findByIdAndUpdate(
      id,
      { $set: req, body },
      { new: true }
    )
    res.status(200).json({ success: true, message: 'Successfully updated', data: updateStudent })
  } catch (err) {
    res.status(500).json({ success: false, message: `${err}  ...Failed to update. Try again` })
  }
}

// GET SINGLE Student
export const getSingleStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const student = await Student.findById(id)

    res.status(200).json({ success: true, message: 'Successful', data: student })
  } catch (err) {
    res.status(500).json({ success: false, message: `${err}  ...Not found` })
  }
}

// GET ALL Student
export const getAllStudent = async (req, res) => {

  try {
    const students = await Student.find({})

    res.status(200).json({ success: true, message: 'Successful', data: students })
  } catch (err) {
    res.status(500).json({ success: false, message: `Not found.....    ${err}` })
  }
}

// GET Student BY SEARCH
export const getStudentBySearch = async (req, res) => {
  // here 'i' is case sensitive
  const title = RegExp(req.query.title, 'i');

  try {
    // gte means greater than equal
    const students = await Student.find({ title })

    res.status(200).json({ success: true, message: 'Successful', data: students })
  } catch (err) {
    res.status(404).json({ success: false, message: `Not found.....     ${err} ` })
  }
}

// DELETE Student
export const deleteStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedStudent = await Student.findByIdAndDelete(id)

    res.status(200).json({ success: true, message: 'Successfully deleted', data: deletedStudent })
  } catch (err) {
    res.status(500).json({ success: false, message: `Failed to delete. Try again.....      ${err}` })
  }
}

