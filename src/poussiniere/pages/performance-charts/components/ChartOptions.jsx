import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export default function ChartOptions({
  checkboxItems,
  setPersonName,
  personName,
}) {
  const [checkedItems, setCheckedItems] = useState({});
  const handleCheckboxChange = (itemId) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [itemId]: !prevCheckedItems[itemId],
    }));
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px 10px",
        width: "100%",
      }}
    >
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">
          Sélectionnez une courbe
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          sx={{
            width: "fit-content",
            minWidth: "100%",
          }}
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Select courbe" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {Object.keys(checkboxItems).map((itemName) => (
            <MenuItem key={itemName} value={itemName}>
              <Checkbox
                checked={personName.indexOf(itemName) > -1}
                onChange={() => handleCheckboxChange(itemName)}
              />
              <ListItemText primary={checkboxItems[itemName].name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="outlined"
        onClick={() => {
          setPersonName([]);
        }}
      >
        réinitialiser
      </Button>
    </div>
  );
}
