import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLotId, getMsgContent } from "../../slices/LeftBar";
let base_url = "https://farmdriver.savas.ma/api/";
import "./style.css";
import UseFetchData from "../../hooks/UseFetchData";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { getRefreshData, getRenderData } from "../../slices/SiteData";
import { getBatimentName } from "../../slices/SiteData";
import SelectedComponents from "./components/SelectedComponents";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Loader from "../../components/loader/Loader";
import { ArrowDownward } from "@mui/icons-material";
import { BsEye } from "react-icons/bs";
function Header({ dataLoading, setIsReform }) {
  const dispatch = useDispatch();
  const [lotId, setLotId] = useState("");
  const [siteId, setSiteId] = useState("");
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(true);
  const lotIdentificationApiUrl = useMemo(
    () => `${base_url}get-lot-identification/?lotId=${lotId}`,
    [base_url, lotId]
  );
  const {
    data: lotIdentificationData,
    loading: lotIdentificationLoading,
    error: lotIdentificationError,
  } = UseFetchData(lotIdentificationApiUrl, "GET");

  dispatch(getMsgContent(lotIdentificationData?.msg?.content));

  const lotTitlesApiUrl = useMemo(
    () => `${base_url}get-lots-titles/?site=${siteId}`,
    [base_url, siteId]
  );
  const {
    data: lotTitlesData,
    loading: lotTitlesLoading,
    error: lotTitlesError,
  } = UseFetchData(lotTitlesApiUrl, "GET");

  const prodLot = lotTitlesData?.filter((lot) => lot.type == "production");

  if (lotIdentificationError || lotTitlesError) {
    return (
      <div
        className="modification-table-header"
        style={{ paddingBottom: "5px" }}
      >
        <Skeleton variant="rounded" width="100%" height={70} animation="wave" />
      </div>
    );
  }

  if (!lotIdentificationData || !prodLot) {
    return (
      <div
        className="modification-table-header"
        style={{ paddingBottom: "5px" }}
      >
        <Skeleton variant="rounded" width="100%" height={70} animation="wave" />
      </div>
    );
  }
  return (
    <Card sx={{ my: 1 }}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<BsEye />}
          aria-controls="panel1-content"
          id="panel1-header"
        ></AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item container spacing={1} xs={12} color={"success"}>
              <Grid item xs={12} md={6} lg={3}>
                <Alert
                  sx={{
                    py: 0,
                  }}
                  severity="info"
                  icon={false}
                >
                  <Stack flexDirection={"row"} alignItems={"end"}>
                    <Typography variant="caption" color="text.secondary">
                      Site :
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={"bold"}
                      color="error"
                    >
                      {lotTitlesLoading
                        ? "..."
                        : lotIdentificationData?.site_name
                        ? lotIdentificationData?.site_name
                        : "--"}
                    </Typography>
                  </Stack>
                  <Stack flexDirection={"row"} alignItems={"end"}>
                    <Typography variant="caption" color="text.secondary">
                      Bâtiment :
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={"bold"}
                      color="error"
                    >
                      {lotTitlesLoading
                        ? "..."
                        : lotIdentificationData?.batiment
                        ? lotIdentificationData?.batiment
                        : "--"}
                    </Typography>
                  </Stack>
                </Alert>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Alert
                  sx={{
                    py: 0,
                  }}
                  severity="info"
                  icon={false}
                >
                  <Stack flexDirection={"row"} alignItems={"end"}>
                    <Typography variant="caption" color="text.secondary">
                      Souche :
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={"bold"}
                      color="error"
                    >
                      {lotTitlesLoading
                        ? "..."
                        : lotIdentificationData?.souche
                        ? lotIdentificationData?.souche
                        : "--"}
                    </Typography>
                  </Stack>
                  <Stack flexDirection={"row"} alignItems={"end"}>
                    <Typography variant="caption" color="text.secondary">
                      Date naissance :
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={"bold"}
                      color="error"
                    >
                      {lotTitlesLoading
                        ? "..."
                        : lotIdentificationData?.birth_date
                        ? lotIdentificationData?.birth_date
                        : "--"}
                    </Typography>
                  </Stack>
                </Alert>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Alert
                  sx={{
                    py: 0,
                  }}
                  severity="info"
                  icon={false}
                >
                  <Stack flexDirection={"row"} alignItems={"end"}>
                    <Typography variant="caption" color="text.secondary">
                      Age Actuel :
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={"bold"}
                      color="error"
                    >
                      {lotTitlesLoading
                        ? "..."
                        : lotIdentificationData?.curr_age
                        ? lotIdentificationData?.curr_age
                        : "--"}
                    </Typography>
                  </Stack>
                  <Stack flexDirection={"row"} alignItems={"end"}>
                    <Typography variant="caption" color="text.secondary">
                      Effectif Départ :
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={"bold"}
                      color="error"
                    >
                      {lotTitlesLoading
                        ? "..."
                        : lotIdentificationData?.effectifD
                        ? lotIdentificationData?.effectifD
                        : "--"}
                    </Typography>
                  </Stack>
                </Alert>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Alert
                  sx={{
                    py: 0,
                  }}
                  severity="info"
                  icon={false}
                >
                  <Stack flexDirection={"row"} alignItems={"end"}>
                    <Typography variant="caption" color="text.secondary">
                      Transfert :
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={"bold"}
                      color="error"
                    >
                      {lotTitlesLoading
                        ? "..."
                        : lotIdentificationData?.birth_mep
                        ? lotIdentificationData?.birth_mep
                        : "--"}
                    </Typography>
                  </Stack>
                  <Stack flexDirection={"row"} alignItems={"end"}>
                    <Typography variant="caption" color="text.secondary">
                      Code lot :
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={"bold"}
                      color="error"
                    >
                      {lotTitlesLoading
                        ? "..."
                        : lotIdentificationData?.lot
                        ? lotIdentificationData?.lot
                        : "--"}
                    </Typography>
                  </Stack>
                </Alert>
              </Grid>
            </Grid>
            <Grid item container spacing={2} alignItems="flex-end" xs={12}>
              <Grid item lg={5} md={6} xs={12}>
                <SelectedComponents
                  lotTitlesLoading={lotTitlesLoading}
                  lotTitlesData={prodLot}
                  setLotId={setLotId}
                  lotId={lotId}
                  setSiteId={setSiteId}
                  siteId={siteId}
                  dataLoading={dataLoading}
                  setIsReform={setIsReform}
                />
              </Grid>
              <Grid item lg={3} md={3} xs={12}>
                <Button
                  variant="contained"
                  disabled={!lotId}
                  onClick={() => {
                    dispatch(getLotId(lotId));
                    dispatch(getRefreshData(new Date().toString()));
                  }}
                >
                  Afficher les donnees
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {dataLoading && <LinearProgress />}
    </Card>
  );
}

export default Header;
