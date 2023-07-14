import React from "react";
import "../styles/events.css";
import pic2 from "../assets/images/pic-2.png";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import CommonSection from "../sheared/common_section/CommonSection";
import Counter from "../sheared/counter_section/Counter.jsx";

import eventData from "../assets/data/tours";
import EventCard from "../sheared/cards/EventCard.jsx";

const Events = () => {
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
        className='homeEventSwiper'
      >
        <SwiperSlide>
          <div
            className='hero-section'
            style={{
              backgroundImage:
                "url('https://media.istockphoto.com/id/482362583/photo/multi-ethnic-friends-excitedly-hold-diplomas-after-college-graduation.jpg?s=612x612&w=0&k=20&c=0u-Jm_50Rtdwl5n8vMZ-ROfxEg-BCSmg3ZKJJ_w5CWY=')",
            }}
          >
            <div className='overlay'></div>
            <div className='hero-content'>
              <p className='hero-text1'>Better education for better</p>
              <h1>Civil Engineers</h1>
              <p className='hero-text2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
                debitis? Recusandae odit facilis autem sint, laboriosam ver.
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
                "url('https://events.utk.edu/wp-content/uploads/sites/65/2019/01/eclipse.jpg')",
            }}
          >
            <div className='overlay'></div>
            <div className='hero-content'>
              <h1>
                {" "}
                Federal University <br />
                of Technology Owerri
              </h1>
              <p className='hero-text2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
                debitis? Recusandae odit facilis autem sint, laboriosam vero
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
                "url('https://www.ogscapital.com/wp-content/uploads/2018/01/Event-Planning-Business-Plan-780x440.jpg')",
            }}
          >
            <div className='overlay'></div>
            <div className='hero-content'>
              <h1>
                {" "}
                Federal University <br />
                of Technology Owerri
              </h1>
              <p className='hero-text2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
                debitis? Recusandae odit facilis autem sint, laboriosam vero
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
                "url('https://www.cornwall.ac.uk/wp-content/uploads/2020/07/CC-EVENT-GENERAL-600x400.jpg')",
            }}
          >
            <div className='overlay'></div>
            <div className='hero-content'>
              <h1>
                {" "}
                Federal University <br />
                of Technology Owerri
              </h1>
              <p className='hero-text2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
                debitis? Recusandae odit facilis autem sint, laboriosam vero
              </p>
              <div>
                <button className='btn'>Learn more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <!-- SECTION 2 --> */}
      <CommonSection title={"Events"} />

      {/* <!-- COUNTER SECTION --> */}
      <Counter />

      {/* <!-- Previous Evnets --> */}
      <section className='previous-events'>
        <h2 className='section__title'>Upcoming Events</h2>
        <Swiper
          effect={"coverflow"}
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          loop={true}
          loopFillGroupWithBlank={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[Autoplay, EffectCoverflow]}
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
              slidesPerView: 3,
            },
          }}
          className='eventSwiper'
        >
          {/* <SwiperSlide className='event'>
            <div className='time'>
              <p className='date'>14</p>
              <p className='date-string'>
                <span>FEB</span> 23
              </p>
            </div>
            <img src={pic2} alt='' />
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore. Itaque, modi suscipit. Earum accusamus
              molestiae sequi?
            </p>
          </SwiperSlide>
          <SwiperSlide className='event'>
            <div className='time'>
              <p className='date'>14</p>
              <p className='date-string'>
                <span>FEB</span> 23
              </p>
            </div>
            <img src={pic2} alt='' />
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore. Itaque, modi suscipit. Earum accusamus
              molestiae sequi?
            </p>
          </SwiperSlide>
          <SwiperSlide className='event'>
            <div className='time'>
              <p className='date'>14</p>
              <p className='date-string'>
                <span>FEB</span> 23
              </p>
            </div>
            <img src={pic2} alt='' />
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore. Itaque, modi suscipit. Earum accusamus
              molestiae sequi?
            </p>
          </SwiperSlide>
          <SwiperSlide className='event'>
            <div className='time'>
              <p className='date'>14</p>
              <p className='date-string'>
                <span>FEB</span> 23
              </p>
            </div>
            <img src={pic2} alt='' />
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore. Itaque, modi suscipit. Earum accusamus
              molestiae sequi?
            </p>
          </SwiperSlide>
          <SwiperSlide className='event'>
            <div className='time'>
              <p className='date'>14</p>
              <p className='date-string'>
                <span>FEB</span> 23
              </p>
            </div>
            <img src={pic2} alt='' />
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore. Itaque, modi suscipit. Earum accusamus
              molestiae sequi?
            </p>
          </SwiperSlide>
          <SwiperSlide className='event'>
            <div className='time'>
              <p className='date'>14</p>
              <p className='date-string'>
                <span>FEB</span> 23
              </p>
            </div>
            <img src={pic2} alt='' />
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore. Itaque, modi suscipit. Earum accusamus
              molestiae sequi?
            </p>
          </SwiperSlide>
          <SwiperSlide className='event'>
            <div className='time'>
              <p className='date'>14</p>
              <p className='date-string'>
                <span>FEB</span> 23
              </p>
            </div>
            <img src={pic2} alt='' />
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore. Itaque, modi suscipit. Earum accusamus
              molestiae sequi?
            </p>
          </SwiperSlide>
          <SwiperSlide className='event'>
            <div className='time'>
              <p className='date'>14</p>
              <p className='date-string'>
                <span>FEB</span> 23
              </p>
            </div>
            <img src={pic2} alt='' />
            <h3>Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, labore. Itaque, modi suscipit. Earum accusamus
              molestiae sequi?
            </p>
          </SwiperSlide> */}

          {eventData?.map((event) => (
            <SwiperSlide>
              <div
                lg='3'
                className='d-flex justify-content-between mb-4'
                key={event.id}
              >
                <EventCard event={event} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Events;
