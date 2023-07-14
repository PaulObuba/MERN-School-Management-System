import React from "react";
import "./course-card.css";

import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { id, title, discription, photo } = course;

  return (
    <div className='course__card'>
      <div className='card__top'>
        <img src={photo} alt='course' className='course__img' />
      </div>
      <div className='card__bottom'>
        <i>icon (like )</i>
        <h3 className='course__title'> <Link to={'/courses'}> {title} </Link> </h3>
        <p className='course__discription'>{discription}</p>
        <button className='btn course__btn'> book now </button>
      </div>
    </div>
  );
};

export default CourseCard;
