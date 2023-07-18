import User from '../models/User.js';


// CREATE NEW USER
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res.status(200).json({ success: true, message: 'Successfully created', data: savedUser })
  } catch (err) {
    res.status(500).json({ success: false, message: `Failed to create. Try again..... ${err}` })
  }
}

// UDATE USER
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    )

    res.status(200).json({ success: true, message: 'Successfully updated', data: updatedUser })
  } catch (err) {
    res.status(500).json({ success: false, message: `Faild to updated. Try again..... ${err}` })
  }
}

// GET SINGLE USER
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    res.status(200).json({ success: true, message: 'Successful', data: user })
  } catch (err) {
    res.status(400).json({ success: false, message: `User not found......   ${err}` })
  }
}

// GET ALL USERS
export const getAllUser = async (req, res) => {

  try {
    const users = await User.find({})

    res.status(200).json({ success: true, message: 'Successful', data: users })
  } catch (err) {
    res.status(500).json({ success: false, message: `Not found.....   ${err}` })
  }
}

// DELETE USER
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: 'Successfully deleted', data: deletedUser })
  } catch (err) {
    res.status(500).json({ success: false, message: `Faild to delete.....   ${err}` })
  }
}