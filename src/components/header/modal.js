import React from "react";
import Modal from "react-modal";


const customStyles = {
  content: {
    maxWidth: "400px",
    height: "15%",
    margin: "auto",
    textAlign: "center", // Center-align the text within the modal
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

const CustomModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel=" i will add my CV soon "
      style={customStyles} // Apply the custom styles
    >
      <h2 className="mod">Hey!!! </h2>
      <p className="mod">i will add my CV soon </p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default CustomModal;
