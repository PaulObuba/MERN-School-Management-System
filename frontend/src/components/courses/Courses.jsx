import React from "react";
import "./courses.css";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

import courseData from "../../assets/data/tours";
import CourseCard from "../../sheared/cards/CourseCard"

const Courses = () => {
  return (
    <section className='courses-section'>
      <h2 className='section__title'>Popular courses</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 2,
          },
          791: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        className='courseSwiper'
      >
        {/* <SwiperSlide>
          <div className='course'>
            <img
              src='https://s40424.pcdn.co/in/wp-content/uploads/2022/07/digital-marketing-courses.jpg'
              alt=''
            />
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore. Itaque, modi suscipit. Earum accusamus
              molestiae sequi?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='course'>
            <img
              src='https://s40424.pcdn.co/in/wp-content/uploads/2022/02/ISB-ITPM-650x314.jpg'
              alt=''
            />
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore. Itaque, modi suscipit. Earum accusamus
              molestiae sequi?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='course'>
            <img
              src='https://www.nist.gov/sites/default/files/images/2019/09/25/tech_transfer.jpg'
              alt=''
            />
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore. Itaque, modi suscipit. Earum accusamus
              molestiae sequi?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='course'>
            <img
              src='https://elearningindustry.com/wp-content/uploads/2015/10/learning-technologies-fundamentals-part-1.jpg'
              alt=''
            />
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore. Itaque, modi suscipit. Earum accusamus
              molestiae sequi?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='course'>
            <img
              src='https://www.ed2go.com/common/images/1/16255/teacher-websites-t/jpg.jpg'
              alt=''
            />
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore. Itaque, modi suscipit. Earum accusamus
              molestiae sequi?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='course'>
            <img
              src='https://img.freepik.com/premium-photo/using-online-connect-technology-business-education-communication_1421-3950.jpg'
              alt=''
            />
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore. Itaque, modi suscipit. Earum accusamus
              molestiae sequi?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='course'>
            <img
              src='https://bioprocessintl.com/wp-content/uploads/2015/03/13-3-Dennett-Photo1.jpg'
              alt=''
            />
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore. Itaque, modi suscipit. Earum accusamus
              molestiae sequi?
            </p>
          </div>
        </SwiperSlide> 
        <SwiperSlide>
          <div className='course'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdo9vEE0xHhIlMbMwsw-k3SXhwUnf4id23RA&usqp=CAU'
              alt=''
            />
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore. Itaque, modi suscipit. Earum accusamus
              molestiae sequi?
            </p>
          </div>
        </SwiperSlide> */}

        {courseData?.map((course) => (
          <SwiperSlide>
            <div
              lg='3'
              className='d-flex justify-content-between mb-4'
              key={course.id}
            >
              <CourseCard course={course} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className='btn'>
        <a href='./courses.html'> View more </a>
      </button>
    </section>
  );
};

export default Courses;
