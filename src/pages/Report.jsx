import { useState } from "react";
import "../styles/report.css";
import { AiFillSetting } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import batiments from "../data/Site";
import Modal from "../components/modals/Modal";
import Batiment from "../components/Batiment";
import Topbar from "../components/Topbar";
import { showModal } from "../slices/ShowModal";
import { useDispatch, useSelector } from "react-redux";
import { closeDrop } from "../slices/UserDrop";
import Sidebar from "../components/Sidebar";

const Report = ({ CreateReports, lots }) => {
  const [bats, setSite] = useState(batiments);
  const [currentBat, setCurrent] = useState("");

  const dropState = useSelector((state) => state.userDrop.dropState);
  const modalState = useSelector((state) => state.showModal.modalState);
  const status = useSelector((state) => state.toggleLeftBar.status);
  const isVisualize = useSelector((state) => state.openSearchBar.isVisualize);

  const dispatch = useDispatch();

  return (
    <>
      <main className={status === true ? "page page-with-sidebar " : "page"}>
        <Topbar
          isVisualize={!isVisualize}
          onClick={() => dropState && dispatch(closeDrop())}
        />
        <Sidebar />
        <div className="site">
          {bats.map((bat) => {
            return (
              <div key={bat.id} className="batiment">
                <div>
                  <AiFillSetting
                    className="setting-icon"
                    onClick={() => {
                      setCurrent(bat.batiment);
                      dispatch(showModal(true));
                    }}
                  />
                </div>
                <Batiment {...bat} CreateReports={CreateReports} />
                {modalState && (
                  <Modal
                    CreateReports={CreateReports}
                    currentBat={currentBat}
                    lots={lots}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* <button className="btn" onClick={openModal}>
        Show Modal
      </button> */}
      </main>
    </>
  );
};

export default Report;
