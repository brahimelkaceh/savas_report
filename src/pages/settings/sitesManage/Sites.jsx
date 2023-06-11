import SitesTable from "./SitesTable";
import SitesManage from "./SitesManage";
import "./style.css";
function Sites({ CreateSite, setAlert }) {
  return (
    <div className="sites-settings">
      <SitesManage CreateSite={CreateSite} setAlert={setAlert} />
      <SitesTable />
    </div>
  );
}

export default Sites;
