import SitesTable from "./SitesTable";
import SitesManage from "./SitesManage";
import "./style.css";
function Sites({ CreateSite, UpdateSiteData, setAlert }) {
  return (
    <div className="sites-settings">
      <SitesManage CreateSite={CreateSite} setAlert={setAlert} />
      <SitesTable setAlert={setAlert} UpdateSiteData={UpdateSiteData} />
    </div>
  );
}

export default Sites;
