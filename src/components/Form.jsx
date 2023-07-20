import "../styles/form.css";
import { AiOutlineSend } from "react-icons/ai";
import { AiFillEye, AiFillEdit } from "react-icons/ai";

import { useState, useRef, useEffect } from "react";
import { BiBorderRadius, BiCommentAdd } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import Rating from "@mui/material/Rating";
import Modal from "./modals/Modal";
import { useDispatch, useSelector } from "react-redux";
// import { ProductionData } from "../slices/ShowBatimentCat";
import { inputStatus } from "../slices/Showfields";
import SelectInput from "@mui/material/Select/SelectInput";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ErrorIcon from "@mui/icons-material/Error";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
let base_url = "https://pouliprod.savas.ma/api/";

const Form = (props) => {
  const [full, setFull] = useState(false);
  const [showProduction, setShowProduction] = useState(false);
  const [showTemp, setShowTemp] = useState(false);
  const [showLum, setShowLum] = useState(false);
  const [showAspect, setShowAspect] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputV = useSelector((state) => state.toggleFieldStatus.inputV);
  const sites = useSelector((state) => state.ShowBatimentCat.sites);
  const data = useSelector((state) => state.ShowBatimentCat.data);
  const dispatch = useDispatch();

  // const [reform, setReform] = useState(
  //   props?.prodcutionData?.lot[0]?.reformStarted
  // );
  const [nextDate, setNextDate] = useState("");

  const [inputVal, setInputVal] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState(0);
  const [oldBatimentValue, setOldBatimentValue] = useState("");

  const [productionInput, setProductionInput] = useState("");
  const [doubleJauneInput, setDoubleJauneInput] = useState("");
  const [blancInput, setBlancInput] = useState("");
  const [casseInput, setCasseInput] = useState("");
  const [felesInput, setFelesInput] = useState("");
  const [elimineInput, setElimineInput] = useState("");
  const [mortInput, setMortInput] = useState("");
  const [alimentInput, setAlimentInput] = useState("");
  const [eauInput, setEauInput] = useState("");
  const [pmoInput, setPmoInput] = useState("");
  const [pvInput, setPvInput] = useState("");
  const [homogInput, setHomogInput] = useState("");
  const [formuleInput, setFormuleInput] = useState("");
  const [temMinInput, setTemMinInput] = useState("");
  const [temMaxInput, setTemMaxInput] = useState("");
  const [temMinExtInput, setTemMinExtInput] = useState("");
  const [temMaxExtInput, setTemMaxExtInput] = useState("");
  const [lightOnInput, setLightOnInput] = useState("");
  const [lightOffInput, setLightOffInput] = useState("");
  const [flashOnInput, setFlashOnInput] = useState("");
  const [flashOffInput, setFlashOffInput] = useState("");
  const [itensiteInput, setItensiteInput] = useState("");
  const [colorationInput, setColorationInput] = useState("");
  const [fienteInput, setFienteInput] = useState("");
  const [aspPoulInput, setAspPoulInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  // Clear All Inputs functionality
  const clearAllInputs = () => {
    setProductionInput("");
    setDoubleJauneInput("");
    setBlancInput("");
    setCasseInput("");
    setFelesInput("");
    setElimineInput("");
    setMortInput("");
    setAlimentInput("");
    setEauInput("");
    setPmoInput("");
    setPvInput("");
    setHomogInput("");
    setFormuleInput("");
    setTemMinInput("");
    setTemMaxInput("");
    setTemMinExtInput("");
    setTemMaxExtInput("");
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
    setNextDate("");
  };

  // ? Observation Input
  //   ! Changing Input Value
  const handleChangeInput = (onChangeVal, i) => {
    console.log(onChangeVal.target.value);
    const inputData = [...inputVal];
    inputData[i] = onChangeVal.target.value;
    setInputVal(inputData);
  };

  // ! handeling observation urgent
  const handleObservUrgent = (event, i) => {
    console.log(event.target.value);
    const urgentData = [...selectedOption];
    urgentData[i] = event.target.value;

    console.log(urgentData);
    setSelectedOption(event.target.value);
  };

  //   ! Add New Input
  const handleAdd = () => {
    const val = [...inputVal, []];
    setSelectedOption("");
    console.log(val);
    setInputVal(val);
  };

  //   ! Delet Input
  const handleDelete = (i) => {
    const delVal = [...inputVal];
    delVal.splice(i, 1);
    setInputVal(delVal);
  };
  const deletInputs = () => {
    // setIsActiv e((current) => !current);
  };
  // console.log(inputVal, "data-");
  const mergedArray = [];

  for (let i = 0; i < inputVal.length && i < selectedOption.length; i++) {
    mergedArray.push(`${inputVal[i]}-${selectedOption[i]}`);
  }
  console.log(mergedArray);
  // let batimentRef = useRef();

  let batimentIdRef = useRef();
  let productionRef = useRef();
  let qteElimineRef = useRef();
  let djRef = useRef();
  let blancRef = useRef();
  let casseRef = useRef();
  let felesRef = useRef();
  let hensEliminatedRef = useRef();
  let mortRef = useRef();
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
  let temperatureMinExtRef = useRef();
  let temperatureMaxExtRef = useRef();
  let formPlcRef = useRef();
  let colorRef = useRef();
  let qltCoqlRef = useRef();
  let fienteRef = useRef();
  let aspcPltRef = useRef();

  const CreateReports = (e) => {
    // console.log("test");
    e.preventDefault();
    let data = {
      // prod_normal: parseInt(productionRef.current.value),
      // prod_dj: parseInt(djRef.current.value),
      // prod_blanc: parseInt(blancRef.current.value),
      // prod_casse: parseInt(casseRef.current.value),
      // prod_feles: parseInt(felesRef.current.value),
      // prod_elimne: parseInt(qteElimineRef.current.value),
      // mort: parseInt(mortRef.current.value),
      // //  if(reform) {

      // //    hensEliminated: parseInt(hensEliminatedRef.current.value),
      // //  },
      // alimentDist: parseInt(alimntDistRef.current.value),
      // eauDist: parseInt(eauDistRef.current.value),
      // pmo: poidsOeufRef.current.value,
      // poidVif: parseInt(poidVifRef.current.value),
      // homog: parseInt(homogenRef.current.value),
      // lightOn: lightOnRef.current.value,
      // lightOff: lightOffRef.current.value,
      // flashOn: flashOnRef.current.value,
      // flashOff: flashOffRef.current.value,
      // formule: formPlcRef.current.value,
      // intensite: parseInt(intensiteRef.current.value),
      // temperatureMin: parseInt(temperatureMinRef.current.value),
      // temperatureMax: parseInt(temperatureMaxRef.current.value),
      // temperatureMinExt: parseInt(temperatureMinExtRef.current.value),
      // temperatureMaxExt: parseInt(temperatureMaxExtRef.current.value),
      // aspectPoulette: aspcPltRef.current.value,
      // coloration: colorRef.current.value,
      // fientes: fienteRef.current.value,
      // qty_shell: value.toString(),
      // batiment: parseInt(batimentIdRef.current.value),
      observ: mergedArray.toString().replaceAll(",", "|@|"),
    };

    console.log(data);

    // console.log(props.nextDate);
    // console.log(nextDate);

    // props.CreateReports(data);
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
  const FetchSitesBat = async () => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}get-site-bats/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setLoading(false);
        console.log(JSON.parse(data));
        // setSites(JSON.parse(data));
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchSitesBat();
    setNextDate([]);
    // clearAllInputs();
    // e.target.reset();
  }, []);

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
            {sites?.map((batName) => {
              // setSelectedId(batName.id);
              if (batName?.isEmpty === false) {
                return (
                  <option key={batName.id} value={batName.id}>
                    {batName.name}
                  </option>
                );
              }
            })}
          </select>
          <label htmlFor="coloration" className="placeholder">
            Bâtiment
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
        {/* ? Produciton */}
        <div
          className={
            nextDate?.lot_code
              ? "input-containe ic2 feilds-container"
              : "input-containe ic2 feilds-container input-disabled "
          }
        >
          <div className="toggle-switch">
            <label
              onClick={() => {
                setShowProduction(!showProduction);
              }}
              className="toggle-label"
              htmlFor="toggle"
            >
              {showProduction
                ? "masquer la production"
                : "afficher la production"}
            </label>
            <input
              className="toggle-input"
              id="toggle"
              type="checkbox"
              hidden
            />
            <label
              onClick={() => {
                setShowProduction(!showProduction);
              }}
              className="toggle-label"
              htmlFor="toggle"
            >
              {!showProduction ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </label>
          </div>

          {showProduction && (
            <div
              className={
                showProduction ? "scale-up-ver-top" : "scale-out-ver-top"
              }
            >
              <div className="input__container-box">
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
                    Normaux
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
                    ref={djRef}
                    id="qteDeclasse"
                    className="input"
                    type="number"
                    placeholder=" "
                    disabled={!inputV}
                    value={doubleJauneInput}
                    onChange={(e) => setDoubleJauneInput(e.target.value)}
                  />
                  <div className="cut"></div>
                  <label htmlFor="qteDeclasse" className="placeholder">
                    Double jaune
                  </label>
                </div>
              </div>
              <div className="input__container-box">
                <div
                  className={
                    nextDate?.lot_code
                      ? "input-container ic2"
                      : "input-container ic2 input-disabled "
                  }
                >
                  <input
                    ref={blancRef}
                    id="production"
                    className="input"
                    // className="input input-disabled"
                    type="number"
                    placeholder=" "
                    disabled={!inputV}
                    value={blancInput}
                    onChange={(e) => setBlancInput(e.target.value)}
                  />
                  <div className="cut"></div>
                  <label htmlFor="production" className="placeholder">
                    Blanc
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
                    ref={casseRef}
                    id="qteDeclasse"
                    className="input"
                    type="number"
                    placeholder=" "
                    disabled={!inputV}
                    value={casseInput}
                    onChange={(e) => setCasseInput(e.target.value)}
                  />
                  <div className="cut"></div>
                  <label htmlFor="qteDeclasse" className="placeholder">
                    Casse
                  </label>
                </div>
              </div>
              <div className="input__container-box">
                <div
                  className={
                    nextDate?.lot_code
                      ? "input-container ic2"
                      : "input-container ic2 input-disabled "
                  }
                >
                  <input
                    ref={felesRef}
                    id="production"
                    className="input"
                    // className="input input-disabled"
                    type="number"
                    placeholder=" "
                    disabled={!inputV}
                    value={felesInput}
                    onChange={(e) => setFelesInput(e.target.value)}
                  />
                  <div className="cut"></div>
                  <label htmlFor="production" className="placeholder">
                    Feles
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
                    ref={qteElimineRef}
                    id="qteDeclasse"
                    className="input"
                    type="number"
                    placeholder=" "
                    disabled={!inputV}
                    value={elimineInput}
                    onChange={(e) => setElimineInput(e.target.value)}
                  />
                  <div className="cut"></div>
                  <label htmlFor="qteDeclasse" className="placeholder">
                    élimineé
                  </label>
                </div>
              </div>

              <div className="input__container-box">
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
              </div>
            </div>
          )}
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
        <div className="input__container-box">
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
            // required
            disabled={!inputV}
            value={formuleInput}
            onChange={(e) => setFormuleInput(e.target.value)}
          />
          <label htmlFor="formPlc" className="placeholder">
            Formule en Place
          </label>
        </div>
        {/* ? Temperature  */}
        <div
          className={
            nextDate?.lot_code
              ? "input-containe feilds-container ic2"
              : "input-containe feilds-container ic2 input-disabled "
          }
        >
          <div className="toggle-switch">
            <label
              onClick={() => {
                setShowTemp(!showTemp);
              }}
              className="toggle-label"
              htmlFor="toggle"
            >
              {showTemp ? "Masquer Temperature" : "Afficher Temperature"}
            </label>
            <input
              className="toggle-input"
              id="toggle"
              type="checkbox"
              hidden
            />
            <label
              onClick={() => {
                setShowTemp(!showTemp);
              }}
              className="toggle-label"
              htmlFor="toggle"
            >
              {!showTemp ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </label>
          </div>
          {showTemp && (
            <div
              className={showTemp ? "scale-up-ver-top" : "scale-out-ver-top"}
            >
              {/* Temperateur interne*/}
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
                    Temperateur (Int-Min)
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
                    Temperateur (Int-Max)
                  </label>
                </div>
              </div>

              {/* Temperateur externe*/}
              <div className="input__container-box">
                <div
                  className={
                    nextDate?.lot_code
                      ? "input-container ic2"
                      : "input-container ic2 input-disabled "
                  }
                >
                  <input
                    ref={temperatureMinExtRef}
                    id="minTemp"
                    className="input"
                    type="number"
                    placeholder=" "
                    min="0"
                    max="35"
                    disabled={!inputV}
                    value={temMinExtInput}
                    onChange={(e) => setTemMinExtInput(e.target.value)}
                  />
                  <label htmlFor="minTemp" className="placeholder">
                    Temperateur (Ext-Min)
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
                    ref={temperatureMaxExtRef}
                    id="maxTemp"
                    className="input"
                    type="number"
                    placeholder=" "
                    min="0"
                    max="35"
                    disabled={!inputV}
                    value={temMaxExtInput}
                    onChange={(e) => setTemMaxExtInput(e.target.value)}
                  />
                  <label htmlFor="maxTemp" className="placeholder">
                    Temperateur (Ext-Max)
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* ********************************************** */}
        {/* ********************************************** */}
        <div
          className={
            nextDate?.lot_code
              ? "input-containe feilds-container ic2"
              : "input-containe feilds-container ic2 input-disabled "
          }
        >
          <div className="toggle-switch">
            <label
              onClick={() => {
                setShowLum(!showLum);
              }}
              className="toggle-label"
              htmlFor="toggle"
            >
              {showLum ? "masquer la lumière" : "Afficher la lumière"}
            </label>
            <input
              className="toggle-input"
              id="toggle"
              type="checkbox"
              hidden
            />
            <label
              onClick={() => {
                setShowLum(!showLum);
              }}
              className="toggle-label"
              htmlFor="toggle"
            >
              {!showLum ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </label>
          </div>
          {showLum && (
            <div className={showLum ? "scale-up-ver-top" : "scale-out-ver-top"}>
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
            </div>
          )}
        </div>

        {/* ********************************************** */}
        {/* ********************************************** */}
        <div
          className={
            nextDate?.lot_code
              ? "feilds-container ic2"
              : "feilds-container ic2 input-disabled "
          }
        >
          <div className="toggle-switch">
            <label
              onClick={() => {
                setShowAspect(!showAspect);
              }}
              className="toggle-label"
              htmlFor="toggle"
            >
              {showAspect ? "masquer l'observation" : "afficher l'observation"}
            </label>
            <input
              className="toggle-input"
              id="toggle"
              type="checkbox"
              hidden
            />
            <label
              onClick={() => {
                setShowAspect(!showAspect);
              }}
              className="toggle-label"
              htmlFor="toggle"
            >
              {!showAspect ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </label>
          </div>
          {showAspect && (
            <div
              className={showAspect ? "scale-up-ver-top" : "scale-out-ver-top"}
            >
              <div className="input__container-box">
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
                {/* Qlt coquille */}
                <div
                  className={
                    nextDate?.lot_code
                      ? "input-container ic2"
                      : "input-container ic2 input-disabled "
                  }
                >
                  <div
                    className={
                      nextDate?.lot_code ? "input" : "input disabled-input "
                    }
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
              </div>
              <div className="input__container-box">
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
              </div>
            </div>
          )}
        </div>

        {/* ********************************************** */}
        {/* ********************************************** */}
        {/* Observations */}
        <div>
          {inputVal.map((data, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "5px",
                }}
                className={isActive ? "remove" : ""}
              >
                <div className="radio-input ic2">
                  <input
                    // defaultChecked=""
                    value="1"
                    name="color"
                    id="color-1"
                    type="radio"
                    checked={selectedOption === "1"}
                    onChange={(e) => handleObservUrgent(e, i)}
                  />
                  <label htmlFor="color-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          id="SVGRepo_tracerCarrier"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g id="Interface / Check">
                            <path
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth="2"
                              stroke="#ffffff"
                              d="M6 12L10.2426 16.2426L18.727 7.75732"
                              id="Vector"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </label>

                  <input
                    value="2"
                    name="color"
                    id="color-2"
                    type="radio"
                    checked={selectedOption === "2"}
                    onChange={(e) => handleObservUrgent(e, i)}
                  />
                  <label htmlFor="color-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          id="SVGRepo_tracerCarrier"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g id="Interface / Check">
                            <path
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth="2"
                              stroke="#ffffff"
                              d="M6 12L10.2426 16.2426L18.727 7.75732"
                              id="Vector"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </label>

                  <input
                    value="3"
                    name="color"
                    id="color-3"
                    type="radio"
                    checked={selectedOption === "3"}
                    onChange={(e) => handleObservUrgent(e, i)}
                  />
                  <label htmlFor="color-3">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                        <g
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          id="SVGRepo_tracerCarrier"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g id="Interface / Check">
                            <path
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth="2"
                              stroke="#ffffff"
                              d="M6 12L10.2426 16.2426L18.727 7.75732"
                              id="Vector"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </span>
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
                  className="delete ic2"
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
            // console.log(setNextDate(props.nextDate));
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
