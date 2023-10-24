import { useState, useEffect, useMemo } from "react";
import UseFetchData from "../../../hooks/UseFetchData";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SubmitBtn from "../../../components/buttons/SubmitBtn";
import { AiOutlineSend } from "react-icons/ai";
import { useData } from "../context/DataProvider";
import ObservationsModal from "./modals/ObservationsModal";
let base_url = "https://farmdriver.savas.ma/api/";

const Observation = ({ formik }) => {
  const { data } = useData();
  const [isOpen, setIsOpen] = useState(true);
  const [date, setDate] = useState("");
  const [observationUrg, setobservationUrg] = useState(0);
  const [observationText, setobservationText] = useState("");
  const [observationobjects, setobservationobjects] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const currentDate = new Date().toISOString().slice(0, 10); // Get the current date in YYYY-MM-DD format

  const apiUrl = `${base_url}add-observ/`;
  const method = "POST";
  const handleSubmitObservation = async () => {
    try {
      setLoading(true);
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;
      const response = await fetch(apiUrl, {
        method: method,
        headers: {
          Authorization: `Bearer ${accessToken}`,

          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "lotId": data?.lotId,
          "date": date,
          "observs": observationobjects,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data posted successfully:", result);
        setobservationobjects([]);
        setDate("");
      } else {
        console.error("Error posting data to the API");
        setError(new Error("Failed to post data to the API"));
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  // ! open close the boxes
  const toggleBox = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionChange = (option) => {
    setobservationUrg(option);
  };

  const handleDateInputChange = (event) => {
    setDate(event.target.value);
  };
  const handleObservationInputChange = (event) => {
    setobservationText(event.target.value);
  };

  const handleAddObservation = (e) => {
    e.preventDefault();
    if (observationUrg === null) {
      setobservationUrg("0");
    }
    setFormError("");

    if (editingIndex === -1) {
      // Creating a new observation
      const newObservationObject = {
        text: observationText,
        urg: observationUrg,
      };
      setobservationobjects([...observationobjects, newObservationObject]);
      console.log("New observation is created");
    } else {
      // Updating an existing observation
      const editedData = { text: observationText, urg: observationUrg };

      setobservationobjects((prevData) =>
        prevData.map((data, index) =>
          index === editingIndex ? editedData : data
        )
      );
      setEditingIndex(-1);
    }

    // Reset form fields and state variables
    setobservationUrg(null);
    setobservationText("");
  };

  const handleEdit = (index) => {
    const formToEdit = observationobjects[index];
    setobservationUrg(formToEdit.urg);
    setobservationText(formToEdit.text);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setobservationobjects((prevData) => prevData.filter((_, i) => i !== index));
  };
  const handleClearAll = () => {
    setobservationobjects([]);
  };

  useEffect(() => {
    setDate(data?.nextDateFormat?.replaceAll("/", "-"));
  }, [data, observationobjects]);
  return (
    <div className={`box ${isOpen ? "open" : ""}`}>
      {open && (
        <ObservationsModal
          open={open}
          setOpen={setOpen}
          onSubmit={handleSubmitObservation}
          observationobjects={observationobjects}
          date={date}
          lotId={data?.lotId}
        />
      )}

      {data && (
        <div className="box-header observation" onClick={toggleBox}>
          <div style={{ display: "flex", gap: 10 }}>
            <h3>Observations</h3> <RateReviewIcon />
          </div>
          <div className="box-icon">
            {isOpen ? <BsArrowUpSquare /> : <BsArrowDownSquare />}
          </div>
        </div>
      )}
      {isOpen && data && (
        <div className="box-content observation">
          {/* OBSERVATiONS */}
          <div className="inputs-group" style={{ width: "75%" }}>
            <div className="inputs-container">
              <label>
                <input
                  type="date"
                  className="input"
                  name="date"
                  value={date}
                  onChange={handleDateInputChange}
                  max={currentDate}
                />
                <span>date</span>
              </label>
            </div>
            <div className="inputs-container">
              <label>
                <textarea
                  id="observ"
                  name="observ"
                  value={observationText}
                  onChange={handleObservationInputChange}
                  cols="30"
                  rows="10"
                  placeholder="Observation"
                  required
                  className={
                    observationText?.length > 0 ? "input input-valid" : "input"
                  }
                >
                  <span>Observation</span>
                </textarea>
              </label>
            </div>
          </div>
          <div
            className="inputs-group"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "78%",
            }}
          >
            <div className="inputs-container">
              <div
                className="inputs-group"
                style={{
                  alignSelf: "flex-end",
                  position: "relative",
                  top: "-25%",
                  width: "10%",
                }}
              >
                <div className="radio-button-form">
                  <input
                    id="good"
                    type="radio"
                    name="r"
                    value="good"
                    checked={observationUrg === "1"}
                    onChange={() => handleOptionChange("1")}
                  />
                  <label htmlFor="good" className="good"></label>
                  <input
                    id="02"
                    type="radio"
                    name="r"
                    value="warning"
                    checked={observationUrg === "2"}
                    onChange={() => handleOptionChange("2")}
                  />
                  <label htmlFor="02" className="warning"></label>
                  <input
                    id="03"
                    type="radio"
                    name="r"
                    value="danger"
                    checked={observationUrg === "3"}
                    onChange={() => handleOptionChange("3")}
                  />
                  <label htmlFor="03" className="danger"></label>
                  <input
                    id="04"
                    type="radio"
                    name="r"
                    value="info"
                    checked={observationUrg === "4"}
                    onChange={() => handleOptionChange("4")}
                  />
                  <label htmlFor="04" className="info"></label>
                </div>
              </div>
            </div>
            <div className="inputs-container">
              <button
                type="button"
                onClick={handleAddObservation}
                className={editingIndex === -1 ? "ajouter" : "modifier"}
              >
                {editingIndex === -1 ? "Ajouter" : "modifier"}
              </button>
            </div>
          </div>

          {observationobjects.map((data, index) => {
            return (
              <div className="observation-box " key={index}>
                <div>
                  <div
                    className={
                      data.urg == 1
                        ? "good-container"
                        : data.urg == 2
                        ? "warning-container"
                        : data.urg == 3
                        ? "danger-container"
                        : "info-container"
                    }
                  >
                    <div
                      className={
                        data.urg == 1
                          ? "good"
                          : data.urg == 2
                          ? "warning"
                          : data.urg == 3
                          ? "danger"
                          : "info"
                      }
                    ></div>
                    <span>{data.text}</span>
                  </div>
                </div>
                <div>
                  <IconButton
                    onClick={() => handleEdit(index)}
                    aria-label="edit"
                    size="large"
                    className="edit"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleDelete(index);
                      setEditingIndex(-1);
                      setobservationText("");
                    }}
                    aria-label="delete"
                    size="large"
                    className="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            );
          })}
          <div className="inputs-container">
            <button
              type="submit"
              className="edit-btn"
              disabled={data?.lotId ? false : true}
              onClick={(e) => {
                if (data?.lotId) {
                  setOpen(true);
                }
                console.log("you clicked");
              }}
            >
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <AiOutlineSend />
                </div>
              </div>
              <span>Submit</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Observation;
