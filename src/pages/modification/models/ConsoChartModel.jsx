import { useMemo } from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ConsoChart from "../charts/ConsoChart";
import DownloadBtn from "../components/DownloadBtn";
import UseFetchData from "../../../hooks/UseFetchData";
import Loader from "../../../components/loader/Loader";
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

export default function ConsoChartModel({
  setOpenConsoChartModel,
  openConsoChartModel,
}) {
  const lotTableId = useSelector((state) => state.toggleLeftBar.lotTableId);

  const ApiUrl = useMemo(
    () => `${base_url}table-conso-chart-new/?lotId=${lotTableId}`,
    [base_url, lotTableId]
  );

  const { data, loading, error } = UseFetchData(ApiUrl, "GET", lotTableId);

  const handleClose = () => {
    setOpenConsoChartModel(false);
  };

  return (
    <div>
      <Modal
        open={openConsoChartModel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=""
        onClose={handleClose}
      >
        <Box sx={style} className="confirm-modal modal " id="chartDiv">
          <DownloadBtn pdfname="consommation" />
          {error ? <p>error</p> : <ConsoChart data={data} show={true} />}
          {loading && <Loader />}
        </Box>
      </Modal>
    </div>
  );
}
