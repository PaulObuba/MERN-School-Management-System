import React from "react";
import './counter.css';

const counter = () => {
  return (
    <section className='counter-section'>
      <div className='card-div'>
        <div className='card'>
          <i className='fa fa-graduation-cap'></i>
          <div className='card-content'>
            <p className='number'>160+</p>
            <p className='text'>Courses</p>
          </div>
        </div>
        <div className='card'>
          <i className='fa fa-user'></i>
          <div>
            <p className='number'>160+</p>
            <p className='text'>Students</p>
          </div>
        </div>
        <div className='card'>
          <i className='fa fa-chalkboard-user'></i>
          <div>
            <p className='number'>160+</p>
            <p className='text'>Teachers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default counter;
