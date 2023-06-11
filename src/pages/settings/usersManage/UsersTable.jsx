import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  userId,
  userData,
  userEmail,
  userFirstName,
  userLastName,
  userPhone,
  userIsAdmin,
  userSite,
  userSiteId,
  handleCloseEditModal,
} from "../../../slices/LeftBar";
import EditUsersModal from "./EditUsersModal";
import DeleteUsersModal from "./DeleteUsersModal";
let base_url = "https://pouliprod.savas.ma/api/";

// get-users
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function UsersTable({
  UpdateUserData,
  siteName,
  setAlert,
  openEditModal,
  setOpenEditModal,
}) {
  const [loading, setLoading] = useState(false);
  const [usersData, setUsersData] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [siteNames, setSiteNames] = useState(siteName);

  let inputs = useSelector((state) => state.toggleLeftBar.inputs);
  let siteId = useSelector((state) => state.toggleLeftBar.siteId);
  let editModal = useSelector((state) => state.toggleLeftBar.editModal);

  const handleEditOpen = () => setOpenEditModal(true);
  const handleDeleteModal = () => setOpenDeleteModal(true);

  const dispatch = useDispatch();

  const GetUsersData = async () => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}get-users/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setLoading(false);
        // console.log(JSON.parse(data));
        setUsersData(JSON.parse(data));
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetUsersData();
  }, [inputs]);
  return (
    <div className="user-table slit-in-horizontal">
      {openDeleteModal && (
        <DeleteUsersModal
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
        />
      )}
      <table className="">
        <thead className="fixed-header">
          <tr>
            <th>Profile</th>
            <th>Identifiant</th>
            <th>E-mail</th>
            <th>Télephone</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Site</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersData !== undefined &&
            usersData.map((user) => (
              <tr key={user.user_id} className="slit-in-horizontal">
                <td>
                  <Avatar
                    {...stringAvatar(`${user.last_name} ${user.first_name} `)}
                  />
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.last_name}</td>
                <td>{user.first_name}</td>
                <td>{user.site_name}</td>
                <td>
                  <DeleteForeverIcon
                    onClick={handleDeleteModal}
                    style={{ color: "#dc2626", cursor: "pointer" }}
                  />
                  <EditIcon
                    // onClick={handleEditOpen}
                    onClick={() => {
                      handleEditOpen();
                      dispatch(userId(user.user_id));
                      dispatch(userData(user.username));
                      dispatch(userEmail(user.email));
                      dispatch(userFirstName(user.first_name));
                      dispatch(userLastName(user.last_name));
                      dispatch(userIsAdmin(user.is_admin));
                      dispatch(userSite(user.site_name));
                      dispatch(userPhone(user.phone));
                      dispatch(userSiteId(user.site_id));
                      dispatch(handleCloseEditModal(openEditModal));
                    }}
                    style={{ color: "#fbbf24", cursor: "pointer" }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {loading && <div className="custom-loader"></div>}
    </div>
  );
}

export default UsersTable;
