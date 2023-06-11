import "../styles/form.css";
import { AiOutlineSend } from "react-icons/ai";

import { useState, useRef, useEffect } from "react";
import { BiBorderRadius, BiCommentAdd } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import Rating from "@mui/material/Rating";
import Modal from "./modals/Modal";
import { useDispatch, useSelector } from "react-redux";
import { ProductionData } from "../slices/ShowBatimentCat";
import { inputStatus } from "../slices/Showfields";
import SelectInput from "@mui/material/Select/SelectInput";
let base_url = "https://pouliprod.savas.ma/api/";

const Form = (props) => {
  const [full, setFull] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputV = useSelector((state) => state.toggleFieldStatus.inputV);
  const dispatch = useDispatch();

  // const [reform, setReform] = useState(
  //   props?.prodcutionData?.lot[0]?.reformStarted
  // );
  const [nextDate, setNextDate] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const [inputVal, setInputVal] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState(0);
  const [oldBatimentValue, setOldBatimentValue] = useState("");

  const [productionInput, setProductionInput] = useState("");
  const [mortInput, setMortInput] = useState("");
  const [declassInput, setDeclassInput] = useState("");
  const [alimentInput, setAlimentInput] = useState("");
  const [eauInput, setEauInput] = useState("");
  const [pmoInput, setPmoInput] = useState("");
  const [pvInput, setPvInput] = useState("");
  const [homogInput, setHomogInput] = useState("");
  const [formuleInput, setFormuleInput] = useState("");
  const [temMinInput, setTemMinInput] = useState("");
  const [temMaxInput, setTemMaxInput] = useState("");
  const [lightOnInput, setLightOnInput] = useState("");
  const [lightOffInput, setLightOffInput] = useState("");
  const [flashOnInput, setFlashOnInput] = useState("");
  const [flashOffInput, setFlashOffInput] = useState("");
  const [itensiteInput, setItensiteInput] = useState("");
  const [colorationInput, setColorationInput] = useState("");
  const [fienteInput, setFienteInput] = useState("");
  const [aspPoulInput, setAspPoulInput] = useState("");

  // Clear All Inputs functionality
  const clearAllInputs = () => {
    setProductionInput("");
    setMortInput("");
    setDeclassInput("");
    setAlimentInput("");
    setEauInput("");
    setPmoInput("");
    setPvInput("");
    setHomogInput("");
    setFormuleInput("");
    setTemMinInput("");
    setTemMaxInput("");
    setLightOffInput("");
    setLightOnInput("");
    setFlashOffInput("");
    setFlashOnInput("");
    setItensiteInput("");
    setColorationInput("");
    setFienteInput("");
    setAspPoulInput("");
    setInputVal([]);
    setValue(0);
  };
  // ? Observation Input
  //   ! Changing Input Value
  const handleChangeInput = (onChangeVal, i) => {
    // console.log(onChangeVal.target.value);
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
    // setIsActive((current) => !current);
  };
  // console.log(inputVal, "data-");

  // let batimentRef = useRef();

  let batimentIdRef = useRef();
  let productionRef = useRef();
  let hensEliminatedRef = useRef();
  let mortRef = useRef();
  let qteDeclasseRef = useRef();
  let alimntDistRef = useRef();
  let eauDistRef = useRef();
  let poidVifRef = useRef();
  let homogenRef = useRef();
  let poidsOeufRef = useRef();
  let lightOnRef = useRef();
  let lightOffRef = useRef();
  let flashOnRef = useRef();
  let flashOffRef = useRef();
  let intensiteRef = useRef();
  let temperatureMinRef = useRef();
  let temperatureMaxRef = useRef();
  let formPlcRef = useRef();
  let colorRef = useRef();
  let qltCoqlRef = useRef();
  let fienteRef = useRef();
  let aspcPltRef = useRef();

  const CreateReports = (e) => {
    // console.log("test");
    e.preventDefault();
    let data = {
      production: parseInt(productionRef.current.value),
      mort: parseInt(mortRef.current.value),
      //  if(reform) {

      //    hensEliminated: parseInt(hensEliminatedRef.current.value),
      //  },
      declassed: parseInt(qteDeclasseRef.current.value),
      alimentDist: parseInt(alimntDistRef.current.value),
      eauDist: parseInt(eauDistRef.current.value),
      pmo: poidsOeufRef.current.value,
      poidVif: parseInt(poidVifRef.current.value),
      homog: parseInt(homogenRef.current.value),
      lightOn: lightOnRef.current.value,
      lightOff: lightOffRef.current.value,
      flashOn: flashOnRef.current.value,
      flashOff: flashOffRef.current.value,
      formule: formPlcRef.current.value,
      intensite: parseInt(intensiteRef.current.value),
      temperatureMin: parseInt(temperatureMinRef.current.value),
      temperatureMax: parseInt(temperatureMaxRef.current.value),
      aspectPoulette: aspcPltRef.current.value,
      coloration: colorRef.current.value,
      fientes: fienteRef.current.value,
      qty_shell: value.toString(),
      batiment: parseInt(batimentIdRef.current.value),
      observ: inputVal.toString().replaceAll(",", " |@|"),
    };

    console.log(data);

    console.log(props.nextDate);
    // console.log(nextDate);

    props.CreateReports(data);
    // e.target.reset();
  };

  const GetNextDate = () => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    fetch(`${base_url}get-next-send/`, {
      method: "POST",
      body: JSON.stringify({
        "batiment": parseInt(batimentIdRef.current.value),
      }),
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setNextDate(JSON.parse(data));
      })
      .catch((error) => {
        setLoading(false);
        setNextDate([]);
      });
  };

  return (
    <>
      <form onSubmit={CreateReports} className="form">
        {nextDate !== undefined ? (
          nextDate?.type === "day" ? (
            <div className="next-send">
              Prochain Rapport :
              <span className="date-title">{nextDate.nextDate}</span>
              {loading && (
                <div className="dot-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
            </div>
          ) : (
            <div className="next-send">
              Prochain Rapport:
              <span className="date-title">{nextDate.nextDate}</span>
              {loading && (
                <div className="dot-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
            </div>
          )
        ) : (
          <div className="next-send">
            <span> null</span>
          </div>
        )}

        <div className="next-send">
          Code Lot :<span className="date-title">{nextDate?.lot_code}</span>
          {loading && (
            <div className="dot-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>

        <input
          className="input"
          hidden
          // ref={batimentIdRef}
          // defaultValue={batimentId}
        />
        <div className="input-container ic2">
          <select
            name=""
            className="input"
            id="batimentName"
            ref={batimentIdRef}
            onChange={(e) => {
              // setNextDate(null);
              e.preventDefault();
              if (!Number.isNaN(parseInt(e.target.value))) {
                setOldBatimentValue(e.target.value);
                GetNextDate();
                dispatch(inputStatus(true));
              } else {
                let text = "Press a button!\nEither OK or Cancel.";
                if (confirm(text) == true) {
                  text = "You pressed OK!";
                  clearAllInputs();
                  setNextDate([]);
                } else {
                  e.target.value = oldBatimentValue;
                  text = "You canceled!";
                }
                dispatch(inputStatus(false));
              }
            }}
            required
          >
            <option value={null}>--</option>
            {props.data?.map((batimentData) => {
              // setSelectedId(batimentData.id);
              return (
                <option key={batimentData.id} value={batimentData.id}>
                  {batimentData.name}
                </option>
              );
            })}
          </select>
          <label htmlFor="coloration" className="placeholder">
            Bâtiment
          </label>
        </div>
        <div
          className={
            nextDate?.lot_code
              ? "input-container ic2"
              : "input-container ic2 input-disabled "
          }
        >
          <input
            ref={productionRef}
            id="production"
            className="input"
            // className="input input-disabled"
            type="number"
            placeholder=" "
            disabled={!inputV}
            value={productionInput}
            onChange={(e) => setProductionInput(e.target.value)}
          />
          <div className="cut"></div>
          <label htmlFor="production" className="placeholder">
            Production
          </label>
        </div>
        {/* {reform && (
          <div className="input-container ic2">
            <input
              ref={hensEliminatedRef}
              id="produchensEliminatedrion"
              className="input"
              type="number"
              placeholder=" "
            />
            <div className="cut"></div>
            <label htmlFor="hensEliminated" className="placeholder">
              hens Eliminated
            </label>
          </div>
        )} */}
        <div
          className={
            nextDate?.lot_code
              ? "input-container ic2"
              : "input-container ic2 input-disabled "
          }
        >
          <input
            ref={mortRef}
            name="mortalite"
            id="mortalite"
            className="input"
            type="number"
            placeholder=" "
            disabled={!inputV}
            value={mortInput}
            onChange={(e) => setMortInput(e.target.value)}
          />

          <label htmlFor="mortalite" className="placeholder">
            Mortalite
          </label>
        </div>
        <div
          className={
            nextDate?.lot_code
              ? "input-container ic2"
              : "input-container ic2 input-disabled "
          }
        >
          <input
            ref={qteDeclasseRef}
            id="qteDeclasse"
            className="input"
            type="number"
            placeholder=" "
            disabled={!inputV}
            value={declassInput}
            onChange={(e) => setDeclassInput(e.target.value)}
          />
          <div className="cut"></div>
          <label htmlFor="qteDeclasse" className="placeholder">
            Qte Declasse
          </label>
        </div>
        <div
          className={
            nextDate?.lot_code
              ? "input-container ic2"
              : "input-container ic2 input-disabled "
          }
        >
          <input
            ref={alimntDistRef}
            id="almntDist"
            className="input"
            type="number"
            placeholder=" "
            disabled={!inputV}
            value={alimentInput}
            onChange={(e) => setAlimentInput(e.target.value)}
          />
          <div className="cut"></div>
          <label htmlFor="almntDist" className="placeholder">
            Aliment
          </label>
        </div>
        <div
          className={
            nextDate?.lot_code
              ? "input-container ic2"
              : "input-container ic2 input-disabled "
          }
        >
          <input
            ref={eauDistRef}
            id="eauDist"
            className="input"
            type="number"
            placeholder=" "
            disabled={!inputV}
            value={eauInput}
            onChange={(e) => setEauInput(e.target.value)}
          />
          <div className="cut"></div>
          <label htmlFor="eauDist" className="placeholder">
            Eau Distribue
          </label>
        </div>
        <div
          className={
            nextDate?.lot_code
              ? "input-container ic2"
              : "input-container ic2 input-disabled "
          }
        >
          <input
            ref={poidsOeufRef}
            id="poidsOeuf"
            className="input"
            type="number"
            placeholder=" "
            disabled={!inputV}
            value={pmoInput}
            onChange={(e) => setPmoInput(e.target.value)}
          />
          <label htmlFor="poidsOeuf" className="placeholder">
            Poids Moyen d'Œuf (g)
          </label>
        </div>
        <div
          className={
            nextDate?.lot_code
              ? "input-container ic2"
              : "input-container ic2 input-disabled "
          }
        >
          <input
            ref={poidVifRef}
            id="poidVif"
            className="input"
            type="number"
            placeholder=" "
            disabled={!inputV}
            value={pvInput}
            onChange={(e) => setPvInput(e.target.value)}
          />
          <label htmlFor="poidVif" className="placeholder">
            Poids Vif (g)
          </label>
        </div>

        <div
          className={
            nextDate?.lot_code
              ? "input-container ic2"
              : "input-container ic2 input-disabled "
          }
        >
          <input
            ref={homogenRef}
            id="homogeneite"
            className="input"
            type="number"
            placeholder=" "
            disabled={!inputV}
            value={homogInput}
            onChange={(e) => setHomogInput(e.target.value)}
          />
          <label htmlFor="homogeneite" className="placeholder">
            Homogénéité (g)
          </label>
        </div>
        <div
          className={
            nextDate?.lot_code
              ? "input-container ic2"
              : "input-container ic2 input-disabled "
          }
        >
          <input
            ref={formPlcRef}
            id="formPlc"
            className="input"
            type="text"
            placeholder=" "
            required
            disabled={!inputV}
            value={formuleInput}
            onChange={(e) => setFormuleInput(e.target.value)}
          />
          <label htmlFor="formPlc" className="placeholder">
            Formule en Place
          </label>
        </div>
        {/* Temperateur */}
        <div className="input__container-box">
          <div
            className={
              nextDate?.lot_code
                ? "input-container ic2"
                : "input-container ic2 input-disabled "
            }
          >
            <input
              ref={temperatureMinRef}
              id="minTemp"
              className="input"
              type="number"
              placeholder=" "
              min="0"
              max="35"
              disabled={!inputV}
              value={temMinInput}
              onChange={(e) => setTemMinInput(e.target.value)}
            />
            <label htmlFor="minTemp" className="placeholder">
              Temperateur (Min)
            </label>
          </div>
          <div
            className={
              nextDate?.lot_code
                ? "input-container ic2"
                : "input-container ic2 input-disabled "
            }
          >
            <input
              ref={temperatureMaxRef}
              id="maxTemp"
              className="input"
              type="number"
              placeholder=" "
              min="0"
              max="35"
              disabled={!inputV}
              value={temMaxInput}
              onChange={(e) => setTemMaxInput(e.target.value)}
            />
            <label htmlFor="maxTemp" className="placeholder">
              Temperateur (Max)
            </label>
          </div>
        </div>

        {/* Lumiere */}
        <div className="input__container-box">
          <div
            className={
              nextDate?.lot_code
                ? "input-container ic2"
                : "input-container ic2 input-disabled "
            }
          >
            <input
              ref={lightOnRef}
              id="allumage"
              className="input"
              type="time"
              placeholder=" "
              required
              disabled={!inputV}
              value={lightOnInput}
              onChange={(e) => setLightOnInput(e.target.value)}
            />
            <label htmlFor="allumage" className="placeholder">
              Lumiere Allumage
            </label>
          </div>
          <div
            className={
              nextDate?.lot_code
                ? "input-container ic2"
                : "input-container ic2 input-disabled "
            }
          >
            <input
              ref={lightOffRef}
              id="eteinder"
              className="input"
              type="time"
              placeholder=" "
              required
              disabled={!inputV}
              value={lightOffInput}
              onChange={(e) => setLightOffInput(e.target.value)}
            />
            <label htmlFor="eteinder" className="placeholder">
              Lumiere Eteinder
            </label>
          </div>
        </div>
        {/* flash */}
        <div className="input__container-box">
          <div
            className={
              nextDate?.lot_code
                ? "input-container ic2"
                : "input-container ic2 input-disabled "
            }
          >
            <input
              ref={flashOnRef}
              id="allumage"
              disabled={!inputV}
              className="input"
              type="time"
              placeholder=" "
              required
              value={flashOnInput}
              onChange={(e) => setFlashOnInput(e.target.value)}
            />
            <label htmlFor="allumage" className="placeholder">
              Flash Allumage
            </label>
          </div>
          <div
            className={
              nextDate?.lot_code
                ? "input-container ic2"
                : "input-container ic2 input-disabled "
            }
          >
            <input
              ref={flashOffRef}
              id="eteinder"
              className="input"
              type="time"
              placeholder=" "
              required
              disabled={!inputV}
              value={flashOffInput}
              onChange={(e) => setFlashOffInput(e.target.value)}
            />
            <label htmlFor="eteinder" className="placeholder">
              Flash Eteinder
            </label>
          </div>
        </div>

        {/* itensite */}
        <div
          className={
            nextDate?.lot_code
              ? "input-container ic2"
              : "input-container ic2 input-disabled "
          }
        >
          <input
            ref={intensiteRef}
            id="intensite"
            className="input"
            type="number"
            placeholder=" "
            disabled={!inputV}
            value={itensiteInput}
            onChange={(e) => setItensiteInput(e.target.value)}
          />
          <label htmlFor="intensite" className="placeholder">
            Intensite
          </label>
        </div>

        {/* coloration */}
        <div
          className={
            nextDate?.lot_code
              ? "input-container ic2"
              : "input-container ic2 input-disabled "
          }
        >
          <select
            ref={colorRef}
            id="coloration"
            className="input"
            required
            disabled={!inputV}
            value={colorationInput}
            onChange={(e) => setColorationInput(e.target.value)}
          >
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

        {/*  Fientes */}

        <div
          className={
            nextDate?.lot_code
              ? "input-container ic2"
              : "input-container ic2 input-disabled "
          }
        >
          <select
            ref={fienteRef}
            id="coloration"
            className="input"
            required
            disabled={!inputV}
            value={fienteInput}
            onChange={(e) => setFienteInput(e.target.value)}
          >
            <option value="">--</option>
            <option value="normal">Normal</option>
            <option value="diarrhee">Diarrhée</option>
            <option value="sanglant">Sanglant</option>
            <option value="couleur anormale">Couleur anormale</option>
            <option value="nourriture non digeree">
              nourriture non digérée
            </option>
          </select>
          <label htmlFor="coloration" className="placeholder">
            Fientes
          </label>
        </div>

        {/*  ASPECT POULETTES */}
        <div
          className={
            nextDate?.lot_code
              ? "input-container ic2"
              : "input-container ic2 input-disabled "
          }
        >
          <select
            ref={aspcPltRef}
            id="coloration"
            // className={nextDate?.lot_code ? "input" : "input input-disabled "}
            className="input"
            required
            disabled={!inputV}
            value={aspPoulInput}
            onChange={(e) => setAspPoulInput(e.target.value)}
          >
            <option value="">--</option>
            <option value="active">Active</option>
            <option value="calme">Calme</option>
            <option value="nerveuse">Nerveuse</option>
            <option value="halète">Halète</option>
          </select>
          <label htmlFor="coloration" className="placeholder">
            Aspect poulettes
          </label>
        </div>

        {/* Qlt coquille */}
        <div
          className={
            nextDate?.lot_code
              ? "input-container ic2"
              : "input-container ic2 input-disabled "
          }
        >
          <div
            className={nextDate?.lot_code ? "input" : "input disabled-input "}
          >
            <Rating
              style={{ position: "absolute", left: 6 }}
              ref={qltCoqlRef}
              name="simple-controlled"
              value={value}
              disabled={!inputV}
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
                <div
                  className={
                    nextDate?.lot_code
                      ? "input-container ic2"
                      : "input-container ic2 input-disabled "
                  }
                >
                  <input
                    value={data}
                    onChange={(e) => handleChangeInput(e, i)}
                    // ref={obsrvRef}
                    id="observation"
                    type="text"
                    className="input"
                    placeholder=" "
                    disabled={!inputV}
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
          <div
            onClick={handleAdd}
            className={
              nextDate?.lot_code
                ? "input-container ic2 observ"
                : "disabled-observs"
            }
          >
            <label className="observation-placeholder">
              Ajouter une Observation
            </label>
            <BiCommentAdd className="ajouter" />
          </div>
        </div>
        {/* <SendBtn onClick={() => deletInputs()} /> */}
        {/* <SendBtn /> */}
        <button
          type="submit"
          className="send-btn"
          onClick={() => {
            deletInputs();
            setNextDate(props.nextDate);
            console.log(setNextDate(props.nextDate));
          }}
        >
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <AiOutlineSend />
            </div>
          </div>
          <span>Send</span>
        </button>
      </form>
    </>
  );
};
export default Form;

// [14:08, 13/04/2023] Ahmed: ('Normal', 'Normal'),
//     #     ('Diarrhée', 'Diarrhée'),
//     #     ('Sanglant', 'Sanglant'),
//     #     ('Couleur anormale', 'Couleur anormale'),
//     #     ('nourriture non digérée', 'nourriture non digérée'),
// [14:08, 13/04/2023] Ahmed: #     ('active', 'active'),
//     #     ('calme', 'calme'),
//     #     ('nerveuse', 'nerveuse'),
//     #     ('halète', 'halète'),
//     # )
