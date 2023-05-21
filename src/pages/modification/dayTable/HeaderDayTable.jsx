import React from "react";

function HeaderDayTable() {
  return (
    <thead className="fixed-header">
      <tr>
        <th className="table-header" colSpan={3}>
          Agenda
        </th>
        <th className="table-header" colSpan={3}>
          Production
        </th>
      </tr>
      <tr>
        <th style={{ minWidth: "40px" }}>Date</th>
        <th style={{ minWidth: "40px" }}>Jour/Sem</th>
        <th style={{ minWidth: "40px" }}>Age</th>
      </tr>
    </thead>
  );
}

export default HeaderDayTable;
