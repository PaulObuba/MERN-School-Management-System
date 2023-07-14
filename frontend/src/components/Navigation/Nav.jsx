import React from "react";
import "./nav.css";

import { Container, Row, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.png";

const Header = () => {
  const nav_items = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/courses",
      display: "Courses",
    },
    {
      path: "/events",
      display: "Events",
    },
    {
      path: "/students",
      display: "Students",
    },
    {
      path: "/teachers",
      display: "Teachers",
    },
    {
      path: "/notification",
      display: "Notification",
    },
  ];

  return (
    <header className='header'>
      <Container>
        <Row>
          <div className='nav__wapper d-flex justify-content-between'>
            <div className='logo'>
              <img src={logo} alt='' />
            </div>

            <div className='navigation'>
              <ul className='menu d-flex align-items-center gap-5'>
                {nav_items.map((nav, index) => (
                  <li className='nav__item' key={index}>
                    <NavLink
                      to={nav.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : "null"
                      }
                    >
                      {nav.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className='nav__right d-flex align-items-center gap-4'>
              <div className='nav__btns d-flex align-items-center gap-4'>
                <h5 className='mb-0'> John </h5>
                <Button className='btn btn-danger'> Logout </Button>
              </div>

              <div className='mobile__menu'>
                <i class='ri-menu-line'></i>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
