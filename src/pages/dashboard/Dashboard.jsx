import Topbar from "../../components/Topbar";

import Sidebar from "../../components/Sidebar";
import { closeDrop } from "../../slices/UserDrop";
import grow from "../../assets/growth.svg";
import decrease from "../../assets/decrease.svg";
import injection from "../../assets/injection.svg";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
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
        <div class="container">
          <Cards className={"card-1"} />
          <div class="card-2">
            <div className="card-item-content">
              <div className="card-item-footer">
                <p className="moy-production">
                  <span>Ponte:</span> 85.6%
                </p>
                <p className="moy-age">
                  <span>Viabilité:</span> 98.02%
                </p>
                <p className="total-eff">
                  <span>Nombre d’oeufs:</span> 420500
                </p>
                <p className="total-eff">
                  <span>Mass d’oeufs :</span> 5.6%
                </p>
              </div>
              <div className="card-item-icon">
                <img className="card-item-icon" src={grow} alt="" />
              </div>
            </div>
          </div>
          <div class="card-3">
            <div className="card-item-content">
              <div className="card-item-footer">
                <p className="moy-production">
                  <span>Ponte:</span> 85.6%
                </p>
                <p className="moy-age">
                  <span>Mortalité:</span> 98.02%
                </p>
                <p className="total-eff">
                  <span>Mass d’oeufs ∑ :</span> 420500
                </p>
                <p className="total-eff">
                  <span>Homogénéité :</span> 5.6%
                </p>
              </div>
              <div className="card-item-icon">
                <img className="card-item-icon" src={decrease} alt="" />
              </div>
            </div>
          </div>
          <div class="card-4">
            <div class="prophylaxie">
              <h1 className="title">Rappels de prophilaction</h1>
              <div className="card-item">
                <div className="card-icon">
                  <img src={injection} alt="" />
                </div>
                <div className="card-content">
                  <p>
                    Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing
                    elit. Blanditiis, voluptatem?
                  </p>
                  <div className="card-date">15 May 2020 9:00 am</div>
                </div>
              </div>
              <div className="card-item">
                <div className="card-icon">
                  <img src={injection} alt="" />
                </div>
                <div className="card-content">
                  <p>
                    Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing
                    elit. Blanditiis, voluptatem?
                  </p>
                  <div className="card-date">15 May 2020 9:00 am</div>
                </div>
              </div>
              <div className="card-item">
                <div className="card-icon">
                  <img src={injection} alt="" />
                </div>
                <div className="card-content">
                  <p>
                    Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing
                    elit. Blanditiis, voluptatem?
                  </p>
                  <div className="card-date">15 May 2020 9:00 am</div>
                </div>
              </div>
              <div className="card-item">
                <div className="card-icon">
                  <img src={injection} alt="" />
                </div>
                <div className="card-content">
                  <p>
                    Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing
                    elit. Blanditiis, voluptatem?
                  </p>
                  <div className="card-date">15 May 2020 9:00 am</div>
                </div>
              </div>
              <div className="card-item">
                <div className="card-icon">
                  <img src={injection} alt="" />
                </div>
                <div className="card-content">
                  <p>
                    Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing
                    elit. Blanditiis, voluptatem?
                  </p>
                  <div className="card-date">15 May 2020 9:00 am</div>
                </div>
              </div>
            </div>
            <div class="observations">
              <h1 className="title">Observations</h1>
              <div className="card-item ">
                <div>
                  <OfflineBoltIcon className="card-icon" />
                </div>
                <div className="card-content">
                  <div className="card-title">Site (bâtiment)</div>

                  <p>
                    Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing
                    elit. Blanditiis, voluptatem?
                  </p>
                  <div className="card-date">15 May 2020 9:00 am</div>
                </div>
              </div>
              <div className="card-item good">
                <div>
                  <CheckCircleIcon className="card-icon good" />
                </div>
                <div className="card-content">
                  <div className="card-title">Site (bâtiment)</div>

                  <p>
                    Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing
                    elit. Blanditiis, voluptatem?
                  </p>
                  <div className="card-date">15 May 2020 9:00 am</div>
                </div>
              </div>
              <div className="card-item danger">
                <div>
                  <ErrorIcon className="card-icon danger" />
                </div>
                <div className="card-content">
                  <div className="card-title">Site (bâtiment)</div>

                  <p>
                    Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing
                    elit. Blanditiis, voluptatem?
                  </p>
                  <div className="card-date">15 May 2020 9:00 am</div>
                </div>
              </div>
              <div className="card-item ">
                <div>
                  <OfflineBoltIcon className="card-icon" />
                </div>
                <div className="card-content">
                  <div className="card-title">Site (bâtiment)</div>

                  <p>
                    Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing
                    elit. Blanditiis, voluptatem?
                  </p>
                  <div className="card-date">15 May 2020 9:00 am</div>
                </div>
              </div>
              <div className="card-item good">
                <div>
                  <CheckCircleIcon className="card-icon good" />
                </div>
                <div className="card-content">
                  <div className="card-title">Site (bâtiment)</div>

                  <p>
                    Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing
                    elit. Blanditiis, voluptatem?
                  </p>
                  <div className="card-date">15 May 2020 9:00 am</div>
                </div>
              </div>
              <div className="card-item danger">
                <div>
                  <ErrorIcon className="card-icon danger" />
                </div>
                <div className="card-content">
                  <div className="card-title">Site (bâtiment)</div>

                  <p>
                    Lorem ipsum dolor sit amet conse vctetur ctetur adipisi cing
                    elit. Blanditiis, voluptatem?
                  </p>
                  <div className="card-date">15 May 2020 9:00 am</div>
                </div>
              </div>
            </div>
          </div>
          <div class="div5">
            <div class="div51">div51</div>
            <div class="div52">div52</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
