import React from "react";
import "../styles/course_details.css";
import { useParams } from "react-router-dom";

import tours  from '../assets/data/tours.js';

const CourseDetails = () => {

  const { id } = useParams();
  const singleCourse = tours.find(course => course.id === id)
  const { photo, title, desc } = singleCourse;

  return (
    <section className="course__details">
      <div className='course__content d-flex justify-content-between align-items-start'>
        <img src={photo} alt='' />

        <div className='course__info'>
          <h2 className='course__title'> {title} </h2>
          <p className='course__rating'>icon icon icon icon icon icon icon</p>
          <p className='course__description'> {desc}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            voluptate eligendi, rem obcaecati inventore autem quibusdam
            consequuntur. Itaque cupiditate odio tempore quod, quis, temporibus
            similique iure dolor assumenda sint molestiae? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Nihil temporibus nobis beatae
            illum, architecto porro adipisci ducimus! Provident, vitae omnis ad
            quasi aliquam quos minus facilis incidunt error temporibus
            consequatur! */}
          </p>
        </div>
      </div>
      <div className='course__reviews mt-4'>
        <h4>Reviews (reviews?.length)</h4>

        <form>
          <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
            <span>
              1 <i class='ri-star-s-fill'></i>
            </span>
            <span>
              2 <i class='ri-star-s-fill'></i>
            </span>
            <span>
              3 <i class='ri-star-s-fill'></i>
            </span>
            <span>
              4 <i class='ri-star-s-fill'></i>
            </span>
            <span>
              5 <i class='ri-star-s-fill'></i>
            </span>
          </div>
          <div className='review__input'>
            <textarea type='text' placeholder='Share your thoughts'></textarea>
            <button className='btn primary__btn text-white' type='submit'>
              Submit
            </button>
          </div>
        </form>

        <div className='user__reviews'>
          <div className='review__item'>
            <img src={photo} alt='' />

            <div className='w-100'>
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <h5> review.username </h5>
                  <p>Date_review.createdAt</p>
                </div>
                <span className='d-flex align-items-center'>
                  review.rating
                  <i class='ri-star-s-fill'></i>
                </span>
              </div>

              <h6>review.reviewText</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
