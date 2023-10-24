import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import SoucheTable from "./SoucheTable";
import GuideTable from "./GuideTable";
import { closeDrop } from "../../slices/UserDrop";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import "./souches.css";
let base_url = "https://farmdriver.savas.ma/api/";

const Souches = () => {
  const [guideData, setGuideData] = useState();
  const [loading, setLoading] = useState(false);

  const status = useSelector((state) => state.toggleLeftBar.status);
  const isVisualize = useSelector((state) => state.openSearchBar.isVisualize);
  const dropState = useSelector((state) => state.userDrop.dropState);

  const dispatch = useDispatch();

  const GetGuideData = async (id) => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}get-guide-data/`, {
        method: "POST",
        body: JSON.stringify({
          "guide_id": id ? id : 1,
        }),

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        // console.log(typeof JSON.parse(data));
        setGuideData(JSON.parse(data));
        // console.log(response.status);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <main className={status === true ? "page page-with-sidebar " : "page"}>
        <Topbar
          isVisualize={!isVisualize}
          onClick={() => dropState && dispatch(closeDrop())}
        />
        <Sidebar />
        <div className="souche-container">
          <div className="souche-header">
            <h3>Gestion des Souches</h3>
            <Link className="add-btn" to="/souches/ajouter-guide">
              <MdAdd className="bell" />
            </Link>
          </div>
          <GuideTable GetGuideData={GetGuideData} />
          <SoucheTable guideData={guideData} />
        </div>
      </main>
    </>
  );
};

export default Souches;
