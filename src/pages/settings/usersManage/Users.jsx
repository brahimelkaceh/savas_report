import UsersManage from "./UsersManage";
import UsersTable from "./UsersTable";
function Users({
  CreateUsers,
  UpdateUserData,
  openEditModal,
  setOpenEditModal,
  alert,
  setAlert,
  message,
  siteName,
}) {
  return (
    <div className="users-settings">
      <UsersTable
        siteName={siteName}
        UpdateUserData={UpdateUserData}
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
        alert={alert}
        setAlert={setAlert}
        message={message}
      />
      <UsersManage
        CreateUsers={CreateUsers}
        alert={alert}
        setAlert={setAlert}
        message={message}
        siteName={siteName}
      />
    </div>
  );
}

export default Users;
