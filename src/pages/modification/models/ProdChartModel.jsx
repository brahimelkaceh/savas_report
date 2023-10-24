import { useMemo } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ProdChart from "../charts/ProdChart";
import DownloadBtn from "../components/DownloadBtn";
import Loader from "../../../components/loader/Loader";
import UseFetchData from "../../../hooks/UseFetchData";
let base_url = "https://farmdriver.savas.ma/api/";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  boxShadow: 24,
  p: 3,
};

export default function ProdChartModel({
  setOpenProdChartModel,
  openProdChartModel,
}) {
  const lotTableId = useSelector((state) => state.toggleLeftBar.lotTableId);
  const ApiUrl = useMemo(
    () => `${base_url}table-prod-chart/?lotId=${lotTableId}`,
    [base_url, lotTableId]
  );
  const { data, loading, error } = UseFetchData(ApiUrl, "GET", lotTableId);
  const handleClose = () => {
    setOpenProdChartModel(false);
  };

  return (
    <div>
      <Modal
        open={openProdChartModel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=""
        onClose={handleClose}
      >
        <Box sx={style} className="confirm-modal modal " id="chartDiv">
          <DownloadBtn />
          {error ? <p>error</p> : <ProdChart prodData={data} />}
          {loading && <Loader />}
        </Box>
      </Modal>
    </div>
  );
}
