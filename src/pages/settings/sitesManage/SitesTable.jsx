import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import EditSitesModal from "./EditSitesModal";
import DeleteSiteModal from "./DeletesitesModal";
import {
  getSiteData,
  getSiteName,
  getSitePhone,
} from "../../../slices/SiteData";
import UseFetchData from "../../../hooks/UseFetchData";

// import EditeSy
let base_url = "https://farmdriver.savas.ma/api/";

function SitesTable({ renderData }) {
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [siteId, setSiteId] = useState("");
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleDeleteModal = () => setOpenDeleteModal(true);
  const apiUrl = useMemo(
    () => `${base_url}get-sites/`,
    [base_url, renderData || open]
  );

  const { data, loading } = UseFetchData(apiUrl, renderData || open);

  return (
    <div className="site-table slit-in-horizontal">
      {open && <EditSitesModal open={open} setOpen={setOpen} />}
      {openDeleteModal && (
        <DeleteSiteModal
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
          id={siteId}
        />
      )}

      <table className="">
        <thead className="fixed-header">
          <tr>
            <th>Sites</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data !== undefined &&
            data?.map((site) => (
              <tr key={site.id}>
                <td>{site.name}</td>
                <td>{site.phone}</td>
                <td>
                  <DeleteForeverIcon
                    style={{ color: "#dc2626", cursor: "pointer" }}
                    onClick={() => {
                      setSiteId(site.id);
                      handleDeleteModal();
                    }}
                  />
                  <EditIcon
                    style={{ color: "#fbbf24", cursor: "pointer" }}
                    onClick={() => {
                      handleOpen();
                      dispatch(getSiteData(site.id));
                      dispatch(getSiteName(site.name));
                      dispatch(getSitePhone(site.phone));
                    }}
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

export default SitesTable;
