import React from "react";
import Form from "./Form";

function Production({ data }) {
  // Use the filter() method to create a new array containing only objects with isEmpty: true
  const fullBatiment = data?.filter((obj) => !obj.isEmpty);

  // Now, 'fullBatiment' contains only the objects with isEmpty: true
  return (
    <div className="production">
      <h1>production</h1>
      <Form productionData={fullBatiment} />
    </div>
  );
}

export default Production;
