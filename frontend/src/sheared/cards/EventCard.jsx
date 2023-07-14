import React from "react";
import "./event-card.css";

import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const { id, title, discription, photo, city } = event;

  return (
    <div className='event__card'>
      <div className='card__top'>
        <img src={photo} alt='event' className='event__img' />
      </div>
      <div className='card__bottom'>
        <div className='d-flex justify-content-between align-items-center'>
          <p>
            <i>icon</i> {city}
          </p>
          <p>
            <i>icon</i> (like )
          </p>
        </div>
        <h3 className='event__title'>
          <Link to={"/events"}> {title} </Link>
        </h3>
        <p className='event__discription'>{discription}</p>
        <button className='btn event__btn'> book now </button>
      </div>
    </div>
  );
};

export default EventCard;
