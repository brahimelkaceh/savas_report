import { useDispatch, useSelector } from "react-redux";
import "./sitesbar.css";
import {
  ShowBatimentCat,
  ProductionData,
  SitesDate,
} from "../../slices/ShowBatimentCat";
import { useEffect, useState } from "react";
let base_url = "https://pouliprod.savas.ma/api/";

const SitesBar = ({ siteData }) => {
  const [clicked, setClicked] = useState(null);
  // const disabled = useSelector((state) => state.setDisabled.disabled);
  const inputV = useSelector((state) => state.toggleFieldStatus.inputV);
  const [className, setClassName] = useState("site-button");
  const dispatch = useDispatch();

  const handleClick = (id) => {
    if (clicked === id) {
      setClicked(clicked);
    } else {
      if (inputV === false) {
        console.log("change disabled");
      }
      setClicked(id);
    }
  };
  const GetBatimentData = (id) => {
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    fetch(`${base_url}get-site-bats/`, {
      method: "POST",
      body: JSON.stringify({
        "site": id,
      }),
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(JSON.parse(data));
        dispatch(SitesDate(JSON.parse(data)));
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    let sName = siteData[0];
    GetBatimentData(sName.site_id);
    dispatch(ShowBatimentCat());
    dispatch(ProductionData(sName));
    setClicked(sName.site_id);
    // handleClick(sName.site_id);
    // console.log(sName.site_id, clicked);
  }, []);
  return (
    <div className="sites-bar">
      {siteData.map((sName) => (
        <button
          disabled={inputV}
          className={clicked === sName.site_id ? `btn-clicked` : "site-button "}
          key={sName.site_id}
          onClick={() => {
            // console.log(clicked);
            GetBatimentData(sName.site_id);
            dispatch(ShowBatimentCat());

            dispatch(ProductionData(sName));
            handleClick(sName.site_id);
            // if (clicked === Number) handleClick(sName.site_id);
          }}
        >
          {sName.name}
        </button>
      ))}
    </div>
  );
};

export default SitesBar;
