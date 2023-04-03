import { useState } from "react";
import Form from "../components/Form";
const Batiment = ({ batiment, CreateReports }) => {
  // console.log(CreateReports);
  const [toggle, setToggle] = useState(false);
  const [fromContainer, setFormContainer] = useState(false);

  const toggleClick = () => {
    setToggle(!toggle);
    setFormContainer(!fromContainer);
  };
  return (
    <>
      <div
        className={`${!fromContainer ? "batiment-btn" : "second-batiment-btn"}`}
        onClick={toggleClick}
      >
        {batiment}
      </div>
      <div className={`${fromContainer ? "form-container" : " "}`}>
        {toggle && (
          <Form
            batiment={batiment}
            fromContainer={fromContainer}
            CreateReports={CreateReports}
          />
        )}
      </div>
    </>
  );
};

export default Batiment;
