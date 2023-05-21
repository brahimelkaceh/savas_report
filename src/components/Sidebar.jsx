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
import { Link } from "react-router-dom";
import DownloadBtn from "./buttons/DownloadBtn";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleLeftBar } from "../slices/LeftBar";
const Sidebar = ({}) => {
  const status = useSelector((state) => state.toggleLeftBar.status);

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
            <Link
              className={location.pathname === "/" ? "active" : ""}
              to="/"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <DashboardIcon className="sidebar-icon" />
              <span>Tableau de bord</span>
            </Link>
            <Link
              className={location.pathname === "/report" ? "active" : ""}
              to="/report"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <NoteAddIcon className="sidebar-icon" /> <span>Rapport</span>
            </Link>
            <Link
              className={location.pathname === "/modification" ? "active" : ""}
              to="/modification"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <TableChartIcon className="sidebar-icon" />
              <span>Modifications</span>
            </Link>
            <Link
              className={location.pathname === "/visualize" ? "active" : ""}
              to="/visualize"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <InsertDriveFileIcon className="sidebar-icon" />
              <span>Synthèse</span>
            </Link>
            <Link
              className={location.pathname === "/charts" ? "active" : ""}
              to="/charts"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <QueryStatsIcon className="sidebar-icon" />
              <span>Courbes</span>
            </Link>
            <Link
              className={location.pathname === "/settings" ? "active" : ""}
              to="/settings"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <SettingsIcon className="sidebar-icon" />
              <span>Paramètres</span>
            </Link>
            <Link
              className={location.pathname === "/souches" ? "active" : ""}
              to="/souches"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <SourceIcon className="sidebar-icon" />
              <span>Souches</span>
            </Link>
            <Link
              className={location.pathname === "/help" ? "active" : ""}
              to="/help"
              onClick={() => {
                dispatch(toggleLeftBar());
              }}
            >
              <HelpCenterIcon className="sidebar-icon" />
              <span>Aide</span>
            </Link>
          </ul>
        </li>
      </ul>
      <DownloadBtn />
    </aside>
  );
};

export default Sidebar;
