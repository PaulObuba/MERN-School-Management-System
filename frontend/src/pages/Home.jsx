import React from "react";
import "../styles/home.css";

import Courses from "../components/courses/Courses.jsx";
import CourseMate from "../components/courseMate/CourseMate.jsx";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className='homeSwiper'
      >
        <SwiperSlide>
          <div
            className='hero-section'
            style={{
              backgroundImage:
                "url('https://xqsuperschool.org/rethinktogether/wp-content/uploads/sites/5/2021/05/pexels-pixabay-267885.jpg')",
            }}
          >
            <div className='overlay'></div>
            <div className='hero-content'>
              <p className='hero-text1'>Better education for better</p>
              <h1>Civil Engineers</h1>
              <p className='hero-text2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
                debitis? Recusandae odit facilis autem sint, laboriosam vero
                perspiciatis necessitatibus fugiat, sapiente quos quibusdam
                iusto, corrupti nihil earum dolor accusamu
              </p>
              <div>
                <button className='btn'>Learn more</button>
              </div>
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
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='hero-section'
            style={{
              backgroundImage:
                "url('https://media.istockphoto.com/id/1171063170/photo/young-female-graphic-designer-creating-new-project-sitting-on-floor.jpg?s=612x612&w=0&k=20&c=57avR6pKcQx_o-f0PdTV_DVoRMx7eqCaFb6zTelNqI4=')",
            }}
          >
            <div className='overlay'></div>
            <div className='hero-content'>
              <h1>
                Federal University <br />
                of Technology Owerri
              </h1>
              <p className='hero-text2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
                debitis? Recusandae odit facilis autem sint, laboriosam vero
                perspiciatis necessitatibus fugiat, sapiente quos quibusdam
                iusto, corrupti nihil earum dolor accusamu
              </p>
              <div>
                <button className='btn'>Learn more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='hero-section'
            style={{
              backgroundImage:
                "url('https://admissions.usf.edu/hs-fs/hubfs/adm-blog-spring-reading-list-college-students-inline.jpg?width=740&name=adm-blog-spring-reading-list-college-students-inline.jpg')",
            }}
          >
            <div className='overlay'></div>
            <div className='hero-content'>
              <h1>
                WHAT STARTS HERE <br />
                CHANGES THE WORLD
              </h1>
              <p className='hero-text2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
                debitis? Recusandae odit facilis autem sint, laboriosam vero
                perspiciatis necessitatibus fugiat, sapiente quos quibusdam
                iusto, corrupti nihil earum dolor accusamu
              </p>
              <div>
                <button className='btn'>Learn more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='hero-section'
            style={{
              backgroundImage:
                "url('https://media.istockphoto.com/id/1248521713/photo/exhausted-and-tired-black-girl-uses-laptop-writes-essay-study-for-class-assignment-students.jpg?s=612x612&w=0&k=20&c=TQE-zu4P3KOEOX0303hB1Px760rhOBoOMcUPPkQVzas=')",
            }}
          >
            <div className='overlay'></div>
            <div className='hero-content'>
              <h1>
                Federal University <br />
                of Technology Owerri
              </h1>
              <p className='hero-text2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
                debitis? Recusandae odit facilis autem sint, laboriosam vero
                perspiciatis necessitatibus fugiat, sapiente quos quibusdam
                iusto, corrupti nihil earum dolor accusamu
              </p>
              <div>
                <button className='btn'>Learn more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <!-- About Section --> */}
      <section className='about__section'>
        <h2 className='section__title'>About Us</h2>
        <p className='text'>
          We are a public school intrested in any student exploring the field of
          sicence, technology, engineering and math.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel a
          corrupti temporibus repellendus facere fugiat? Totam consequuntur
          rerum necessitatibus, eos pariatur corporis voluptates, saepe aliquam
          maxime accusamus nam voluptatum! Nam provident cupiditate rerum
          nihil..
        </p>
      </section>

      {/* <!-- MISSION SECTION  --> */}
      <section className='mission-section'>
        <div className='overlay'></div>
        <h2>Mission</h2>
        <p className='text'>
          Accelerating our progress as international Civil Engineering leader to
          fulfill our academic and professional passions.
        </p>
      </section>

      {/* <!-- Courses Section --> */}
      <Courses />

      {/* <!-- VISION SECTION --> */}
      <section className='vision-section'>
        <div className='overlay'></div>

        <h2>Vision</h2>
        <p className='text'>
          Accelerating our progress as international Civil Engineering leader to
          fulfill our academic and professional passions.
        </p>
      </section>

      {/* <!-- Course Mate Section --> */}
      <CourseMate />

      <section className='picture-section'></section>
    </>
  );
};

export default Home;
