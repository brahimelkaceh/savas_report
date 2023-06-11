import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EditSitesModal from "./EditSitesModal";
import DeleteSiteModal from "./DeletesitesModal";
// import EditeSy
let base_url = "https://pouliprod.savas.ma/api/";

function SitesTable() {
  const [loading, setLoading] = useState(false);
  const [siteData, setSiteData] = useState();
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  let inputs = useSelector((state) => state.toggleLeftBar.inputs);
  const handleOpen = () => setOpen(true);
  const handleDeleteModal = () => setOpenDeleteModal(true);

  const GetSiteData = async () => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}get-sites/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setLoading(false);
        // console.log(JSON.parse(data));
        setSiteData(JSON.parse(data));
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetSiteData();
  }, [inputs]);
  return (
    <div className="site-table slit-in-horizontal">
      {open && <EditSitesModal open={open} setOpen={setOpen} />}
      {openDeleteModal && (
        <DeleteSiteModal
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
        />
      )}

      <table className="">
        <thead className="fixed-header">
          <tr>
            <th>Sites</th>
            <th>Phone</th>
            <th>Region</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {siteData !== undefined &&
            siteData.map((site) => (
              <tr key={site.id}>
                <td>{site.name}</td>
                <td>{site.phone}</td>
                <td>{site.region}</td>
                <td>
                  <DeleteForeverIcon
                    style={{ color: "#dc2626", cursor: "pointer" }}
                    onClick={handleDeleteModal}
                  />
                  <EditIcon
                    style={{ color: "#fbbf24", cursor: "pointer" }}
                    onClick={handleOpen}
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
