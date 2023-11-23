import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { closeDrop } from "../../slices/UserDrop";
import UseFetchData from "../../hooks/UseFetchData";
import UserManage from "./usersManage/Users";
import Sites from "./sitesManage/Sites";
import Bats from "./batsManage/Bats";
import "./settings.css";

let base_url = "https://farmdriver.savas.ma/api/";

const Settings = () => {
  const status = useSelector((state) => state.toggleLeftBar.status);

  const isVisualize = useSelector((state) => state.openSearchBar.isVisualize);
  const dropState = useSelector((state) => state.userDrop.dropState);

  const dispatch = useDispatch();

  const apiUrl = useMemo(() => `${base_url}get-sites/`, [base_url]);

  const { data } = UseFetchData(apiUrl);

  return (
    <>
      <main className={status === true ? "page page-with-sidebar " : "page"}>
        <Topbar
          isVisualize={!isVisualize}
          onClick={() => dropState && dispatch(closeDrop())}
        />
        <Sidebar />

        <div className="settings-container">
          <UserManage siteName={data} />
          <Sites />
          <Bats siteName={data} />
        </div>
      </main>
    </>
  );
};

export default Settings;
