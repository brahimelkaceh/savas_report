import { useSelector, useDispatch } from "react-redux";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Header from "./Header";
import DataTable from "./table/DataTable";
function Modification() {
  const status = useSelector((state) => state.toggleLeftBar.status);
  const isVisualize = useSelector((state) => state.openSearchBar.isVisualize);
  const dropState = useSelector((state) => state.userDrop.dropState);
  const dispatch = useDispatch();

  return (
    <>
      <main className={status === true ? "page page-with-sidebar " : "page"}>
        <Topbar
          isVisualize={!isVisualize}
          onClick={() => dropState && dispatch(closeDrop())}
        />
        <Sidebar />
        <div className="modification-container">
          <Header />
          <DataTable />
        </div>
      </main>
    </>
  );
}
// the price of the progress is pain

export default Modification;
