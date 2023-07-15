import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio3.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
// an arrar of data

const data = [
  {
    id: 1,
    image: IMG1,
    title: "God loves you",
    github: "https://github.com/samstickkz",
    demo: "gitjub.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "God loves you",
    github: "https://github.com/samstickkz",
    demo: "gitjub.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "God loves you",
    github: "https://github.com/samstickkz",
    demo: "gitjub.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "God loves you",
    github: "https://github.com/samstickkz",
    demo: "gitjub.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "God loves you",
    github: "https://github.com/samstickkz",
    demo: "https://www.tiktok.com/@obong_samjoe",
  },
  {
    id: 6,
    image: IMG6,
    title: "God loves you",
    github: "https://github.com/samstickkz",
    demo: "https://www.tiktok.com/@obong_samjoe",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Jobs</h5>
      <h2>Portfolio</h2>
      <div className="container container_portfolio">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="article_item">
              <div className="div_port-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn_primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
