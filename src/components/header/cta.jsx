import React, { useState } from "react";
import CV from "../../assets/Samuel_joseph_React_flutter.pdf";
import CustomModal from "./modal"; // Replace with the correct import path

const Cta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="CTA">
      <a href="#" className="btn" onClick={openModal}>
        Download CV
      </a>
      <a href="#contact" className="btn btn_primary">
        Let's Talk
      </a>
      <CustomModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Cta;
