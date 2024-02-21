import {
  Box,
  Dialog,
  DialogContent,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Slide,
  Stack,
  SvgIcon,
} from "@mui/material";
import React, { forwardRef, useState } from "react";
import HomogPcChart from "./charts/HomogPcChart";
import { Close } from "@mui/icons-material";
const params = [
  { id: 0, label: "Homogénéité (%)" },
  { id: 1, label: "Poids corporel (g)" },
];

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const HomogPcContainer = ({ data, onClose, open }) => {
  const [param, setParam] = useState(0);

  const handleChange = (event) => {
    setParam(event.target.value);
  };
  return (
    <>
      <Dialog
        fullWidth={true}
        maxWidth={"xl"}
        open={open}
        onClose={onClose}
        fullScreen
        TransitionComponent={Transition}
        transitionDuration={350}
        keepMounted={true}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          gap={2}
          alignItems={"center"}
          m={1}
        >
          <FormControl
            fullWidth
            xs={{
              m: 1,
              maxWidth: "50%",
            }}
          >
            <InputLabel id="demo-simple-select-label">
              Sélectionnez un Paramétre
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={param}
              label="Sélectionnez un Courbe"
              onChange={handleChange}
              autoWidth
            >
              {params?.map((param) => (
                <MenuItem key={param.id} value={param.id}>
                  {param.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box width={"100%"}></Box>
          <IconButton color="error" onClick={onClose}>
            <SvgIcon>
              <Close />
            </SvgIcon>
          </IconButton>
        </Stack>
        <DialogContent>
          <HomogPcChart data={data} param={param} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HomogPcContainer;
