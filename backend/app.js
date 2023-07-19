import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
const corsOptions = {
  origin: true,
  credentials: true
}

// ROUTES
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';
import courseRoute from './routes/course.js';
import eventRoute from './routes/event.js';
import studentRoute from './routes/student.js';
import teacherRoute from './routes/teacher.js';
import notificationRoute from './routes/notification.js';



// MIDDLEWARE
app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/course', courseRoute);
app.use('/api/v1/event', eventRoute);
app.use('/api/v1/student', studentRoute);
app.use('/api/v1/teacher', teacherRoute);
app.use('/api/v1/notification', notificationRoute);

// DATABASE CONNETION
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Database Connected");
  } catch (err) {
    console.log("MongoDB Database faild to connect....  " + err);
  }
};

// START SERVER
app.listen(PORT, () => {
  connect();
  console.log("server listening on port", PORT);
});
