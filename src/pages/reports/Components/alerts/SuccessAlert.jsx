import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function SuccessAlert() {
  return (
    <Stack
      sx={{ width: "28%", position: "absolute", zIndex: 1000, bottom: 50 }}
      spacing={2}
    >
      <Alert variant="filled" severity="success">
        Les données ont été enregistrées avec succès !
      </Alert>
    </Stack>
  );
}
