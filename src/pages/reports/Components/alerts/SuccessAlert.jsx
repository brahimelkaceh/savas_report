import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function SuccessAlert() {
  return (
    <Stack
      sx={{ width: "20%", position: "absolute", zIndex: 1000, bottom: 50 }}
      spacing={2}
    >
      <Alert variant="filled" severity="success">
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
}
