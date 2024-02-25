import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useMemo, useEffect, useState, forwardRef } from "react";
import Rating from "@mui/material/Rating";
import EggIcon from "@mui/icons-material/Egg";

import UseFetchData from "../../../hooks/UseFetchData";
import Loader from "../../../components/loader/Loader";
import egg70 from "../../../assets/70.png";
import egg80 from "../../../assets/80.png";
import egg90 from "../../../assets/90.png";
import egg100 from "../../../assets/100.png";
import egg110 from "../../../assets/110.png";
import noimg from "../../../assets/no-img.png";
import { useSelector } from "react-redux";
import {
  CircularProgress,
  Dialog,
  IconButton,
  LinearProgress,
  Slide,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
let base_url = "https://farmdriver.savas.ma/api/";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "50%",
  boxShadow: 24,
  p: 3,
  borderTopColor: "#004e86",
};
const TableDetailModal = ({ open, setOpen, age, lotId }) => {
  const batimentName = useSelector((state) => state.getSiteData.batimentName);
  console.log(batimentName);
  const tableApiUrl = useMemo(
    () => `${base_url}get-table-row-details/?lotId=${lotId}&age=${age}`,
    [base_url, lotId, age]
  );

  const { data, loading } = UseFetchData(tableApiUrl, "GET", lotId);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      maxWidth={"xl"}
      p={1}
    >
      <Stack
        alignItems={"center"}
        flexDirection={"row"}
        justifyContent={loading ? "space-between" : "end"}
        pl={1}
      >
        {loading && <CircularProgress size={20} />}
        <IconButton color="error" onClick={handleClose}>
          <SvgIcon>
            <Close></Close>
          </SvgIcon>
        </IconButton>
      </Stack>
      <Table>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#ffc000",
            }}
          >
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Jour</TableCell>
            <TableCell align="center">Coloration</TableCell>
            <TableCell align="center">Coquille</TableCell>
            <TableCell align="center">Double jaune</TableCell>
            <TableCell align="center">blancs</TableCell>
            <TableCell align="center">Cassé</TableCell>
            <TableCell align="center">Observation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((d, i) => {
            return (
              <TableRow hover key={i}>
                <TableCell align="center">{d.date}</TableCell>
                <TableCell align="center">{d.day}</TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={0} alignItems={"center"}>
                    <Box
                      component="span"
                      sx={{
                        "& img": {
                          height: 50,
                        },
                      }}
                    >
                      <img
                        alt="egge"
                        src={
                          d.coloration == 70
                            ? egg70
                            : d.coloration == 80
                            ? egg80
                            : d.coloration == 90
                            ? egg90
                            : d.coloration == 100
                            ? egg100
                            : d.coloration == 110
                            ? egg110
                            : noimg
                        }
                      />
                    </Box>
                    <Typography variant="subtitle1">{d.coloration}</Typography>
                  </Stack>
                </TableCell>
                <TableCell align="center">{d.coquille ?? "--"}</TableCell>
                <TableCell align="center">{d.dj}</TableCell>
                <TableCell align="center">{d.blancs}</TableCell>
                <TableCell align="center">{d.casse}</TableCell>
                <TableCell align="center">
                  {d.observation != "NULL" ? d.observation : "--"}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Dialog>
  );
};

export default TableDetailModal;
