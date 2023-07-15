import React from "react";
import "./experience.css";
import { MdLibraryAddCheck } from "react-icons/md";

const experience = () => {
  return (
    <section id="exper">
      <h5>My Skills</h5>

      <h2>My Experience</h2>

      {/* first container */}
      <div className="container experience_container">
        {/* first container */}
        <div className="experience_mobile">
          <h3>Mobile Developer</h3>
          <div className="expe_content">
            <article className="expe_details">
              <MdLibraryAddCheck className="expe-icons" />
             <div>
             <h4>skill</h4>
              <small className="text-light">pro</small>
             </div>
            </article>{" "}
            <article className="expe_details">
              <MdLibraryAddCheck className="expe-icons"/>
             <div>
             <h4>skill</h4>
              <small className="text-light">pro</small>
             </div>
            </article>{" "}
            <article className="expe_details">
              <MdLibraryAddCheck className="expe-icons"/>
             <div>
             <h4>skill</h4>
              <small className="text-light">pro</small>
             </div>
            </article>{" "}
            <article className="expe_details">
              <MdLibraryAddCheck className="expe-icons"/>
             <div>
             <h4>skill</h4>
              <small className="text-light">pro</small>
             </div>
            </article>{" "}
            <article className="expe_details">
              <MdLibraryAddCheck className="expe-icons" />
             <div>
             <h4>skill</h4>
              <small className="text-light">pro</small>
             </div>
            </article>{" "}
          </div>
        </div>

        {/* web */}
        <div className="expe_web">
          <h3>Mobile Developer</h3>
          <div className="expe_content">
          <article className="expe_details">
              <MdLibraryAddCheck className="expe-icons" />
             <div>
             <h4>skill</h4>
              <small className="text-light">pro</small>
             </div>
            </article>{" "}
            <article className="expe_details">
              <MdLibraryAddCheck className="expe-icons"/>
             <div>
             <h4>skill</h4>
              <small className="text-light">pro</small>
             </div>
            </article>{" "}
            <article className="expe_details">
              <MdLibraryAddCheck className="expe-icons" />
             <div>
             <h4>skill</h4>
              <small className="text-light">pro</small>
             </div>
            </article>{" "}  <article className="expe_details">
              <MdLibraryAddCheck className="expe-icons" />
             <div>
             <h4>skill</h4>
              <small className="text-light">pro</small>
             </div>
            </article>{" "}  <article className="expe_details">
              <MdLibraryAddCheck className="expe-icons" />
             <div>
             <h4>skill</h4>
              <small className="text-light">pro</small>
             </div>
            </article>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
