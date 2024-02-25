import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { getRenderData } from "../../../slices/SiteData";
import UseFetchData from "../../../hooks/UseFetchData";
import { getLotId } from "../../../slices/LeftBar";
import { Box, CircularProgress, Grid } from "@mui/material";
let base_url = "https://farmdriver.savas.ma/api/";

export default function SelectedComponents({
  lotTitlesLoading,
  lotTitlesData,
  dataLoading,
  setLotId,
  lotId,
  setSiteId,
  siteId,
  setIsReform,
}) {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setLotId(event.target.value);
    const currentLot = lotTitlesData?.filter(
      (lot) => lot.id === event.target.value
    );
    setIsReform(currentLot[0]?.isReforming);
    dispatch(getRenderData(new Date().toString()));
  };
  const sitesTitlesApiUrl = React.useMemo(
    () => `${base_url}get-sites-titles/`,
    [base_url]
  );
  const { data, loading, error } = UseFetchData(sitesTitlesApiUrl, "GET");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-standard-label">
            {loading ? "chargement..." : "Sélectionnez un Site"}
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={siteId}
            disabled={loading}
            onChange={(e) => {
              setSiteId(e.target.value);
            }}
            label="Age"
          >
            <MenuItem value=""></MenuItem>
            {data &&
              data?.map((site) => {
                return (
                  <MenuItem key={site.id} value={site.id}>
                    {site.name}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-standard-label">
            {lotTitlesLoading ? "chargement..." : "Sélectionnez un LOT"}
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={lotId}
            disabled={lotTitlesLoading}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value=""></MenuItem>
            {lotTitlesData &&
              lotTitlesData?.map((title) => {
                return (
                  <MenuItem key={title.id} value={title.id}>
                    {title.batiment} ({title.code})
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
  return (
    <div style={{ display: "flex" }}>
      {dataLoading && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CircularProgress fourColor size={25} />
        </Box>
      )}
    </div>
  );
}
