import {
  Box,
  Dialog,
  DialogContent,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  SvgIcon,
  Switch,
} from "@mui/material";
import React, { forwardRef, useState } from "react";
import GlobalChart from "./charts/GlobalChart";
import { Close } from "@mui/icons-material";
import Slide from "@mui/material/Slide";

const params = [
  { id: 0, label: "Ponte (%)" },
  { id: 1, label: "	∑ NOPPD" },
  { id: 2, label: "PMO (g)" },
  { id: 3, label: "Blancs" },
  { id: 4, label: "Declassés" },
];
const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh",
  boxShadow: 24,
  p: 1,
  zIndex: 10000,
  pb: 4,
};

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProdContainer = ({ data, onClose, open }) => {
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
          <GlobalChart data={data} param={param} />
        </DialogContent>
      </Dialog>
    </>
  );
  return (
    <Box sx={style} className="confirm-modal  modal">
      <Stack
        flexDirection={"row"}
        justifyContent={"end"}
        gap={2}
        alignItems={"center"}
      >
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Sélectionnez un Paramétre
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={param}
            label="Sélectionnez un Courbe"
            onChange={handleChange}
          >
            {params?.map((param) => (
              <MenuItem key={param.id} value={param.id}>
                {param.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <IconButton color="error" onClick={onClose}>
          <SvgIcon>
            <Close />
          </SvgIcon>
        </IconButton>
      </Stack>
      <GlobalChart data={data} param={param} />
    </Box>
  );
};

export default ProdContainer;
