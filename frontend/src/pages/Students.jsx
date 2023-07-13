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
      <section className='sec-2'>
        <h2 className='section__title'>Students</h2>
        <p className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          architecto dolore dignissimos laudantium obcaecati quam rerum ea
          recusandae vel in deserunt ipsum, perferendis eaque unde aliquid est
          atque iusto necessitatibus. Quam esse ad modi perspiciatis fugiat ut
          similique quidem aut non possimus magni nihil accusantium eius, sequi
          Sit, optio aperiam!
        </p>
      </section>

      {/* <!-- Counter Section --> */}
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
    </>
  );
};

export default Students;
