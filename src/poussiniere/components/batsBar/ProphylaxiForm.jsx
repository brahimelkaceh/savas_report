import {
  Accordion,
  AccordionSummary,
  Alert,
  AlertTitle,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  ListItem,
  ListItemText,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ConfirmModal from "../../../pages/settings/modals/ConfirmModal";
import Loader from "../../../components/loader/Loader";
import ConfirmationModal from "../ui/ConfirmModal";
import { useDispatch } from "react-redux";
import { getRenderData } from "../../../slices/SiteData";
import SuccessAlert from "../../../components/alerts/SuccessAlert";
import { ExpandMore } from "@mui/icons-material";
import api from "../../../api/api";
import NewProphylaxis from "../forms/NewProphylaxis";

const ProphylaxiForm = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const ChangeProphylaxiStatus = async (data) => {
    setLoading(true);
    try {
      const response = await api.changeProphylaxiStatus(data);
      // Check if the request was successful (status code 2xx)
      if (response) {
        console.log("Prophylaxi Status changed successfully");
        setLoading(false);
        dispatch(getRenderData(new Date().toString()));
      } else {
        // Handle non-successful responses (status code other than 2xx)
        console.error(
          `Failed to change prophylaxi status. Status: ${response.status}`
        );
        setLoading(false);
      }
    } catch (error) {
      // Handle any other errors that may occur during the request
      console.error("An error occurred:", error);
      setLoading(false);
    }
  };
  return (
    <div
      className="batiment-form"
      style={{
        background: "none",
        border: "none",
      }}
    >
      {openModal && (
        <ConfirmationModal
          open={openModal}
          setOpen={setOpenModal}
          onSubmit={ChangeProphylaxiStatus}
          data={{ id: data?.id, status: data?.status }}
          message={"Êtes-vous sûr de vouloir envoyer ces données ?"}
        />
      )}
      <Stack
        flexDirection="row"
        width="100%"
        justifyContent={"end"}
        alignItems={"center"}
        gap={5}
        mr={0}
        mb={1}
      >
        <Chip
          size="small"
          color={
            data?.status == 1
              ? "success"
              : data?.status == 0
              ? "info"
              : "warning"
          }
          sx={{
            color: "#fff !important",
          }}
          label={
            data?.status == 1
              ? "Exécuté"
              : data?.status == 0
              ? "En Programme"
              : "En cours"
          }
        />
        <Button
          size="small"
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            setOpenModal(true);
          }}
        >
          {data?.status == 2 ? "Terminer" : "Commencer"}
        </Button>
      </Stack>
      <Accordion disabled={data?.status === 0}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            background: "#ffd180",
          }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "Bold" }}>
            Intervention : {data?.intervention}
          </Typography>
        </AccordionSummary>
        <Divider />
        <CardContent
          sx={{
            p: 1.5,
          }}
        >
          <Grid container spacing={1.5} mb={1}>
            <Grid item xs={6}>
              <Alert
                icon={false}
                severity="info"
                sx={{
                  py: 0,
                  px: 0.5,
                }}
              >
                Mode d'administration :
                <AlertTitle
                  sx={{
                    py: 0,
                    px: 0.5,
                    m: 0,
                  }}
                >
                  {" "}
                  {data?.mode_administration}
                </AlertTitle>
              </Alert>
            </Grid>
            <Grid item xs={6}>
              <Alert
                icon={false}
                severity="info"
                sx={{
                  py: 0,
                  px: 0.5,
                }}
              >
                Date :
                <AlertTitle
                  sx={{
                    py: 0,
                    px: 0.5,
                    m: 0,
                  }}
                >
                  {data?.date}
                </AlertTitle>
              </Alert>
            </Grid>
            <Grid item xs={6}>
              <Alert
                icon={false}
                severity="info"
                sx={{
                  py: 0,
                  px: 0.5,
                }}
              >
                Contrôles :
                <AlertTitle
                  sx={{
                    py: 0,
                    px: 0.5,
                    m: 0,
                  }}
                >
                  {data?.controles}
                </AlertTitle>
              </Alert>
            </Grid>
            <Grid item xs={6}>
              <Alert
                icon={false}
                severity="info"
                sx={{
                  py: 0,
                  px: 0.5,
                }}
              >
                Note :
                <AlertTitle
                  sx={{
                    py: 0,
                    px: 0.5,
                    m: 0,
                  }}
                >
                  {data?.note}
                </AlertTitle>
              </Alert>
            </Grid>
          </Grid>

          {data?.status == 2 && <NewProphylaxis data={data} />}
        </CardContent>
      </Accordion>
    </div>
  );
};

export default ProphylaxiForm;
