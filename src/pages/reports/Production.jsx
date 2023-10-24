import React from "react";
import Form from "./Form";

function Production({ data }) {
  // Use the filter() method to create a new array containing only objects with isEmpty: true
  const fullBatiment = data?.filter((obj) => !obj.isEmpty);

<<<<<<< HEAD
  return (
    <div className="production">
=======
  // Now, 'fullBatiment' contains only the objects with isEmpty: true
  return (
    <div className="production">
      <h1>production</h1>
>>>>>>> 844ea6db67c5fa449f99a6a16612e87e3513feda
      <Form productionData={fullBatiment} />
    </div>
  );
}

export default Production;
