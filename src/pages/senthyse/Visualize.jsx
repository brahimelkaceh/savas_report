import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import "./visualize.css";

import { StaticSide } from "../../components/report/StaticSide";

import { useDispatch, useSelector } from "react-redux";
import { openSearchBar } from "../../slices/SearchBar";
import { toggleLeftBar } from "../../slices/LeftBar";
import MultipleSelect from "./components/MultipleSelect";
import SelectDate from "./components/SelectDate";
import SelectCard from "./components/SelectCard";

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
        ></button>
      </div>
      <main className="page page-with-sidebar ">
        <div className="synthes-container">
          <div className="daily-down">
            <h2>Telechargement par jour </h2>
            <MultipleSelect />
            <SelectDate />
            <SelectCard />
            <SelectCard />
            <SelectCard />
            <SelectCard />
            <SelectCard />
            <SelectCard />
          </div>
          <div className="weekly-down">
            <h2>Telechargement par semaine </h2>

            <MultipleSelect />
            <SelectDate />
            <SelectCard />
            <SelectCard />
            <SelectCard />
            <SelectCard />
            <SelectCard />
            <SelectCard />
          </div>
        </div>
      </main>
    </>
  );
};

export default Visualize;
