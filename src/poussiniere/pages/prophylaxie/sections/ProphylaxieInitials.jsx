import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";

import {
  Button,
  Chip,
  CircularProgress,
  Link,
  Stack,
  Tooltip,
} from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";
import { Create, DeleteOutline, Publish } from "@mui/icons-material";
import ExcelDownloadButton from "../components/ExcelDownloadButton";
import InitialProphylaxi from "../components/InitialProphylaxi";
import { useEffect, useState } from "react";
import CreateProphylaxi from "./CreateProphylaxi";
import InputFileUpload from "../components/InputFileUpload";
let base_url = "https://farmdriver.savas.ma/api/";

export const ProphylaxieInitials = ({
  selectedLot,
  setRefresh,
  setSelectedFile,
  selectedFile,
  setSendFileMessage,
  reftching,
  setData,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(true);
  const handleDelete = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const accessToken = JSON.parse(localStorage.getItem("authTokens")).access;

      const response = await fetch(
        `${base_url}delete-prophylaxis-parent/?id=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        setLoading(false);
        setOpen(false);
        setRefresh(new Date().getMilliseconds());
      } else {
        setError(
          "Veuillez réessayer, une erreur est survenue lors de la suppression de ce programme."
        );
      }
    } catch (err) {
      setError(
        "Veuillez réessayer, une erreur est survenue lors de la suppression de ce programme."
      );
      console.error("Error in Delete Lot:", err);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
        setError(false);
      }, 3500);
    }
  };
  useEffect(() => {
    setOpen(false);
  }, [selectedLot]);
  return (
    <Box
      sx={{
        px: 1,
      }}
    >
      <Divider />

      <Table>
        <TableBody>
          {selectedLot.prophylaxis ? (
            <TableRow
              sx={{
                backgroundColor: "#e3f0d3",
              }}
            >
              <TableCell
                sx={{
                  paddingY: 1,
                }}
              >
                <Typography variant="subtitle2">
                  {selectedLot?.prophylaxis?.name}
                </Typography>
              </TableCell>

              <TableCell
                sx={{
                  paddingY: 1,
                }}
              >
                {selectedLot?.prophylaxis?.doctor}
              </TableCell>
              <TableCell
                sx={{
                  paddingY: 1,
                }}
              >
                {selectedLot?.prophylaxis?.date}
              </TableCell>
              <TableCell
                sx={{
                  paddingY: 1,
                }}
                align="right"
              >
                <Stack
                  flexDirection="row"
                  gap={2}
                  justifyContent="end"
                  alignItems="center"
                >
                  <Button
                    color="info"
                    variant="contained"
                    size="small"
                    startIcon={<SyncIcon />}
                    onClick={() => reftching(selectedLot?.id)}
                  >
                    Afficher
                  </Button>
                  <CreateProphylaxi
                    lotId={selectedLot?.id}
                    reftching={reftching}
                    setData={setData}
                  />
                  <InputFileUpload
                    setSelectedFile={setSelectedFile}
                    selectedFile={selectedFile}
                    lotId={selectedLot?.id}
                    setSendFileMessage={setSendFileMessage}
                    reftching={reftching}
                  />

                  <ExcelDownloadButton />

                  <Tooltip title="Supprimer" placement="top">
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => setOpen(true)}
                      sx={{
                        backgroundColor: "#ffc3d4",
                      }}
                      disabled={open}
                    >
                      <DeleteOutline />{" "}
                    </IconButton>
                  </Tooltip>
                  {open && (
                    <Stack
                      flexDirection="row"
                      gap={1}
                      border={1}
                      p={0.5}
                      borderRadius={1}
                      borderColor="#333"
                    >
                      <LoadingButton
                        loading={loading}
                        color="error"
                        variant="outlined"
                        onClick={() =>
                          handleDelete(selectedLot?.prophylaxis?.id)
                        }
                        loadingIndicator="Suppression…"
                      >
                        <span>Supprimer</span>
                      </LoadingButton>

                      <Button
                        color="error"
                        onClick={() => setOpen(false)}
                        variant="contained"
                        size="small"
                      >
                        Annuller
                      </Button>
                    </Stack>
                  )}
                </Stack>
              </TableCell>
            </TableRow>
          ) : (
            <TableRow
              sx={{
                backgroundColor: "#c8e4fb",
              }}
            >
              <TableCell
                sx={{
                  paddingY: 1,
                }}
              >
                <Typography variant="subtitle2">
                  Déclarer un Nouveau programme de prophylaxie
                </Typography>
              </TableCell>

              <TableCell
                sx={{
                  paddingY: 1,
                }}
                align="right"
              >
                <Stack
                  flexDirection="row"
                  gap={2}
                  justifyContent="end"
                  alignItems="center"
                >
                  <InitialProphylaxi
                    id={selectedLot.id}
                    setRefresh={setRefresh}
                  />
                </Stack>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  );
};
