import React from "react";
import "../styles/courses.css";

// COMPONENTS
import Counter from "../sheared/counter_section/Counter.jsx";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CommonSection from "../sheared/common_section/CommonSection";

const Courses = () => {
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
        className='homeCourseSwiper'
      >
        <SwiperSlide>
          <div
            className='hero-section'
            style={{
              backgroundImage:
                "url('https://schoolings.org/wp-content/uploads/2021/01/DSCOE-Mosogar-Coures.jpg')",
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
                "url('https://media.istockphoto.com/id/1366428092/photo/webinar-e-learning-skills-business-internet-technology-concepts-training-webinar-e-learning.jpg?b=1&s=170667a&w=0&k=20&c=qjK4h0qt4W_NNG8TmboGw8RDRv8TNzEoFM_JEDZ1Ah0=')",
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
                dsapiente quos quibusdam iusto, corrupti nihil earum dolor
                accusamu
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
                "url('https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg')",
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
                "url('https://www.washingtonpost.com/creativegroup/uploads/2022/01/17225741/Article-2-smaller-image-scaled.jpg')",
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

      {/* <!-- SECTION 2 --> */}
     <CommonSection title={'Courses'} />

      {/* <!-- COUNTER SECTION --> */}
      <Counter />
    </>
  );
};

export default Courses;
