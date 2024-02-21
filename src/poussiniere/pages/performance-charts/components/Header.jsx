import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useMemo, useState } from "react";
import UseFetchData from "../../../../hooks/UseFetchData";
import ChartOptions from "./ChartOptions";

let base_url = "https://farmdriver.savas.ma/api/";

const Header = ({
  setLotId,
  lotId,
  setTitle,
  checkboxItems,
  setPersonName,
  personName,
}) => {
  const [id, setId] = useState("");
  const lotTitlesApiUrl = useMemo(
    () => `${base_url}get-pouss-lots/?site=${id}`,
    [base_url, id]
  );
  const sitesTitlesApiUrl = useMemo(
    () => `${base_url}get-pouss-sites/`,
    [base_url]
  );
  const {
    data: sitesData,
    loading: sitesLoading,
    error: sitesErros,
  } = UseFetchData(sitesTitlesApiUrl, "GET");

  const { data, loading, error } = UseFetchData(lotTitlesApiUrl, "GET");
  const filterTitles = (id) => {
    const filterTitle = data.filter((title) => title.id === id);
    setTitle(filterTitle[0].code);
  };
  const handleChange = (event) => {
    setLotId(event.target.value);
    filterTitles(event.target.value);
  };

  return (
    <div className="chart-header-container">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }} controled>
        <InputLabel id="demo-simple-select-standard-label">
          Sélectionnez un Site
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={id}
          disabled={sitesLoading}
          onChange={(e) => {
            setId(e.target.value);
          }}
          label="Age"
        >
          <MenuItem value=""></MenuItem>
          {sitesData &&
            sitesData?.map((site) => {
              return (
                <MenuItem key={site.id} value={site.id}>
                  {site.name}
                </MenuItem>
              );
            })}{" "}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }} controled>
        <InputLabel id="demo-simple-select-standard-label">
          Sélectionnez un LOT
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={lotId}
          disabled={loading}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value=""></MenuItem>
          {data &&
            data?.map((title) => {
              return (
                <MenuItem key={title.id} value={title.id}>
                  {title.code}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
      <ChartOptions
        checkboxItems={checkboxItems}
        personName={personName}
        setPersonName={setPersonName}
      />
    </div>
  );
};

export default Header;
