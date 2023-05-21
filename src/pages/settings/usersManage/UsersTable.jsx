import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar } from "@mui/material";
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
function UsersTable() {
  return (
    <div className="user-table slit-in-horizontal">
      <table className="">
        <thead className="fixed-header">
          <tr>
            <th>Profile</th>
            <th>Identifiant</th>
            <th>E-mail</th>
            <th>Télephone</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Site</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Avatar {...stringAvatar("Jenny Wilson")} />
            </td>
            <td>Jenny Wilson</td>
            <td>name@email.com</td>
            <td>06 75 55 65 33</td>
            <td>Carol</td>
            <td>Manning</td>
            <td>KAMOUNI</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>
              <Avatar {...stringAvatar("Brooklyn Simmons")} />
            </td>
            <td>Brooklyn Simmons</td>
            <td>name@email.com</td>
            <td>06 75 55 65 33</td>
            <td>Carol</td>
            <td>Manning</td>
            <td>KAMOUNI</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>
              <Avatar {...stringAvatar("Wade Warren")} />
            </td>
            <td>Wade Warren</td>
            <td>name@email.com</td>
            <td>06 75 55 65 33</td>
            <td>Carol</td>
            <td>Manning</td>
            <td>KAMOUNI</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>
              <Avatar {...stringAvatar("Esther Howard")} />
            </td>
            <td>Esther Howard</td>
            <td>name@email.com</td>
            <td>06 75 55 65 33</td>
            <td>Carol</td>
            <td>Manning</td>
            <td>KAMOUNI</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>
              <Avatar {...stringAvatar("Carol Manning")} />
            </td>
            <td>Carol Manning</td>
            <td>name@email.com</td>
            <td>06 75 55 65 33</td>
            <td>Carol</td>
            <td>Manning</td>
            <td>KAMOUNI</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>
              <Avatar {...stringAvatar("Jenny Wilson")} />
            </td>
            <td>Jenny Wilson</td>
            <td>name@email.com</td>
            <td>06 75 55 65 33</td>
            <td>Carol</td>
            <td>Manning</td>
            <td>KAMOUNI</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>
              <Avatar {...stringAvatar("Brooklyn Simmons")} />
            </td>
            <td>Brooklyn Simmons</td>
            <td>name@email.com</td>
            <td>06 75 55 65 33</td>
            <td>Carol</td>
            <td>Manning</td>
            <td>KAMOUNI</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>
              <Avatar {...stringAvatar("Wade Warren")} />
            </td>
            <td>Wade Warren</td>
            <td>name@email.com</td>
            <td>06 75 55 65 33</td>
            <td>Carol</td>
            <td>Manning</td>
            <td>KAMOUNI</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>
              <Avatar {...stringAvatar("Esther Howard")} />
            </td>
            <td>Esther Howard</td>
            <td>name@email.com</td>
            <td>06 75 55 65 33</td>
            <td>Carol</td>
            <td>Manning</td>
            <td>KAMOUNI</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>
              <Avatar {...stringAvatar("Carol Manning")} />
            </td>
            <td>Carol Manning</td>
            <td>name@email.com</td>
            <td>06 75 55 65 33</td>
            <td>Carol</td>
            <td>Manning</td>
            <td>KAMOUNI</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>
              <Avatar {...stringAvatar("Jenny Wilson")} />
            </td>
            <td>Jenny Wilson</td>
            <td>name@email.com</td>
            <td>06 75 55 65 33</td>
            <td>Carol</td>
            <td>Manning</td>
            <td>KAMOUNI</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>
              <Avatar {...stringAvatar("Brooklyn Simmons")} />
            </td>
            <td>Brooklyn Simmons</td>
            <td>name@email.com</td>
            <td>06 75 55 65 33</td>
            <td>Carol</td>
            <td>Manning</td>
            <td>KAMOUNI</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>
              <Avatar {...stringAvatar("Wade Warren")} />
            </td>
            <td>Wade Warren</td>
            <td>name@email.com</td>
            <td>06 75 55 65 33</td>
            <td>Carol</td>
            <td>Manning</td>
            <td>KAMOUNI</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>
              <Avatar {...stringAvatar("Esther Howard")} />
            </td>
            <td>Esther Howard</td>
            <td>name@email.com</td>
            <td>06 75 55 65 33</td>
            <td>Carol</td>
            <td>Manning</td>
            <td>KAMOUNI</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc2626", cursor: "pointer" }}
              />
              <EditIcon style={{ color: "#fbbf24", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>
              <Avatar {...stringAvatar("Carol Manning")} />
            </td>
            <td>Carol Manning</td>
            <td>name@email.com</td>
            <td>06 75 55 65 33</td>
            <td>Carol</td>
            <td>Manning</td>
            <td>KAMOUNI</td>
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

export default UsersTable;
