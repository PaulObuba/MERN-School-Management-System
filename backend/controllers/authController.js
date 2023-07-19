import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// USER REGISTRATION
export const register = async (req, res) => {

  try {
    // HASHING PASSWORD
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt)

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      role: req.body.role
    })

    await newUser.save();

    res.status(200).json({ success: true, message: 'Registration successful', data: newUser })
  } catch (err) {
    res.status(500).json({ success: false, message: `Registration failed.....   ${err}` })
  }
}

// USER LOGIN 
export const login = async (req, res) => {

  try {
    const email = req.body.email;

    const user = await User.findOne({ email })
    console.log(user)

    // IF USER DO NOT EXIST
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found....' });
    }

    // IF USER EXIST THEN CHECK OR COMPARE THE PASSWORD
    const checkPassword = await bcrypt.compare(req.body.password, user.password)  

    // IF PASSWORD IS INCORRECT 
    if (!checkPassword) {
      return res.status(404).json({ succes: false, message: 'Incorrect password....' })
    }

    const { password, role, ...rest } = user._doc;

    // CREATE JSON WEB TOKEN 
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '15d' }
    )

    // SET THE TOKEN IN THE BROWSER COOKIES AND SEND IT TO THE CLIENT
    res.cookie("accessToken", token, {
      httpOnly: true,
      expires: token.expiresIn
    }).status(200).json({ success: true, message: 'Successfully login....', token, data: { ...rest }, role })

  } catch (err) {
    res.status(500).json({ success: false, message: `Failed to login. Try agin.....     ${err}` })
  }
}