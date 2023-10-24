import React, { useEffect, useState } from "react";

function FormHeader({ nextReport, lot_code, loading, siteId }) {
  const [reportDate, setReportDate] = useState("");
  const [codeLot, setCodeLot] = useState("");

  useEffect(() => {
    setReportDate(nextReport);
    setCodeLot(lot_code);
  }, [lot_code]);

  useEffect(() => {
    setReportDate("");
    setCodeLot("");
  }, [siteId]);

  return (
    <div className="form-header">
      <div className="next-send">
        <h4 style={{ display: "inline" }}> Rapport de : </h4>

        {loading ? <span> loading...</span> : <span>{reportDate}</span>}
      </div>

      <div className="next-send">
        <h4 style={{ display: "inline" }}>Code Lot :</h4>

        {loading ? <span> loading...</span> : <span>{codeLot} </span>}
      </div>
    </div>
  );
}

export default FormHeader;
