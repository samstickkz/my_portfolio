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
    name: "Samuel Joseph",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animitempora maxime quae nobis, distinctio optio suscipit placeat autem delectus esse mollitia obcaecati eaque atque adipisci ratione dolorum, deserunt eligendi!",
  },
  {
    avatar: Avat2,
    name: "Samuel Joseph",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animitempora maxime quae nobis, distinctio optio suscipit placeat autem delectus esse mollitia obcaecati eaque atque adipisci ratione dolorum, deserunt eligendi!",
  },
  {
    avatar: Avat3,
    name: "Samuel Joseph",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animitempora maxime quae nobis, distinctio optio suscipit placeat autem delectus esse mollitia obcaecati eaque atque adipisci ratione dolorum, deserunt eligendi!",
  },
  {
    avatar: Avat4,
    name: "Samuel Joseph",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animitempora maxime quae nobis, distinctio optio suscipit placeat autem delectus esse mollitia obcaecati eaque atque adipisci ratione dolorum, deserunt eligendi!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Clients Review</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index}  className="testimonial" key={index}>
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
