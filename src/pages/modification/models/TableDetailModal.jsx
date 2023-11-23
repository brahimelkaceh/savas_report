import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useMemo, useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import EggIcon from "@mui/icons-material/Egg";

import UseFetchData from "../../../hooks/UseFetchData";
import Loader from "../../../components/loader/Loader";
import egg70 from "../../../assets/70.png";
import egg80 from "../../../assets/80.png";
import egg90 from "../../../assets/90.png";
import egg100 from "../../../assets/100.png";
import egg110 from "../../../assets/110.png";
import noimg from "../../../assets/no-img.png";
import { useSelector } from "react-redux";
let base_url = "https://farmdriver.savas.ma/api/";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  minHeight: 50,
  boxShadow: 24,
  p: 3,
  borderTopColor: "#004e86",
};
const TableDetailModal = ({ open, setOpen, age, lotId }) => {
  const batimentName = useSelector((state) => state.getSiteData.batimentName);
  console.log(batimentName);
  const tableApiUrl = useMemo(
    () => `${base_url}get-table-row-details/?lotId=${lotId}&age=${age}`,
    [base_url, lotId, age]
  );

  const { data, loading } = UseFetchData(tableApiUrl, "GET", lotId);

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
        <Box sx={style} className="confirm-modal ">
          {loading ? (
            <Loader />
          ) : (
            <table className="table-detail">
              <thead>
                <th>Date</th>
                <th>jour</th>
                <th>Coloration</th>
                <th>Coquille</th>
                <th>Observation</th>
                <th>Double jaune</th>
                <th>blancs</th>
                <th>Cassé</th>
              </thead>
              <tbody>
                {data?.map((d, i) => {
                  return (
                    <tr key={i}>
                      <td>{d.date}</td>
                      <td>{d.day}</td>

                      <td>
                        <div style={{ height: "50px" }}>
                          <img
                            src={
                              d.coloration == 70
                                ? egg70
                                : d.coloration == 80
                                ? egg80
                                : d.coloration == 90
                                ? egg90
                                : d.coloration == 100
                                ? egg100
                                : d.coloration == 110
                                ? egg110
                                : noimg
                            }
                            alt={egg80}
                            style={{ height: "100%" }}
                          />
                        </div>
                      </td>
                      <td>
                        <Rating name="read-only" value={d.coquille} readOnly />
                      </td>
                      <td>{d.observation || "--"}</td>
                      <td>{d.casse || "--"}</td>
                      <td>{d.dj || "--"}</td>
                      <td>{d.blancs || "--"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default TableDetailModal;
