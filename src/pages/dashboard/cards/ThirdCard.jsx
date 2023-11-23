import PlaceIcon from "@mui/icons-material/Place";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import { MdErrorOutline } from "react-icons/md";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { WiHumidity } from "react-icons/wi";
import { TbTemperatureCelsius } from "react-icons/tb";
const ThirdCard = ({ data }) => {
  return (
    <div className="card-1 card-item">
      <div className="card-1__header">
        <div className="site-last-update">
          <p className="site-local">
            <PlaceIcon fontSize="10px"></PlaceIcon>{" "}
            <span>{data.placeName}</span>
          </p>
          <span>MAJ: {data?.lastUpdate}</span>
        </div>{" "}
        <div className="site-atmos">
          <p>
            <ThermostatIcon fontSize="10px" />
            <span>{data?.currentTemp ? data?.currentTemp : "--"}</span>
            <TbTemperatureCelsius />
          </p>
          <p>
            <WiHumidity />
            <span>{data?.humidity ? data?.humidity : "--"}</span>
          </p>
        </div>
      </div>
      <div className="card-item-footer">
        <div className="card-item-footer-details">
          Effictif present:
          <span> {data?.effectifPresent ? data?.effectifPresent : "--"}</span>
        </div>

        <div className="card-item-footer-details">
          Age moyen: <span>{data?.ageMoy ? data?.ageMoy : "--"}</span>
        </div>
        <div className="card-item-footer-details">
          Production: <span>{data?.prodJour ? data?.prodJour : "--"}</span>
        </div>
      </div>
      <div className="card-item-msg">
        {data?.siteIsGood ? (
          <CheckCircleIcon style={{ fontSize: "10px !important" }} />
        ) : (
          <MdErrorOutline style={{ color: "red" }} />
        )}
        <span style={{ color: data?.siteIsGood ? "green" : "red" }}>
          {data?.statusMsg ? data?.statusMsg : "--"}
        </span>
      </div>
    </div>
  );
};

export default ThirdCard;
