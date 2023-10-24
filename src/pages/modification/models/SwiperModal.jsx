import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DownloadBtn from "../components/DownloadBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import MortChart from "../charts/MortChart";
import HomogPvChart from "../charts/HomogPvChart";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import UseFetchData from "../../../hooks/UseFetchData";
import Loader from "../../../components/loader/Loader";
let base_url = "https://farmdriver.savas.ma/api/";

import { Navigation } from "swiper/modules";

// import required modules
// import required modules
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  boxShadow: 24,
  p: 3,
};

export default function SwiperModal({ setOpen, open }) {
  const lotTableId = useSelector((state) => state.toggleLeftBar.lotTableId);
  const mortChartApi = useMemo(
    () => `${base_url}table-mort-chart/?lotId=${lotTableId}`,
    [base_url, lotTableId]
  );
  const ApiUrl = useMemo(
    () => `${base_url}homog-pv-chart/?lotId=${lotTableId}`,
    [base_url, lotTableId]
  );
  const { data: mortData, loading: mortLoading } = UseFetchData(
    mortChartApi,
    "GET",
    lotTableId
  );
  const { data, loading, error } = UseFetchData(ApiUrl, "GET", lotTableId);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=""
        onClose={handleClose}
      >
        <Box sx={style} className="confirm-modal modal " id="chartDiv">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <DownloadBtn />
              {error ? (
                <p style={{ zIndex: 1000 }}>error</p>
              ) : (
                <HomogPvChart homogPvData={data} />
              )}
              {loading && <Loader />}
            </SwiperSlide>
            <SwiperSlide>
              <DownloadBtn />
              {!mortData ? (
                <p>No Mort Chart data</p>
              ) : (
                <MortChart mortData={mortData} />
              )}
              {mortLoading && <Loader />}
            </SwiperSlide>
          </Swiper>
        </Box>
      </Modal>
    </div>
  );
}
