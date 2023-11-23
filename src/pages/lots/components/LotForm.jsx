import React, { useState } from "react";
import { useFormik } from "formik";
import { useMemo } from "react";
import UseFetchData from "../../../hooks/UseFetchData";
import { AiOutlineSend } from "react-icons/ai";
import ErrorModal from "../modals/ErrorModal";
import SuccessModal from "../modals/SuccessModal";

let base_url = "https://farmdriver.savas.ma/api/";
const LotForm = () => {
  const [bats, setBats] = useState("");
  const [loading, setLoading] = useState(true);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const apiUrl = useMemo(() => `${base_url}get-active-guides/`, [base_url]);
  const { data, loading: guideLoading } = UseFetchData(apiUrl);

  const SiteApiurl = useMemo(() => `${base_url}get-sites/`, [base_url]);
  const { data: siteData, loading: siteLoading } = UseFetchData(SiteApiurl);

  const fetchBatsData = (id) => {
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    setLoading(true);

    fetch(`${base_url}get-site-bats/`, {
      method: "POST",
      body: JSON.stringify({
        site: id,
      }),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBats(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  const formik = useFormik({
    initialValues: {
      site: 0,
      batiment: 0,
      guide: 0,
      code: "",
      effectifDP: 0,
      birthDate: "",
      transferDate: "",
      hebdoFill: false,
      reformStarted: false,
    },
    onSubmit: (values) => {
      CreateLot(values);
    },
  });
  const handleClose = () => {
    setOpenSuccessModal(false);
    formik.handleReset();
  };

  const CreateLot = (data) => {
    const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

    fetch(`${base_url}add-lot/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setOpenDeleteModal(true);
          throw new Error(
            "Un bâtiment ne peut en aucun cas comporter plus d'un lot."
          );
        } else {
          setOpenSuccessModal(true);
          setMessage("Lot créé avec succès!");
        }
      })
      .catch((err) => {
        setError(err.message);
      });

    // .catch((error) => console.log("somthing xwrong"));
  };
  return (
    <div className="lot-creation">
      {openDeleteModal && (
        <ErrorModal
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
          error={error}
        />
      )}
      {openSuccessModal && (
        <SuccessModal
          setOpen={setOpenSuccessModal}
          open={openSuccessModal}
          message={message}
          onClose={handleClose}
        />
      )}
      <form
        className="lot-form"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <p className="title">Créer Un lot </p>
        <div className="flex">
          <label>
            <select
              id="guide"
              name="guide"
              className="input"
              placeholder=""
              value={formik.values.guide}
              onChange={formik.handleChange}
            >
              <option value="">--</option>
              {data &&
                data?.map((guide) => (
                  <option key={guide.id} value={guide.id} className="input">
                    {guide.name}
                  </option>
                ))}
            </select>
            <span>{guideLoading ? "loading..." : "Sélectionner guide"}</span>
          </label>
          <label>
            <select
              id="batiment"
              name="batiment"
              className="input"
              placeholder=""
              value={formik.values.batiment}
              onChange={formik.handleChange}
            >
              <option value="">--</option>
              {bats &&
                bats?.map(
                  (bat) =>
                    bat.isEmpty && (
                      <option key={bat.id} value={bat.id} className="input">
                        {bat.name}
                      </option>
                    )
                )}
            </select>
            <span> {loading ? "loading..." : "Sélectionner bâtiment"}</span>
          </label>
          <label>
            <select
              id="site"
              name="site"
              className="input"
              placeholder=""
              value={formik.values.site}
              onChange={(e) => {
                fetchBatsData(e.target.value);
                formik.handleChange(e);
              }}
            >
              <option value="">--</option>

              {siteData &&
                siteData?.map((site) => (
                  <option key={site.id} value={site.id} className="input">
                    {site.name}
                  </option>
                ))}
            </select>
            <span> {siteLoading ? "loading..." : "Sélectionner site"}</span>
          </label>
        </div>
        <label>
          <input
            id="code"
            name="code"
            type="text"
            className="input"
            placeholder=""
            value={formik.values.code}
            onChange={formik.handleChange}
          />
          <span>Code lot</span>
        </label>
        <label>
          <input
            id="effectifDP"
            name="effectifDP"
            type="number"
            className="input"
            placeholder=""
            value={formik.values.effectifDP}
            onChange={formik.handleChange}
          />
          <span>Effectif logée</span>
        </label>
        <label>
          <input
            id="birthDate"
            name="birthDate"
            type="date"
            className="input"
            placeholder=""
            value={formik.values.birthDate}
            onChange={formik.handleChange}
          />
          <span>Date Naissance</span>
        </label>
        <label>
          <input
            id="transferDate"
            name="transferDate"
            type="date"
            className="input"
            placeholder=""
            value={formik.values.transferDate}
            onChange={formik.handleChange}
          />
          <span>Date transfert</span>
        </label>
        {/* 
        <label className="cyberpunk-checkbox-label">
          <input
            type="checkbox"
            className="switch"
            name="hebdoFill"
            checked={formik.values.hebdoFill}
            onChange={formik.handleChange}
          />
          {formik.values.hebdoFill ? "Hebdomadaire" : "Quotidien"}
        </label> */}

        <div className="bnts">
          <button
            type="submit"
            className="edit-btn"
            disabled={
              !formik.values.site.length ||
              !formik.values.guide.length ||
              !formik.values.batiment.length ||
              !formik.values.birthDate ||
              !formik.values.transferDate ||
              !formik.values.code ||
              !formik.values.effectifDP
            }
            // onClick={(e) => {
            //   setOpen(true);
            // }}
          >
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <AiOutlineSend />
              </div>
            </div>
            <span>Envoyer</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LotForm;
