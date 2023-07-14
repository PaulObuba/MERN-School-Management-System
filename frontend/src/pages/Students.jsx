import React from "react";
import '../styles/students.css';

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
import Counter from "../sheared/counter_section/Counter.jsx";;

const Students = () => {
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
        className='studentsSwiper'
      >
        <SwiperSlide>
          <div
            className='hero-section'
            style={{
              backgroundImage:
                "url('https://s35691.pcdn.co/wp-content/uploads/2016/03/iStock_000037379776_Medium.160328.jpg')",
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
                "url('https://c.files.bbci.co.uk/130F0/production/_105646087_students.jpg')",
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
                "url('https://media.istockphoto.com/photos/handsome-afro-student-posing-on-bookshelves-background-picture-id1171062918?b=1&k=20&m=1171062918&s=612x612&w=0&h=Kb6lK8UN5YonWr9X4idrzzbMyHU5bauiXSUDGm4wdcs=')",
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
                "url('https://mauconline.net/wp-content/uploads/10-Tips-for-Marketing-to-College-Students-New.jpg')",
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
      <CommonSection title={'Students'} />

      {/* <!-- COUNTER SECTION --> */}
      <Counter />
    </>
  );
};

export default Students;
