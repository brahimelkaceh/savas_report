import SitesTable from "./SitesTable";
import SitesManage from "./SitesManage";
import { useState } from "react";
import "./style.css";
function Sites() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sites-settings">
      <SitesManage setOpen={setOpen} open={open} />
      <SitesTable renderData={open} />
    </div>
  );
}

export default Sites;
