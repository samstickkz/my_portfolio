import React from "react";
import "./services.css";
import { BiCheckDouble } from "react-icons/bi";

const services = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li> <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li> <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li> <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li> <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li>
          </ul>
        </article>

        {/* web dev */}
        <article className="service">
          <div className="service_head">
            <h3>WEb Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li> <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li> <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li> <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li> <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li>
          </ul>
        </article>

        {/* App Development */}
        <article className="service">
          <div className="service_head">
            <h3>App Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li> <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li> <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li> <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li> <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>App Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li>
            <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li> <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li> <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li> <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li> <li>
              <BiCheckDouble className="service_list-icon" />{" "}
              <p>Lorem fugiat labore quo autem nesciunt.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;
