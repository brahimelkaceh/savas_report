import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import ChartOptions from "./ChartOptions";
import api from "../../../../api/api";
import toast, { Toaster } from "react-hot-toast";

const Header = ({
  setLotId,
  lotId,
  setTitle,
  checkboxItems,
  setPersonName,
  personName,
}) => {
  const [sites, setSites] = useState([]);
  const [siteId, setSiteId] = useState("");
  const [lots, setLots] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPoussLot = async () => {
    try {
      setLoading(true);
      const result = await api.getPoussSites();
      if (result.status === 200) {
        setSites(result?.data);
      } else {
        toast.error("Échec de récupération les sites; Veuillez réessayer.");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Échec de récupération les sites; Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPoussLot();
  }, []);

  const fetchLotData = async (id) => {
    try {
      if (!id) {
        return;
      }
      setLoading(true);
      const result = await api.getPoussLotSelect(id);
      if (result.status === 200) {
        setLots(result.data);
      } else {
        toast.error("Échec de récupération les lots; Veuillez réessayer.");
      }
    } catch (error) {
      toast.error("Échec de récupération les lots; Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchLotData(siteId);
  }, [siteId]);

  const filterTitles = (id) => {
    const filterTitle = lots.filter((title) => title.id === id);
    setTitle(filterTitle[0].code);
  };
  const handleChange = (event) => {
    setLotId(event.target.value);
    filterTitles(event.target.value);
  };

  return (
    <Grid container spacing={1} mb={1}>
      <Toaster gutter={8} position="bottom-right" reverseOrder={false} />
      <Grid item xs={6} lg={3}>
        <FormControl variant="outlined" fullWidth controled={"true"}>
          <InputLabel id="demo-simple-select-standard-label">
            Sélectionnez un Site
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={siteId ?? ""}
            disabled={loading}
            onChange={(e) => {
              setSiteId(e.target.value);
            }}
            label="Age"
          >
            <MenuItem value=""></MenuItem>
            {sites &&
              sites?.map((site) => {
                return (
                  <MenuItem key={site.id} value={site.id}>
                    {site.name}
                  </MenuItem>
                );
              })}{" "}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} lg={3}>
        <FormControl variant="outlined" fullWidth controled={"true"}>
          <InputLabel id="demo-simple-select-standard-label">
            Sélectionnez un LOT
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={lotId ?? ""}
            disabled={loading}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value=""></MenuItem>
            {lots &&
              lots?.map((title) => {
                return (
                  <MenuItem key={title.id} value={title.id}>
                    {title.code}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={6}>
        <ChartOptions
          checkboxItems={checkboxItems}
          personName={personName}
          setPersonName={setPersonName}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
