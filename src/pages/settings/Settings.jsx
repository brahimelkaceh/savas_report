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
import Navbar from "../../components/navbar/Navbar";

let base_url = "https://farmdriver.savas.ma/api/";

const Settings = () => {
  const status = useSelector((state) => state.toggleLeftBar.status);

  const apiUrl = useMemo(() => `${base_url}get-sites/`, [base_url]);

  const { data } = UseFetchData(apiUrl);

  return (
    <>
      <main className={status === true ? "page page-with-sidebar " : "page"}>
        {/* <Topbar /> */}
        <Navbar />

        <div className="settings-container">
          <Bats siteName={data} />
        </div>
      </main>
    </>
  );
};

export default Settings;
