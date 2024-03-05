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
import BilanPArtiel from "./header/bilan-partiel.jsx";
function Header({ dataLoading, setIsReform }) {
  const dispatch = useDispatch();
  const [lotId, setLotId] = useState("");
  const [siteId, setSiteId] = useState("");
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
    <Stack gap={1} sx={{ my: 1 }}>
      <Card>
        <Grid
          item
          container
          spacing={2}
          p={1}
          mb={2}
          alignItems="flex-end"
          xs={12}
        >
          <Grid item md={6} xs={12}>
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
          <Grid item md={6} xs={12} container justifyContent={"end"}>
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
      </Card>
      {dataLoading && <LinearProgress />}
      <BilanPArtiel lotId={lotId} />
    </Stack>
  );
}

export default Header;
