import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
