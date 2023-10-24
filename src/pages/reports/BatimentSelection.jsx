import { useMemo, useState, useEffect } from "react";
import UseFetchData from "../../hooks/UseFetchData";
import FormHeader from "./Components/FormHeader";
let base_url = "https://farmdriver.savas.ma/api/";
import { useData } from "./context/DataProvider";
const BatimentSelection = ({ BatimentIdent, siteId }) => {
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

  // const apiUrl
  return (
    <div className="batiment-selection">
      <label>
        <select
          required
          // ref={typeRef}
          id="production"
          className="input"
          onChange={(e) => {
            // formik.handleChange(e);

            setBatimentId(e.target.value);
          }}
          // onFocus={() => dispatch(clearInputs(false))}
        >
          <option value="">--</option>

          {BatimentIdent?.map((batiment) => (
            <option key={batiment.id} value={batiment.id} className="input">
              {batiment.name}
            </option>
          ))}
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
