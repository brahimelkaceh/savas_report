import logo from "../assets/savas.svg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import TableChartIcon from "@mui/icons-material/TableChart";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SettingsIcon from "@mui/icons-material/Settings";
import SourceIcon from "@mui/icons-material/Source";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { FaTimes } from "react-icons/fa";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import "../styles/sidebar.css";
import { Link, NavLink } from "react-router-dom";
import DownloadBtn from "./buttons/DownloadBtn";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleLeftBar } from "../slices/LeftBar";
const Sidebar = ({}) => {
  const status = useSelector((state) => state.toggleLeftBar.status);
  // console.log(status);

  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <aside
      className={`${!status ? "sidebar" : "sidebar  show-sidebar"}`}
      // className="sidebar show-sidebar"
    >
      <div className="sidebar-header">
        <Link to="/">
          <img src={logo} alt="Savas-logo" className="logo" />
        </Link>

        <button
          className="close-btn"
          onClick={() => {
            dispatch(toggleLeftBar());
          }}
        >
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        <li>
          <ul className="sub-links">
            <NavLink
              to="/"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <DashboardIcon className="sidebar-icon" />
              <span>Tableau de bord</span>
            </NavLink>
            <NavLink
              to="/report"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <NoteAddIcon className="sidebar-icon" /> <span>Saisie</span>
            </NavLink>
            <NavLink
              to="/modification"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <TableChartIcon className="sidebar-icon" />
              <span>Visualisation des données</span>
            </NavLink>
            <NavLink
              to="/visualize"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <InsertDriveFileIcon className="sidebar-icon" />
              <span>Synthèse</span>
            </NavLink>
            <NavLink
              to="/charts"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <QueryStatsIcon className="sidebar-icon" />
              <span>Courbes</span>
            </NavLink>
            <NavLink
              to="/settings"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <SettingsIcon className="sidebar-icon" />
              <span>Paramètres</span>
            </NavLink>
            <NavLink
              to="/souches"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <SourceIcon className="sidebar-icon" />
              <span>Souches</span>
            </NavLink>
            {/* <NavLink
              className={location.pathname === "/help" ? "active" : ""}
              to="/help"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <HelpCenterIcon className="sidebar-icon" />
              <span>Aide</span>
            </NavLink> */}
            <NavLink
              to="/test"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <HelpCenterIcon className="sidebar-icon" />
              <span>Index</span>
            </NavLink>
          </ul>
        </li>
      </ul>
      <DownloadBtn />
    </aside>
  );
};

export default Sidebar;
