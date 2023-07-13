import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Courses from "../pages/Courses.jsx";
import Events from "../pages/Events.jsx";
import Students from "../pages/Students.jsx";
import Teachers from "../pages/Teachers.jsx";
import Notification from "../pages/Notification.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='home' element={<Home />} />
      <Route path='courses' element={<Courses />} />
      <Route path='events' element={<Events />} />
      <Route path='students' element={<Students />} />
      <Route path='teachers' element={<Teachers />} />
      <Route path='notification' element={<Notification />} />
    </Routes>
  );
};

export default Router;
