import logo from "../assets/savas.svg";
import { FaTimes } from "react-icons/fa";
import {
  VscNewFile,
  VscFileSymlinkFile,
  VscSettingsGear,
  VscSymbolProperty,
} from "react-icons/vsc";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import DownloadBtn from "./buttons/DownloadBtn";
import { useDispatch, useSelector } from "react-redux";
import { toggleLeftBar } from "../slices/LeftBar";
const Sidebar = () => {
  const status = useSelector((state) => state.toggleLeftBar.status);
  const dispatch = useDispatch();
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
        <Link
          to="/"
          onClick={() => {
            dispatch(toggleLeftBar());
          }}
        >
          <VscNewFile /> Report
        </Link>
        <Link
          to="/visualize"
          onClick={() => {
            dispatch(toggleLeftBar());
          }}
        >
          <VscFileSymlinkFile /> Visualize
        </Link>
        <Link to="/settings">
          <VscSettingsGear /> Settings
        </Link>
        <Link to="/modification">
          <VscSymbolProperty /> Modification
        </Link>
        <Link to="/login">
          <VscSymbolProperty /> Login
        </Link>
      </ul>
      <DownloadBtn />
    </aside>
  );
};

export default Sidebar;
