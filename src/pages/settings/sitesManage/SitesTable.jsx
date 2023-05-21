import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
function SitesTable() {
  return (
    <div className="site-table slit-in-horizontal">
      <table className="">
        <thead className="fixed-header">
          <tr>
            <th>Sites</th>
            <th>Bâtiments [Production]</th>
            <th>Nombre</th>
            <th>Bâtiments [Poussinier]</th>
            <th>Nombre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>KAMOUNI</td>
            <td>K</td>
            <td>4</td>
            <td>PK</td>
            <td>2</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>MOUGHANE</td>
            <td>M</td>
            <td>9</td>
            <td>PM</td>
            <td>3</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>SIDI HMIDA</td>
            <td>B</td>
            <td>5</td>
            <td>--</td>
            <td>0</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>TIFLET</td>
            <td>T</td>
            <td>8</td>
            <td>PT</td>
            <td>3</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>KAMOUNI</td>
            <td>K</td>
            <td>4</td>
            <td>PK</td>
            <td>2</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SitesTable;
