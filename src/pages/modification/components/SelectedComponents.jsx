import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { getRenderData } from "../../../slices/SiteData";

export default function SelectedComponents({
  lotTitlesLoading,
  lotTitlesData,
  setLotId,
  lotId,
}) {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setLotId(event.target.value);
    dispatch(getRenderData(new Date().toString()));
  };

  return (
    <div style={{ display: "flex" }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Sélectionnez un LOT
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
                  {title.code}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </div>
  );
}
