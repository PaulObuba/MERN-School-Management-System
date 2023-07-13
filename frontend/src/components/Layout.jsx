import React from "react";

import Header from "./navigation/Nav.jsx";
import Footer from "./footer/Footer.jsx";
import Router from "../router/Router.js";

const Layout = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default Layout;
