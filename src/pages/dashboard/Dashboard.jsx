import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { closeDrop } from "../../slices/UserDrop";
import "./dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
let base_url = "https://pouliprod.savas.ma/api/";
import Cards from "./Cards";
import SkeletonBlock from "./skeletons/SkeletonBlock";
import FirstChart from "./Charts/FirstChart";
import SecondChart from "./Charts/SecondChart";
import ThirdChart from "./Charts/ThirdChart";
import FourthChart from "./Charts/FourthChart";
import Observation from "./widgets/Observation";
import Profylax from "./widgets/Profylax";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [boxData, setBoxData] = useState("");
  const [upDownData, setUpDownData] = useState([]);
  const [upData, setUpData] = useState([]);
  const [downDownData, setDownDownData] = useState("");
  const [alignment, setAlignment] = useState("left");

  const status = useSelector((state) => state.toggleLeftBar.status);

  const isVisualize = useSelector((state) => state.openSearchBar.isVisualize);
  const dropState = useSelector((state) => state.userDrop.dropState);

  const dispatch = useDispatch();

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  const getFirstBox = async () => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}first-block/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setLoading(false);
        // console.log(JSON.parse(data));
        setBoxData(JSON.parse(data));
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const getUpsDowns = async () => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}ups-downs/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setLoading(false);
        setUpDownData(JSON.parse(data));
        // console.log(JSON.parse(data));
        // setUpData(upDownData.best);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUpsDowns();
    getFirstBox();
  }, []);

  return (
    <>
      <main className={status === true ? "page page-with-sidebar " : "page"}>
        <Topbar
          isVisualize={!isVisualize}
          onClick={() => dropState && dispatch(closeDrop())}
        />
        <Sidebar />
        <div className="container">
          <Cards className={"card-1"} data={boxData} loading={loading} />
          {/* <Cards className={"card-2"} data={upDownData} loading={loading} />
          <Cards className={"card-3"} /> */}
          <div className="card-2">
            {upDownData?.best && (
              <div className="card-item-content">
                <div className="card-item-footer">
                  {upDownData?.best?.map((data, i) => (
                    <div key={i}>
                      <p className="moy-age">
                        <span>{data.param}</span>
                        {data[data.param]?.toFixed(2)
                          ? data[data.param]?.toFixed(2)
                          : " --"}
                        <span className="lot">
                          {data.lot ? data.lot : "B1"}
                        </span>
                      </p>
                      {/* <span></span> */}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {loading && <SkeletonBlock />}
          </div>
          <div className="card-3">
            {upDownData?.worst && (
              <div className="card-item-content">
                <div className="card-item-footer">
                  {upDownData?.worst?.map((data, i) => (
                    <div key={i}>
                      <p className="moy-age">
                        <span>{data.param}</span>
                        {data[data.param]?.toFixed(2)
                          ? data[data.param]?.toFixed(2)
                          : " --"}
                        <span className="lot">{data.lot} </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {loading && <SkeletonBlock />}
          </div>
          <div className="card-4">
            {/* !observations */}
            <Observation />
            {/* !Prophylaxies */}
            <Profylax />
          </div>
          <div className="card-5">
            <div className="chart-box1">
              <div className="chart-1">
                <FirstChart />
                {/* <SkeletonChart /> */}
              </div>
              <div className="chart-2">
                <SecondChart />
                {/* <FirstChart /> */}
              </div>
            </div>
            <div className="chart-box2">
              <div className="chart-3">
                <ThirdChart />
              </div>
              <div className="chart-4">
                <FourthChart />
                {/* <SecondChart /> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
