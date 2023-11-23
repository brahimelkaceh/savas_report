import { useMemo, useState, useEffect } from "react";
import UseFetchData from "../../hooks/UseFetchData";
import FormHeader from "./Components/FormHeader";
let base_url = "https://farmdriver.savas.ma/api/";
import { useData } from "./context/DataProvider";
import { getBatimentName } from "../../slices/SiteData";
import { useSelector, useDispatch } from "react-redux";
const BatimentSelection = ({ BatimentIdent, siteId }) => {
  let renderData = useSelector((state) => state.getSiteData.renderData);
  const [batName, setBatName] = useState("");
  const { dispatch } = useData();
  const [batimentId, setBatimentId] = useState("");

  const apiUrl = useMemo(
    () => `${base_url}get-next-send/?batiment=${batimentId}`,
    [base_url, batimentId]
  );

  const { data, loading, error } = UseFetchData(apiUrl, "GET", batimentId);

  useEffect(() => {
    // Dispatch the data to the context when it's available
    if (data) {
      dispatch({ type: "SET_DATA", payload: data });
    }
  }, [data, dispatch]);
  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  useEffect(() => {
    setBatimentId("");
  }, [renderData]);
  // const apiUrl
  return (
    <div className="batiment-selection">
      <label>
        <select
          required
          // ref={typeRef}
          value={batimentId}
          id="production"
          className="input"
          onChange={(e) => {
            setBatimentId(e.target.value);
            console.log(e.target.value);
            dispatch(getBatimentName(e.target.value));
          }}
        >
          <option value="" disabled>
            --
          </option>

          {BatimentIdent?.map((batiment) => {
            return (
              <option key={batiment.id} value={batiment.id} className="input">
                {batiment.name}
              </option>
            );
          })}
        </select>
        <span> Select bâtiment*</span>
      </label>
      <FormHeader
        nextReport={data?.nextDate}
        loading={loading}
        lot_code={data?.lot_code}
        siteId={siteId}
      />
    </div>
  );
};

export default BatimentSelection;
