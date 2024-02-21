import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./style.css";
import { useSelector } from "react-redux";

function createData(name, value) {
  return { name, value };
}

export default function DataTable(data) {
  let batimentName = useSelector((state) => state.getSiteData.batimentName);
  const rows = [
    createData("Bâtiment", batimentName || "--"),
    createData("Mortalité (sujet)", data?.data?.mort || "--"),
    createData("Triage (sujet)", data?.data?.hensEliminated || "--"),
    createData("Homogénéité (%)", data?.data?.homog || "--"),
    createData("Aliment consommé (Kg)", data?.data?.alimentDist || "--"),
    createData("Référence d'aliment", data?.data?.formule || "--"),
    createData("Eau consommée (Litre)", data?.data?.eauDist || "--"),
    createData("Normal", data?.data?.prod_normal || "--"),
    createData("Double jaune", data?.data?.prod_dj || "--"),
    createData("Blanc", data?.data?.prod_blanc || "--"),
    createData("Cassé", data?.data?.prod_casse || "--"),
    createData("feles", data?.data?.prod_feles || "--"),
    createData("Eliminé", data?.data?.prod_elimne || "--"),
    createData("PMO", data?.data?.pmo || "--"),
    createData("Temperature int min", data?.data?.temperatureMin || "--"),
    createData("Temperature int max", data?.data?.temperatureMax || "--"),
    createData("Temperature ext min", data?.data?.temperatureMinExt || "--"),
    createData("Temperature ext max", data?.data?.temperatureMaxExt || "--"),
    createData("Light On", data?.data?.lightOn || "--:--"),
    createData("Light Off", data?.data?.lightOff || "--:--"),
    createData("Light Durration", data?.data?.lightDuration || "--:--"),
    createData("Flash On", data?.data?.flashOn || "--:--"),
    createData("Flash Off", data?.data?.flashOff || "--:--"),
    createData("Flash Durration", data?.data?.flashDuration || "--:--"),
    createData("Type de Intensité", data?.data?.intensIsLux ? "lux" : "%"),
    createData("Intensité", data?.data?.intensite || "--"),
    createData("Qualité de Coquille", data?.data?.qty_shell || "--"),
    createData("Coloration", data?.data?.coloration || "--"),
  ];
  return (
    <TableContainer component={Paper} style={{ height: "90%" }}>
      <Table sx={{ minWidth: 50 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Paramétre</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
