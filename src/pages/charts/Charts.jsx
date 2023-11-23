import { useSelector, useDispatch } from "react-redux";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
// Import Swiper React components

// Import Swiper styles
import "./style/style.css";
import Container from "./components/Container";
import DashedLine from "./components/DashedLine";

export default function Charts() {
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
        <Container />
        {/* <DashedLine /> */}
      </main>
    </>
  );
}
