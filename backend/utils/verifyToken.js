import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  // IF TOKEN DOSE NOT EXIST
  if (!token) {
    res.status(401).json({ success: false, message: 'Your not authorized' })
  }

  // IF TOKEN EXIST THEN VERIFY THE TOKEN
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      res.status(401).json({ success: false, message: "Invalid token" })
    }

    req.user = user;
    next() // DONT FORGET TO CALL NEXT()!!
  })
}

// VERIFY USER
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === 'admin') {
      next()
    } else {
      return res.status(401).json({ success: false, message: 'Your not authenticated' })
    }
  })
}


// VERIFY ADMIN
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.role === 'admin') {
      next()
    } else {
      return res.status(401).json({ success: false, message: 'Your not authenticated' })
    }
  })
}