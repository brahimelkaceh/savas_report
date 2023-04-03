import "../styles/form.css";
import { useState, useRef } from "react";
import { BiBorderRadius, BiCommentAdd } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import Rating from "@mui/material/Rating";
import SendBtn from "./buttons/SendBtn";

const Form = (props) => {
  const [inputVal, setInputVal] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState(2);

  // ? Observation Input
  //   ! Changing Input Value
  const handleChangeInput = (onChangeVal, i) => {
    const inputData = [...inputVal];
    inputData[i] = onChangeVal.target.value;
    setInputVal(inputData);
  };

  //   ! Add New Input
  const handleAdd = () => {
    const val = [...inputVal, []];
    setInputVal(val);
  };

  //   ! Delet Input
  const handleDelete = (i) => {
    const delVal = [...inputVal];
    delVal.splice(i, 1);
    setInputVal(delVal);
  };
  const deletInputs = () => {
    setIsActive((current) => !current);
  };
  // console.log(inputVal, "data-");

  // let batimentRef = useRef();

  let productionRef = useRef();
  let mortRef = useRef();
  let qteDeclasseRef = useRef();
  let alimntDistRef = useRef();
  let mortCumRef = useRef();
  let pontRef = useRef();
  let nbrOeufsCumRef = useRef();
  let poidVifRef = useRef();
  let homogenRef = useRef();
  let poidsOeufRef = useRef();
  let masOeufCumRef = useRef();
  let almCumRef = useRef();
  let almSjtRef = useRef();
  let eauRef = useRef();
  let lumHRef = useRef();
  let lumMRef = useRef();
  let flashHRef = useRef();
  let flashMRef = useRef();
  let formPlcRef = useRef();
  let colorRef = useRef();
  let qltCoqlRef = useRef();
  // let obsrvRef = useRef();
  const CreateReports = (e) => {
    e.preventDefault();
    let url = "https://savas-app-2000-default-rtdb.firebaseio.com/report.json";
    let report = {
      batimentId: props.batiment + mortRef.current.value.split(" ").join(""),
      batiment: props.batiment,
      production: productionRef.current.value,
      mortalite: mortRef.current.value,
      qteDeclasse: qteDeclasseRef.current.value,
      almntDist: alimntDistRef.current.value,
      mortCum: mortCumRef.current.value,
      pont: pontRef.current.value,
      nbrOeufsCum: nbrOeufsCumRef.current.value,
      poidVif: poidVifRef.current.value,
      homogeneite: homogenRef.current.value,
      poidsOeuf: poidsOeufRef.current.value,
      masOeufCum: masOeufCumRef.current.value,
      almCum: almCumRef.current.value,
      almSjt: almSjtRef.current.value,
      eau: eauRef.current.value,
      lumH: lumHRef.current.value,
      lumM: lumMRef.current.value,
      flashH: flashHRef.current.value,
      flashM: flashMRef.current.value,
      formPlc: formPlcRef.current.value,
      coloration: colorRef.current.value,
      qltCoq: qltCoqlRef.current.value,
      observation: inputVal,
    };
    console.log(report);
    console.log(typeof inputVal);

    props.CreateReports(report, url);
    e.target.reset();
  };

  return (
    <form onSubmit={CreateReports} className="form">
      <div className="input-container ic2">
        <input
          ref={productionRef}
          id="producrion"
          className="input"
          type="number"
          placeholder=" "
        />
        <div className="cut"></div>
        <label htmlFor="producrion" className="placeholder">
          Production
        </label>
      </div>
      <div className="input-container ic2">
        <input
          ref={mortRef}
          name="mortalite"
          id="mortalite"
          className="input"
          type="number"
          placeholder=" "
        />

        <label htmlFor="mortalite" className="placeholder">
          Mortalite
        </label>
      </div>
      <div className="input-container ic2">
        <input
          ref={qteDeclasseRef}
          id="qteDeclasse"
          className="input"
          type="number"
          placeholder=" "
        />
        <div className="cut"></div>
        <label htmlFor="qteDeclasse" className="placeholder">
          Qte Declasse
        </label>
      </div>
      <div className="input-container ic2">
        <input
          ref={alimntDistRef}
          id="almntDist"
          className="input"
          type="number"
          placeholder=" "
        />
        <div className="cut"></div>
        <label htmlFor="almntDist" className="placeholder">
          Aliment Distribue
        </label>
      </div>
      <div className="input-container ic2">
        <input
          ref={poidsOeufRef}
          id="poidsOeuf"
          className="input"
          type="number"
          placeholder=" "
        />
        <label htmlFor="poidsOeuf" className="placeholder">
          Poids Moyen d'Œuf (g)
        </label>
      </div>
      <div className="input-container ic2">
        <input
          ref={poidVifRef}
          id="poidVif"
          className="input"
          type="number"
          placeholder=" "
        />
        <label htmlFor="poidVif" className="placeholder">
          Poids Vif (g)
        </label>
      </div>

      <div className="input-container ic2">
        <input
          ref={homogenRef}
          id="homogeneite"
          className="input"
          type="number"
          placeholder=" "
        />
        <label htmlFor="homogeneite" className="placeholder">
          Homogénéité (g)
        </label>
      </div>

      <div className="input-container ic2">
        <input
          ref={eauRef}
          id="eau"
          className="input"
          type="number"
          placeholder=" "
        />
        <label htmlFor="eau" className="placeholder">
          Eau (ml/sujet)
        </label>
      </div>
      <div className="input-container ic2">
        <input
          ref={formPlcRef}
          id="formPlc"
          className="input"
          type="text"
          placeholder=" "
        />
        <label htmlFor="formPlc" className="placeholder">
          Formule en Place
        </label>
      </div>
      {/* Temperateur */}
      <div className="input__container-box">
        <div className="input-container ic2">
          <input
            type="number"
            min="0"
            max="35"
            className="input"
            id="minTemp"
            placeholder=" "
          />
          <label htmlFor="minTemp" className="placeholder">
            Temperateur (Min)
          </label>
        </div>
        <div className="input-container ic2">
          <input
            type="number"
            min="0"
            max="35"
            className="input"
            id="maxTemp"
            placeholder=" "
          />
          <label htmlFor="maxTemp" className="placeholder">
            Temperateur (Max)
          </label>
        </div>
      </div>

      {/* Lumiere */}
      <div className="input__container-box">
        <div className="input-container ic2">
          <input
            type="time"
            className="input"
            name=""
            id="allumage"
            placeholder=" "
          />
          <label htmlFor="allumage" className="placeholder">
            Lumiere Allumage
          </label>
        </div>
        <div className="input-container ic2">
          <input
            type="time"
            className="input"
            name=""
            id="eteinder"
            placeholder=" "
          />
          <label htmlFor="eteinder" className="placeholder">
            Lumiere Eteinder
          </label>
        </div>
      </div>
      {/* flash */}
      <div className="input__container-box">
        <div className="input-container ic2">
          <input
            type="time"
            className="input"
            name=""
            id="allumage"
            placeholder=" "
          />
          <label htmlFor="allumage" className="placeholder">
            Flash Allumage
          </label>
        </div>
        <div className="input-container ic2">
          <input
            type="time"
            className="input"
            name=""
            id="eteinder"
            placeholder=" "
          />
          <label htmlFor="eteinder" className="placeholder">
            Flash Eteinder
          </label>
        </div>
      </div>

      {/* coloration */}
      <div className="input-container ic2">
        <select name="" className="input" id="coloration">
          <option value="">--</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
          <option value="110">110</option>
        </select>
        <label htmlFor="coloration" className="placeholder">
          Coloration
        </label>
      </div>

      {/* Qlt coquille */}
      <div className="input-container ic2">
        <div className="input">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        <label htmlFor="" className="placeholder">
          Qlt Coquille
        </label>
      </div>
      <div>
        {inputVal.map((data, i) => {
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
              }}
              className={isActive ? "remove" : ""}
            >
              <div className="input-container ic2">
                <input
                  value={data}
                  onChange={(e) => handleChangeInput(e, i)}
                  // ref={obsrvRef}
                  id="observation"
                  type="text"
                  className="input"
                  placeholder=" "
                />
                <label htmlFor="observation" className="placeholder">
                  Observation
                </label>
              </div>
              <MdDeleteForever
                className="delete"
                onClick={() => handleDelete(i)}
              />
            </div>
          );
        })}
        <div onClick={handleAdd} className="input-container ic2 observ">
          <label className="observation-placeholder">
            Ajouter une Observation
          </label>
          <BiCommentAdd className="ajouter" />
        </div>
      </div>
      <SendBtn onClick={() => deletInputs()} />
    </form>
  );
};
export default Form;
