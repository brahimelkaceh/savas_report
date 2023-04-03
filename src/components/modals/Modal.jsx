import "./modal.css";
import { FaTimes } from "react-icons/fa";
import FirstModalForm from "../forms/FirstModalForm";
import SecondModalForm from "../forms/SecondModalForm";
import { showModal } from "../../slices/ShowModal";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Modal = ({ CreateReports, currentBat, lots }) => {
  const modalState = useSelector((state) => state.showModal.modalState);
  const dispatch = useDispatch();
  const [className, setClassName] = useState("modal-content scale-up-top");
  const ChangeClass = () => {
    setClassName("scale-out-top");
  };

  return (
    <div
      className="show-modal modal"
      onClick={() => {
        dispatch(showModal(false));
      }}
    >
      <div className={className}>
        <button
          className="close"
          onClick={() => {
            dispatch(showModal(false));
            setClassName("scale-out-top");
          }}
        >
          <FaTimes />
        </button>
        <h2>Créer un nouveau Lot </h2>
        {/* <FirstModalForm /> */}
        <SecondModalForm />
      </div>
    </div>
  );
};

export default Modal;

// {showModal ? (
//   <NvModalForm CreateReports={CreateReports} currentBat={currentBat} />
// ) : (
//   <OldModalForm
//     CreateReports={CreateReports}
//     currentBat={currentBat}
//     lots={lots}
//   />
// )}
