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
import AltChart from "../charts/AltChart";
import IcChart from "../charts/IcChart";

// import required modules
// import required modules
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  boxShadow: 24,
  p: 3,
};

export default function SwiperIcModal({ setOpen, open }) {
  const lotTableId = useSelector((state) => state.toggleLeftBar.lotTableId);
  const altoeufApi = useMemo(
    () => `${base_url}table-altoeuf-chart-new/?lotId=${lotTableId}`,
    [base_url, lotTableId]
  );
  const ApiUrl = useMemo(
    () => `${base_url}table-ic-chart/?lotId=${lotTableId}`,
    [base_url, lotTableId]
  );
  const { data: altData, loading: altOeufLoading } = UseFetchData(
    altoeufApi,
    lotTableId
  );
  const { data, loading, error } = UseFetchData(ApiUrl, lotTableId);

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
              {altData && <AltChart data={altData} show={true} />}
              {loading && <Loader />}
            </SwiperSlide>
            <SwiperSlide>
              <DownloadBtn />
              {data && <IcChart icData={data} show={true} />}

              {loading && <Loader />}
            </SwiperSlide>
          </Swiper>
        </Box>
      </Modal>
    </div>
  );
}
