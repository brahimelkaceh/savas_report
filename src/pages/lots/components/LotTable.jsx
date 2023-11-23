import React from "react";
import { useMemo, useState } from "react";
import UseFetchData from "../../../hooks/UseFetchData";
import ConfirmModal from "../modals/ConfirmModal";
import Loader from "../../../components/loader/Loader";
import { HiPlay } from "react-icons/hi2";
import { HiPause } from "react-icons/hi2";

let base_url = "https://farmdriver.savas.ma/api/";

const LotTable = () => {
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [lotId, setLotId] = useState("");
  const handleClose = () => {
    setOpenSuccessModal(false);
  };
  const lotTitlesApiUrl = useMemo(
    () => `${base_url}get-lots-titles/`,
    [base_url]
  );
  const { data, loading } = UseFetchData(lotTitlesApiUrl);

  // const markreformd = async (id) => {
  //   try {
  //     const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;
  //     const response = await fetch(`${base_url}mark-reformed/?lotId=${id}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });

  //     if (response.ok) {
  //     } else {
  //       console.error("Error  data");
  //     }
  //   } catch (error) {
  //     console.error("Error  data:", error);
  //   }
  // };
  const toggleReform = async (id) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;
      const response = await fetch(`${base_url}toggle-reform/?lotId=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        console.log(response.message);
      } else {
        console.error("Error  data");
      }
    } catch (error) {
      console.error("Error  data:", error);
    }
  };
  return (
    <div className="data-lot-container">
      {openSuccessModal && (
        <ConfirmModal
          setOpen={setOpenSuccessModal}
          open={openSuccessModal}
          message={"asking to continue..."}
          onClose={handleClose}
          markreformd={markreformd}
          lotId={lotId}
        />
      )}
      <p className="title">Lots actifs</p>
      <div className="reform-cards">
        {data &&
          data.map((lot, i) => {
            return (
              <div
                className={
                  lot.isReformed
                    ? "reform-card disabled-reform-card"
                    : "reform-card"
                }
                key={i}
              >
                {loading && <Loader />}

                <div className="code-lot">
                  {loading ? <span>loading...</span> : <p>{lot.code}</p>}
                </div>
                <div className={`${lot.isRefroming} && "active-reform"`}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <button
                      disabled={!lot.isRefroming}
                      className="refomed-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleReform(lot.id);
                      }}
                    >
                      {lot.isRefroming ? (
                        <HiPause
                          fontSize={"18px"}
                          style={{ color: "#C70039" }}
                        ></HiPause>
                      ) : (
                        <HiPlay
                          fontSize={"18px"}
                          style={{ color: "#4F6F52" }}
                        ></HiPlay>
                      )}
                    </button>
                    {lot.isRefroming ? (
                      <span>Arreter la reforme</span>
                    ) : (
                      <span>Démarrer la reforme</span>
                    )}
                  </div>
                  {/* <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setLotId(lot.id);
                        setOpenSuccessModal(true);
                        // markreformd(lot.id);
                      }}
                    >
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    Réforme arrêtée
                  </div> */}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default LotTable;
