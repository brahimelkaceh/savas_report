import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { closeDrop } from "../../slices/UserDrop";
import ConfirmAlert from "./modals/ConfirmAlert";
import "./settings.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useMemo } from "react";
import UseFetchData from "../../hooks/UseFetchData";
import UserManage from "./usersManage/Users";
import Sites from "./sitesManage/Sites";

import Bats from "./batsManage/Bats";
import ErrorAlert from "./modals/ErrorAlert";
import ConfirmModal from "./modals/ConfirmModal";

let base_url = "https://farmdriver.savas.ma/api/";

const Settings = () => {
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [siteName, setSiteName] = useState();

  const handleOpen = () => setOpen(true);

  const status = useSelector((state) => state.toggleLeftBar.status);

  const isVisualize = useSelector((state) => state.openSearchBar.isVisualize);
  const dropState = useSelector((state) => state.userDrop.dropState);
  let inputs = useSelector((state) => state.toggleLeftBar.inputs);

  const dispatch = useDispatch();
  // ! Users Management
  // * Creating new users

  // * updating users
  // const UpdateUserData = async (data) => {
  //   setLoading(true);
  //   const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

  //   try {
  //     const response = await fetch(`${base_url}update-user-site/`, {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     if (!response.ok) {
  //       data = {};
  //     }

  //     const datas = await response.json();
  //     console.log(datas);
  //     if (response.ok) {
  //       setMessage("Vos modifications ont été enregistrées.");
  //       handleOpen();
  //       setTimeout(() => {
  //         setOpenEditModal(false);
  //       }, 1000);
  //     } else {
  //       setLoading(false);
  //       const errorMessage = "Un utilisateur avec ce identifiant existe déjà";
  //       throw new Error(errorMessage);
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // };
  // ! Sites Management

  // ! Bâtiments Management
  // * Creating Bâtiments
  const CreateBatiments = async (data) => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}create-batmnt/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        data = {};
      }

      const datas = await response.json();
      if (response.ok) {
        setMessage("Le site a été ajouté au système");
        handleOpen();
      } else {
        setLoading(false);
        const errorMessage = response.status;
        throw new Error(errorMessage);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  // * Updating Bâtiments
  // const UpdateBatimentData = async (data) => {
  //   // console.log(data);
  //   setLoading(true);
  //   const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

  //   try {
  //     const response = await fetch(`${base_url}update-batmnt/`, {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     if (!response.ok) {
  //       data = {};
  //     }

  //     const datas = await response.json();
  //     if (response.ok) {
  //       setMessage("Vos modifications ont été enregistrées.");
  //       handleOpen();
  //       setTimeout(() => {
  //         setOpenEditModal(false);
  //       }, 1000);
  //     } else {
  //       setLoading(false);
  //       const errorMessage = "Bâtiment existe déjà";
  //       throw new Error(errorMessage);
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // };

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
        {alert && <ConfirmAlert alert={alert} setAlert={setAlert} />}
        {error !== null && <ErrorAlert error={error} setError={setError} />}
        {open && (
          <ConfirmModal open={open} setOpen={setOpen} message={message} />
        )}

        <div className="settings-container">
          <UserManage
            // UpdateUserData={UpdateUserData}
            alert={alert}
            setAlert={setAlert}
            message={message}
            siteName={data}
          />
          <Sites
            setAlert={setAlert}
            // UpdateSiteData={UpdateSiteData}
          />
          <Bats
            CreateBatiments={CreateBatiments}
            // UpdateBatimentData={UpdateBatimentData}
            setAlert={setAlert}
            siteName={data}
          />
        </div>
      </main>
    </>
  );
};

export default Settings;
