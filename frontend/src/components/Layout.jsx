import React from "react";

import Header from "./Navigation/Nav.jsx";
import Footer from "./Footer/Footer.jsx";
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
