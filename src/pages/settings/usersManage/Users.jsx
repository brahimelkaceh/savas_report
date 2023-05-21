import UsersManage from "./UsersManage";
import UsersTable from "./UsersTable";
function Users() {
  return (
    <div className="users-settings">
      <UsersTable />
      <UsersManage />
    </div>
  );
}

export default Users;
