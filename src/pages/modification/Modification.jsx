import "./modification.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { closeDrop } from "../../slices/UserDrop";
import { MdArrowDropDownCircle } from "react-icons/md";

import { BiEdit } from "react-icons/bi";
import toggleFieldStatus from "../../slices/Showfields";

import * as React from "react";
import DataTable from "./DataTable";
import ModifHeader from "./ModifHeader";
import ModificationFooter from "./ModificationFooter";
import HeaderMenu from "./HeaderMenu";
import HeaderTable from "./HeaderTable";
import CheckBoxContainer from "./CheckBoxContainer";
import HeaderDayTable from "./dayTable/HeaderDayTable";
import DayDataTable from "./dayTable/DayDataTable";

const Modification = ({ base_url }) => {
  const tableRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [clicked, setClicked] = useState(false);

  const dropState = useSelector((state) => state.userDrop.dropState);
  const statusbar = useSelector((state) => state.toggleLeftBar.statusbar);
  const isVisualize = useSelector((state) => state.openSearchBar.isVisualize);

  let lotIdRef = useRef();

  const dispatch = useDispatch();

  // Dynamic Headers Table

  // Agenda
  const [agendaHeader, setAgendaHeader] = useState([
    {
      id: 1,
      name: "Date",
      isActive: true,
    },
    {
      id: 2,
      name: "Sem Civil",
      isActive: true,
    },
    {
      id: 3,
      name: "Age",
      isActive: true,
    },
  ]);
  const enabledItems = agendaHeader.filter((agenda) => agenda.isActive);

  const updateAgendaState = () => {
    setAgendaHeader((prevState) => ({ ...prevState, isActive: false }));
  };
  // console.log(agendaHeader);

  // Viability
  const [viabiliteHeader, setViabiliteHeader] = useState([
    {
      id: 1,
      name: "reform",
      isActive: false,
    },
    {
      id: 2,
      name: "Effectif Present",
      isActive: true,
    },
    {
      id: 3,
      name: "Mortailité / Sem",
      isActive: true,
    },
    {
      id: 4,
      name: "∑ mortalité  /PD(%)",
      isActive: true,
    },
    {
      id: 5,
      name: "P.V (g)",
      isActive: true,
    },
    {
      id: 6,
      name: "Homog (%)",
      isActive: true,
    },
    {
      id: 7,
      name: "Lumiére",
      isActive: true,
    },
    {
      id: 8,
      name: "Flash",
      isActive: true,
    },
  ]);

  const enabledViabilite = viabiliteHeader.filter(
    (viabilite) => viabilite.isActive
  );

  const updateViabiliteState = () => {
    setViabiliteHeader((prevState) => ({ ...prevState, isActive: false }));
  };
  // Productions
  const [productionseHeader, setProductionsHeader] = useState([
    {
      id: 1,
      name: "ponte(%)",
      isActive: true,
    },
    {
      id: 2,
      name: " ∑ d'oeufs /PD",
      isActive: true,
    },
    {
      id: 3,
      name: "PMO (g)",
      isActive: true,
    },
    {
      id: 4,
      name: "MOPPC (g)",
      isActive: true,
    },
    {
      id: 5,
      name: "MOPDC (Kg)",
      isActive: true,
    },
    {
      id: 6,
      name: "IC (g)",
      isActive: true,
    },
    {
      id: 7,
      name: "APOPD (g)",
      isActive: true,
    },
  ]);

  const enabledProductions = productionseHeader.filter(
    (production) => production.isActive
  );
  // Consommation
  const [consommationeHeader, setconsommationHeader] = useState([
    {
      id: 1,
      name: " Aliment cummulé PD (Kg)",
      isActive: true,
    },
    {
      id: 2,
      name: "APS (g)",
      isActive: true,
    },
    {
      id: 3,
      name: "Eau (ml)",
      isActive: true,
    },
    {
      id: 4,
      name: "Ratio (Eau/Alt)",
      isActive: true,
    },
    {
      id: 5,
      name: "Formule En place",
      isActive: true,
    },
  ]);

  const enabledConsommation = consommationeHeader.filter(
    (consommation) => consommation.isActive
  );
  // Observations
  const [observationHeader, setObservationHeader] = useState([
    {
      id: 1,
      name: "Qualité de coquille",
      isActive: true,
    },
    {
      id: 2,
      name: "État de Fientes",
      isActive: true,
    },
    {
      id: 3,
      name: "Coloration d'oeufs",
      isActive: true,
    },
    {
      id: 4,
      name: "Observations",
      isActive: true,
    },
  ]);

  const enabledObservation = observationHeader.filter(
    (observation) => observation.isActive
  );
  useEffect(() => {
    const table = tableRef.current;
    const header = table?.querySelector(".fixed-header");

    const onScroll = () => {
      const { top } = table.getBoundingClientRect();
      const { height } = header.getBoundingClientRect();

      if (top < 0 && Math.abs(top) < height) {
        header.style.transform = `translateY(${Math.abs(top)}px)`;
      } else {
        header.style.transform = "none";
      }
    };

    table?.addEventListener("scroll", onScroll);

    return () => {
      table?.removeEventListener("scroll", onScroll);
    };
  }, []);

  const FetchData = async (lotId) => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}get-table-data/`, {
        method: "POST",
        body: JSON.stringify({
          "lotId": lotId,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setLoading(false);
        setData(JSON.parse(data));
        console.log(JSON.parse(data));
      } else {
        setLoading(false);
        setData([]);
      }
    } catch (error) {
      setLoading(false);
      setData([]);
    }
  };

  // useEffect(() => {
  //   FetchData();
  // }, []);
  // console.log(data);
  // console.log(data?.performance);
  // console.log(data?.identifcation);

  return (
    <main className={statusbar === true ? "page page-with-sidebar " : "page"}>
      <Topbar
        isVisualize={!isVisualize}
        onClick={() => dropState && dispatch(closeDrop())}
      />
      <Sidebar />
      <div className="modification--globale-container">
        <div className="modification--container">
          <div className="modification-header">
            <div className="content-container">
              <div className="input-container ic2">
                <select
                  name=""
                  className="input"
                  // id="coloration"
                  ref={lotIdRef}
                  onChange={() => FetchData(parseInt(lotIdRef.current.value))}
                  required
                >
                  <option value="">--</option>
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
                <label htmlFor="coloration" className="placeholder">
                  Lot (bâtiment)
                </label>
              </div>

              <>
                <div className="content-box slide-in-blurred-right">
                  <div className="header-content">
                    <p>Site :</p> <span>{data?.identification?.site_name}</span>
                  </div>
                  <div className="header-content">
                    <p>Bâtiment :</p>
                    <span>{data?.identification?.batiment}</span>
                  </div>
                </div>
                <div className="content-box slide-in-blurred-right ">
                  <div className="header-content">
                    <p>Souche :</p> <span>{data?.identification?.souche}</span>
                  </div>
                  <div className="header-content">
                    <p>Date naissance :</p>
                    <span>{data?.identification?.birth_date}</span>
                  </div>
                </div>
                <div className="content-box slide-in-blurred-right">
                  <div className="header-content">
                    <p>Age Actuel :</p>
                    <span>{data?.identification?.curr_age}</span>
                  </div>
                  <div className="header-content">
                    <p>Effectif Départ :</p>
                    <span>{data?.identification?.effectifD}</span>
                  </div>
                </div>
                <div className="content-box slide-in-blurred-right">
                  <div className="header-content">
                    <p>Date mise en place :</p>
                    <span>{data?.identification?.birth_mep}</span>
                  </div>
                  <div className="header-content">
                    <p>Code lot :</p>
                    <span>{data?.identification?.lot}</span>
                  </div>
                </div>
              </>

              {loading && (
                <div className="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
            </div>
          </div>

          {/* <ModifHeader data={data} FetchData={FetchData} /> */}
          <div className="modification-table">
            <div className="modification-body">
              {/* <table ref={tableRef} className="slide-in-blurred-right"> */}

              {data !== null && (
                <DataTable
                  data={data.performance}
                  enabledItems={enabledItems}
                  enabledConsommation={enabledConsommation}
                  enabledObservation={enabledObservation}
                  enabledViabilite={enabledViabilite}
                  enabledProductions={enabledProductions}
                  agendaHeader={agendaHeader}
                  viabiliteHeader={viabiliteHeader}
                  setAgendaHeader={setAgendaHeader}
                  setViabiliteHeader={setViabiliteHeader}
                />
              )}
              {/* </table> */}
            </div>
            <ModificationFooter msg={data?.identifaction?.msg} />
          </div>
        </div>
        {loading && (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Modification;
