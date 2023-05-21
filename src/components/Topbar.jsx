import logo from "../assets/savas.svg";
import { FaBars, FaSearch } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";

import { BsPersonCircle } from "react-icons/bs";
import UserDrop from "../components/DropDowns/UserDrop";
import "../styles/topbar.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleLeftBar } from "../slices/LeftBar";
import { openSearchBar, closeSearchBar } from "../slices/SearchBar";
import { setUserDrop } from "../slices/UserDrop";
import SearchBar from "./SearchBar";
import DropMenu from "./DropDowns/DropMenu";
import { useContext } from "react";

const Topbar = ({ isVisualize }) => {
  const status = useSelector((state) => state.toggleLeftBar.status);
  const dropState = useSelector((state) => state.userDrop.dropState);
  const searchBarstatus = useSelector(
    (state) => state.openSearchBar.searchBarstatus
  );

  const dispatch = useDispatch();

  return (
    <div className="top-bar">
      <div>
        <button
          className="sidebar-toggle"
          onClick={() => {
            dispatch(toggleLeftBar(true));
            dispatch(closeSearchBar());
          }}
        >
          <FaBars />
        </button>
      </div>

      <img src={logo} alt="Savas-logo" className="logo" />
      {searchBarstatus && <SearchBar />}
      {isVisualize ? (
        <FaSearch
          className="search-toggle"
          onClick={() => {
            dispatch(openSearchBar());
            dispatch(toggleLeftBar(false));
          }}
        />
      ) : (
        // <BsPersonCircle
        //   className="search-toggle"
        //   onClick={() => {
        //     dispatch(setUserDrop());
        //   }}
        // />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack
            spacing={4}
            direction="row"
            sx={{ color: "action.active", margin: 2 }}
          >
            <Badge color="error" variant="dot">
              <HiMail style={{ fontSize: "20px", color: "#fff" }} />
            </Badge>
          </Stack>
          <DropMenu />
        </div>
      )}
      {dropState && <UserDrop />}
    </div>
  );
};
export default Topbar;
