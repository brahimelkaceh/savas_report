import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { showingColmun } from "../../slices/LeftBar";

import { MdArrowDropDownCircle } from "react-icons/md";
import ContentMenu from "./ContentMenu";
import { useDispatch } from "react-redux";

export default function HeaderMenu({
  title,
  agendaHeader,
  setAgendaHeader,
  updateAgendaState,

  productionseHeader,
  setProductionsHeader,

  viabiliteHeader,
  setViabiliteHeader,
  updateViabiliteState,

  consommationeHeader,
  setconsommationHeader,

  observationHeader,
  setObservationHeader,
}) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProductionsCheckbox = (event, id) => {
    const updateProduction = productionseHeader.map((production) => {
      if (production.id === id) {
        return { ...production, isActive: event.target.checked };
      } else {
        return production;
      }
    });
    setProductionsHeader(updateProduction);
  };
  const handleCheckboxChange = (event, id) => {
    // console.log(id, event.target.checked);
    const updatedAgenda = agendaHeader.map((agenda) => {
      if (agenda.id === id) {
        return { ...agenda, isActive: event.target.checked };
      } else {
        return agenda;
      }
    });
    updateAgendaState();
    setAgendaHeader(updatedAgenda);
  };
  const handleObservationCheckbox = (event, id) => {
    const updateObservation = observationHeader.map((observation) => {
      if (observation.id === id) {
        return { ...observation, isActive: event.target.checked };
      } else {
        return observation;
      }
    });
    setObservationHeader(updateObservation);
  };
  const handleConsommationCheckbox = (event, id) => {
    const updateConsommation = consommationeHeader.map((consommation) => {
      if (consommation.id === id) {
        return { ...consommation, isActive: event.target.checked };
      } else {
        return consommation;
      }
    });
    setconsommationHeader(updateConsommation);
  };

  const handleViabiliteCheckbox = (event, id) => {
    const updatedViabilite = viabiliteHeader.map((viabilite) => {
      if (viabilite.id === id) {
        return { ...viabilite, isActive: event.target.checked };
      } else {
        return viabilite;
      }
    });
    updateViabiliteState();
    setViabiliteHeader(updatedViabilite);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          minWidth: 0,
          padding: 0,
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "14px",
          width: "100%",
          textTransform: "capitalize",
          // fontFamily: ,
        }}
      >
        {title} <MdArrowDropDownCircle />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {productionseHeader?.map((production) => (
          <div className="checkbox-wrapper-4" key={production.id}>
            <input
              type="checkbox"
              id={production.name}
              className="inp-cbx"
              checked={production.isActive}
              onChange={(event) =>
                handleProductionsCheckbox(event, production.id)
              }
            />
            <label htmlFor={production.name} className="cbx">
              <span>
                <svg height="10px" width="12px"></svg>
              </span>
              <span>{production.name}</span>
            </label>
            <svg className="inline-svg">
              <symbol viewBox="0 0 12 10" id="check-4">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </symbol>
            </svg>
          </div>
        ))}
        {agendaHeader?.map((agenda) => (
          <div className="checkbox-wrapper-4" key={agenda.id}>
            <input
              type="checkbox"
              id={agenda.name}
              className="inp-cbx"
              checked={agenda.isActive}
              onChange={(event) => handleCheckboxChange(event, agenda.id)}
            />
            <label htmlFor={agenda.name} className="cbx">
              <span>
                <svg height="10px" width="12px"></svg>
              </span>
              <span>{agenda.name}</span>
            </label>
            <svg className="inline-svg">
              <symbol viewBox="0 0 12 10" id="check-4">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </symbol>
            </svg>
          </div>
        ))}
        {viabiliteHeader?.map((viabilite) => (
          <div className="checkbox-wrapper-4" key={viabilite.id}>
            <input
              type="checkbox"
              id={viabilite.name}
              className="inp-cbx"
              checked={viabilite.isActive}
              onChange={(event) => handleViabiliteCheckbox(event, viabilite.id)}
            />
            <label htmlFor={viabilite.name} className="cbx">
              <span>
                <svg height="10px" width="12px"></svg>
              </span>
              <span>{viabilite.name}</span>
            </label>
            <svg className="inline-svg">
              <symbol viewBox="0 0 12 10" id="check-4">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </symbol>
            </svg>
          </div>
        ))}

        {consommationeHeader?.map((consommation) => (
          <div className="checkbox-wrapper-4" key={consommation.id}>
            <input
              type="checkbox"
              id={consommation.name}
              className="inp-cbx"
              checked={consommation.isActive}
              onChange={(event) =>
                handleConsommationCheckbox(event, consommation.id)
              }
            />
            <label htmlFor={consommation.name} className="cbx">
              <span>
                <svg height="10px" width="12px"></svg>
              </span>
              <span>{consommation.name}</span>
            </label>
            <svg className="inline-svg">
              <symbol viewBox="0 0 12 10" id="check-4">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </symbol>
            </svg>
          </div>
        ))}
        {observationHeader?.map((observation) => (
          <div className="checkbox-wrapper-4" key={observation.id}>
            <input
              type="checkbox"
              id={observation.name}
              className="inp-cbx"
              checked={observation.isActive}
              onChange={(event) =>
                handleObservationCheckbox(event, observation.id)
              }
            />
            <label htmlFor={observation.name} className="cbx">
              <span>
                <svg height="10px" width="12px"></svg>
              </span>
              <span>{observation.name}</span>
            </label>
            <svg className="inline-svg">
              <symbol viewBox="0 0 12 10" id="check-4">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
              </symbol>
            </svg>
          </div>
        ))}
      </Menu>
    </div>
  );
}
