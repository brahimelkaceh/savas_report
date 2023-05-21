import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { closeDrop } from "../../slices/UserDrop";

import "./settings.css";
import { useSelector, useDispatch } from "react-redux";
import UserManage from "./usersManage/Users";
import Sites from "./sitesManage/Sites";

const Settings = () => {
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
        <div className="settings-container">
          {/* <h2 className="settings-title">Gestion des sites</h2> */}
          <UserManage />
          <Sites />
        </div>
      </main>
    </>
  );
};

export default Settings;
