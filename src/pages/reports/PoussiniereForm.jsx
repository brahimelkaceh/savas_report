import React from "react";

function PoussiniereForm() {
  return (
    <form className="form">
      <div className="group">
        <input
          //   id="mort"
          //   name="mort"
          type="number"
          className="input"
          placeholder=""
          //   value={formik.values.mort}
          //   onChange={formik.handleChange}
        />
        <label htmlFor="mort">Mortalité</label>
      </div>
    </form>
  );
}

export default PoussiniereForm;
