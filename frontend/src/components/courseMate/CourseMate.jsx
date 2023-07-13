import React from "react";
import "./courseMate.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

const CourseMate = () => {
  return (
    <section className='course-mate-section'>
      <h2 className='section__title'>Departmental Course mates</h2>
      <Swiper
        effect={"coverflow"}
        slidesPerView={4}
        spaceBetween={20}
        autoplay={{
          delay: 1000,
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
            slidesPerView: 4,
          },
        }}
        className='courseMateSwiper'
      >
        <SwiperSlide className='course'>
          <img
            src='https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classNameroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk='
            alt=''
          />
          <h3>Name/ nick name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            labore. Itaque, modi suscipit.
          </p>
        </SwiperSlide>
        <SwiperSlide className='course'>
          <img
            src='https://media.istockphoto.com/id/883657418/photo/cant-wait-to-get-the-semester-started.jpg?b=1&s=170667a&w=0&k=20&c=eGTBavaKBpo4JYp3pQi1YoMM7sKlR_LxysWf9QtIEKY='
            alt=''
          />
          <h3>Name/ nick name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            labore. Itaque, modi suscipit.
          </p>
        </SwiperSlide>
        <SwiperSlide className='course'>
          <img
            src='https://media.istockphoto.com/id/1006213126/photo/beautiful-young-woman-with-books-and-digital-tablet-standing-at-window-in-campus.jpg?s=612x612&w=0&k=20&c=KIUPV1SrnQDVxq19Li7-6b7ncSpdm9iPq4aNKjIzqcA='
            alt=''
          />
          <h3>Name/ nick name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            labore. Itaque, modi suscipit.
          </p>
        </SwiperSlide>
        <SwiperSlide className='course'>
          <img
            src='https://www.smu.edu/-/media/Images/News/2020/Winter/iStock-509916803.jpg?h=666&iar=0&w=1000&hash=611FF3A2A6A50CE710DE06568D8B68AA'
            alt=''
          />
          <h3>Name/ nick name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            labore. Itaque, modi suscipit.
          </p>
        </SwiperSlide>
        <SwiperSlide className='course'>
          <img
            src='https://t4.ftcdn.net/jpg/03/43/56/01/360_F_343560107_3hbbBIEppQmOkr14pUwk2EbIEYDT7lV0.jpg'
            alt=''
          />
          <h3>Name/ nick name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            labore. Itaque, modi suscipit.
          </p>
        </SwiperSlide>
        <SwiperSlide className='course'>
          <img
            src='https://nationalcenter.org/project21/wp-content/uploads/sites/4/2018/06/black-college-student.jpg'
            alt=''
          />
          <h3>Name/ nick name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            labore. Itaque, modi suscipit.
          </p>
        </SwiperSlide>
        <SwiperSlide className='course'>
          <img
            src='https://www.blackhistorymonth.org.uk/wp-content/uploads/2021/01/shutterstock_763464100-623x438.jpg'
            alt=''
          />
          <h3>Name/ nick name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            labore. Itaque, modi suscipit.
          </p>
        </SwiperSlide>
        <SwiperSlide className='course'>
          <img
            src='https://thumbs.dreamstime.com/b/african-american-college-student-29039693.jpg'
            alt=''
          />
          <h3>Name/ nick name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            labore. Itaque, modi suscipit.
          </p>
        </SwiperSlide>
        <SwiperSlide className='course'>
          <img
            src='https://cdn.24.co.za/files/Cms/General/d/8655/878c8fbc58e14536b2c8dc73b25ef88c.jpg'
            alt=''
          />
          <h3>Name/ nick name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            labore. Itaque, modi suscipit.
          </p>
        </SwiperSlide>
        <button className='btn'>
          <a href='./students.html'> View more </a>
        </button>
      </Swiper>
    </section>
  );
};

export default CourseMate;
