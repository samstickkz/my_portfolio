import React from "react";
import "./testimonials.css";
import Avat1 from "../../assets/avatar1.jpg";
import Avat2 from "../../assets/avatar2.jpg";
import Avat3 from "../../assets/avatar3.jpg";
import Avat4 from "../../assets/avatar4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avat1,
    name: "Tamara Samuel",
    review:
      'Thank you, Samuel Joseph, for creating <a href="https://www.travelexpore.com">https://www.travelexpore.com</a>. Your vision has made travel more accessible and enjoyable for all of us. Your dedication is greatly appreciated.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Clients Review</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView="auto"
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small
                className="client_review"
                dangerouslySetInnerHTML={{ __html: review }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
