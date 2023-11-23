import React from "react";

import BatimentSelection from "./BatimentSelection";
import BatimentForm from "./BatimentForm";

import { DataProvider } from "./context/DataProvider";
function Batiment({ batiments, siteId }) {
  const separateBatiment = {};
  batiments.forEach((obj) => {
    const { type } = obj;
    if (separateBatiment[type]) {
      separateBatiment[type].push(obj);
    } else {
      separateBatiment[type] = [obj];
    }
  });
  const fullBatiment = separateBatiment?.production?.filter(
    (obj) => !obj.isEmpty
  );
  return (
    <>
      <div className="batiment-category">
        <DataProvider>
          <BatimentSelection BatimentIdent={fullBatiment} siteId={siteId} />
          <BatimentForm siteId={siteId} BatimentIdent={fullBatiment} />
        </DataProvider>
        {/* <LotCreation lotdata={batiments} /> */}
      </div>
    </>
  );
}

export default Batiment;
