import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditBatsModal from "./EditBatsModal";
import DeleteBatsModal from "./DeleteBatsModal";
import {
  getBatId,
  getBatSite,
  getBatType,
  getBatName,
} from "../../../slices/SiteData";
let base_url = "https://pouliprod.savas.ma/api/";
function BatsTable({ UpdateBatimentData, siteName }) {
  const [loading, setLoading] = useState(false);
  const [batsData, setBatsData] = useState();
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  let inputs = useSelector((state) => state.toggleLeftBar.inputs);

  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);

  const handleModalOpen = () => setOpenDeleteModal(true);

  const GetBatsData = async () => {
    setLoading(true);
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    try {
      const response = await fetch(`${base_url}get-bats/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      if (response.status === 200) {
        setLoading(false);
        // console.log(JSON.parse(data));
        setBatsData(JSON.parse(data));
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetBatsData();
  }, [inputs]);
  return (
    <div className="bats-table slit-in-horizontal">
      {open && (
        <EditBatsModal
          open={open}
          setOpen={setOpen}
          siteName={siteName}
          UpdateBatimentData={UpdateBatimentData}
        />
      )}
      {openDeleteModal && (
        <DeleteBatsModal
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
        />
      )}
      {/* {openModal && <Dele} */}

      <table className="">
        <thead className="fixed-header">
          <tr>
            <th>Sites</th>
            <th>Bâtiment</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {batsData !== undefined &&
            batsData.map((bats) => (
              <tr key={bats.id}>
                <td>{bats.site_name}</td>
                <td>{bats.name}</td>
                <td>
                  <span
                    className={
                      bats.type === "production"
                        ? "production-color"
                        : "poussiniere-color"
                    }
                  >
                    {bats.type}
                  </span>
                </td>
                <td>
                  <DeleteForeverIcon
                    style={{ color: "#dc2626", cursor: "pointer" }}
                    onClick={handleModalOpen}
                  />
                  <EditIcon
                    style={{ color: "#fbbf24", cursor: "pointer" }}
                    onClick={() => {
                      handleOpen();
                      dispatch(getBatId(bats.id));
                      dispatch(getBatName(bats.name));
                      dispatch(getBatType(bats.type));
                      dispatch(getBatSite(bats.site_id));
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

export default BatsTable;
