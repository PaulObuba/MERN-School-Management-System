import React from "react";
import '../styles/teachers.css';

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// COMPONENTS
import CommonSection from "../sheared/common_section/CommonSection";
import Counter from "../sheared/counter_section/Counter.jsx";

const Teachers = () => {
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
        className='teachersSwiper'
      >
        <SwiperSlide>
          <div
            className='hero-section'
            style={{
              backgroundImage:
                "url('https://www.shutterstock.com/image-photo/happy-mixed-raced-black-female-260nw-2007207017.jpg')",
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
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='hero-section'
            style={{
              backgroundImage:
                "url('https://i.guim.co.uk/img/media/6909bc33c38ea797d8d52cd681ff31bd28dd95ba/0_45_5000_3000/master/5000.jpg?width=1200&quality=85&auto=format&fit=max&s=b2d486ce383e6bae0f44d7a010278f0e')",
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
                "url('https://imageio.forbes.com/specials-images/imageserve/621525295c388b8c01a869a8/Frustrated-elementary-teacher/960x0.jpg?format=jpg&width=960')",
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
                "url('https://marvel-b1-cdn.bc0a.com/f00000000026007/resilienteducator.com/wp-content/uploads/2014/11/math-teacher.jpg')",
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
      <CommonSection title={'Teachers'} />

      {/* <!-- COUNTER SECTION --> */}
      <Counter />

    </>
  );
};

export default Teachers;
