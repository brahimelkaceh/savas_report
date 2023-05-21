import { FaSearch } from "react-icons/fa";
import SearchBar from "../components/SearchBar";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import like1 from "../assets/like1.svg";
import "../styles/visualize.css";

import { StaticSide } from "../components/report/StaticSide";
import DynamicSide from "../components/report/DynamicSide";

import { useDispatch, useSelector } from "react-redux";
import { openSearchBar } from "../slices/SearchBar";
import { toggleLeftBar } from "../slices/LeftBar";

const Visualize = ({ reports }) => {
  // console.log(reports);
  const isVisualize = useSelector((state) => state.openSearchBar.isVisualize);

  const dispatch = useDispatch();
  return (
    <>
      <div className="top-bar">
        <Topbar isVisualize={isVisualize} />
        <Sidebar />

        <button
          className="search-toggle"
          onClick={() => {
            dispatch(toggleLeftBar(false));
            dispatch(openSearchBar());
          }}
        >
          {/* {isVisualize && <FaSearch />} */}
        </button>

        {/* {searchBarstatus && <SearchBar />} */}
      </div>
      {/* <main className={statusbar === true ? "page page-with-sidebar " : "page"}> */}
      <main className="page page-with-sidebar ">
        <div className="table">
          <StaticSide />
          <div className="dynamic__side">
            <DynamicSide />
            <DynamicSide />
            <DynamicSide />
            <DynamicSide />
            <DynamicSide />
            <DynamicSide />
            <DynamicSide />
            <DynamicSide />
            <DynamicSide />
            <DynamicSide />
          </div>
        </div>
      </main>
    </>
  );
};

export default Visualize;
