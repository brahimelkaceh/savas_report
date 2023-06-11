import Topbar from "../../components/Topbar";

import Sidebar from "../../components/Sidebar";
import { closeDrop } from "../../slices/UserDrop";
import { GiGrain } from "react-icons/gi";
import { GrTechnology, GrMoney } from "react-icons/gr";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import { VscSettings } from "react-icons/vsc";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import avatar from "../../assets/avatar.png";

import "./dashboard.css";
import { useSelector, useDispatch } from "react-redux";

import Cards from "./Cards";
import RightBar from "./RightBar";
import Charts from "./Charts";
import MobileCharts from "./MobileCharts";

function Dashboard() {
  const status = useSelector((state) => state.toggleLeftBar.status);

  const isVisualize = useSelector((state) => state.openSearchBar.isVisualize);
  const dropState = useSelector((state) => state.userDrop.dropState);

  const dispatch = useDispatch();

  const dashboardWidth = document.body.clientWidth;

  return (
    <>
      <main className={status === true ? "page page-with-sidebar " : "page"}>
        <Topbar
          isVisualize={!isVisualize}
          onClick={() => dropState && dispatch(closeDrop())}
        />
        <Sidebar />
        <div className="container">
          <div className="card-item">
            <div className="card-item-content">
              <div>
                <p className="card-title">
                  <span> Zoo-Tech</span>
                </p>
              </div>
              <div className="card-item-icon">
                <VscSettings style={{ fontSize: "25px" }} />
              </div>
            </div>
            <div className="card-item-footer">
              {/* <p className="ponte">
                <span>Ponte: </span>
                <TrendingUpIcon fontSize="small" sx={{ color: "#15803d" }} />
                45%
              </p> */}
              <p className="moy-production">
                <span>Production Total:</span> 1450000
              </p>
              <p className="moy-age">
                <span>Age Moyen:</span> 35 Sem
              </p>
              <p className="total-eff">
                <span>Total Effectif:</span> 1500000
              </p>
            </div>
          </div>
          <div className="card-item2">
            <div className="card-item-content">
              <div>
                <p className="card-title">
                  <span>Économique</span>
                </p>
              </div>
              <div className="card-item-icon">
                <TrendingUpIcon style={{ fontSize: "25px" }} />
              </div>
            </div>
            <div className="card-item-footer">
              {/* <p className="ponte">
                <span>Ponte: </span>
                <TrendingUpIcon fontSize="small" sx={{ color: "#15803d" }} />
                45%
              </p> */}
              {/* <p className="moy-production">
                <span>Production Total:</span> 1450000
              </p>
              <p className="moy-age">
                <span>Age Moyen:</span> 35 Sem
              </p>
              <p className="total-eff">
                <span>Total Effectif:</span> 1500000
              </p> */}
            </div>
          </div>
          <div className="card-item3">
            <div className="card-item-content">
              <div>
                <p className="card-title">
                  <span> Nutrition & FA</span>
                </p>
              </div>
              <div className="card-item-icon">
                <GiGrain style={{ fontSize: "25px" }} />
              </div>
            </div>
            <div className="card-item-footer">
              {/* <p className="ponte">
                <span>Ponte: </span>
                <TrendingUpIcon fontSize="small" sx={{ color: "#15803d" }} />
                45%
              </p> */}
              {/* <p className="moy-production">
                <span>Production Total:</span> 1450000
              </p>
              <p className="moy-age">
                <span>Age Moyen:</span> 35 Sem
              </p>
              <p className="total-eff">
                <span>Total Effectif:</span> 1500000
              </p> */}
            </div>
          </div>

          {/* <Cards /> */}
          {/* <Cards /> */}
          {/* <Cards /> */}
          {/* <div className="card-item2 blocked">
            <div className="card-item-content">
              <GrMoney className="card-item-icon icon3" />
              <div>
                <p className="card-title">
                  <span> Économique</span>
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="card-item3">
            <div className="card-item-content">
              <GiGrain className="card-item-icon icon4" />
              <div>
                <p className="card-title">
                  PERFORMANCE <span> Nutrition & FA</span>
                </p>
              </div>
            </div>
          </div> */}
          {dashboardWidth <= 768 ? (
            <RightBar />
          ) : (
            <div className="right-bar">
              <div className="right-bar-title">Fils d'actualité</div>
              <div className="right-bar-content">
                <div className="right-bar-content-header">
                  <div className="avatar">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <span className="user-name">Ethan Noah</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium esse sequi aliquam nostrum! Rem, ex?
                </p>
                <div className="user-time">
                  <span>Feb 2, 2023 19:28</span>
                </div>
              </div>
              <div className="right-bar-content">
                <div className="right-bar-content-header">
                  <div className="avatar">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <span className="user-name">Ethan Noah</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium esse sequi aliquam nostrum! Rem, ex?
                </p>
                <div className="user-time">
                  <span>Feb 2, 2023 19:28</span>
                </div>
              </div>
              <div className="right-bar-content">
                <div className="right-bar-content-header">
                  <div className="avatar">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <span className="user-name">Ethan Noah</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium esse sequi aliquam nostrum! Rem, ex?
                </p>
                <div className="user-time">
                  <span>Feb 2, 2023 19:28</span>
                </div>
              </div>
              <div className="right-bar-content">
                <div className="right-bar-content-header">
                  <div className="avatar">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <span className="user-name">Ethan Noah</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium esse sequi aliquam nostrum! Rem, ex?
                </p>
                <div className="user-time">
                  <span>Feb 2, 2023 19:28</span>
                </div>
              </div>
              <div className="right-bar-content">
                <div className="right-bar-content-header">
                  <div className="avatar">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <span className="user-name">Ethan Noah</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium esse sequi aliquam nostrum! Rem, ex?
                </p>
                <div className="user-time">
                  <span>Feb 2, 2023 19:28</span>
                </div>
              </div>
              <div className="right-bar-content">
                <div className="right-bar-content-header">
                  <div className="avatar">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <span className="user-name">Ethan Noah</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium esse sequi aliquam nostrum! Rem, ex?
                </p>
                <div className="user-time">
                  <span>Feb 2, 2023 19:28</span>
                </div>
              </div>
              <div className="right-bar-content">
                <div className="right-bar-content-header">
                  <div className="avatar">
                    <img src={avatar} alt="avatar" />
                  </div>
                  <span className="user-name">Ethan Noah</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium esse sequi aliquam nostrum! Rem, ex?
                </p>
                <div className="user-time">
                  <span>Feb 2, 2023 19:28</span>
                </div>
              </div>
            </div>
          )}
          {dashboardWidth <= 500 ? (
            <MobileCharts />
          ) : (
            <>
              <Charts /> <Charts />
            </>
          )}
        </div>

        {/* <Cards /> */}
      </main>
    </>
  );
}

export default Dashboard;
