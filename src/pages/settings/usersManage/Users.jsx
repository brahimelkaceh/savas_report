import { useMemo } from "react";
import UsersManage from "./UsersManage";
import UsersTable from "./UsersTable";

function Users({
  UpdateUserData,

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
        alert={alert}
        setAlert={setAlert}
        message={message}
      />
      <UsersManage
        alert={alert}
        setAlert={setAlert}
        message={message}
        siteName={siteName}
      />
    </div>
  );
}

export default Users;
