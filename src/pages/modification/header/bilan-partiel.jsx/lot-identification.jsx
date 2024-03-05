import { Card, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const LotIdentification = ({ data }) => {
  return (
    <Grid container spacing={3.5}>
      <Grid item xs={12}>
        <Typography color={"Highlight"} variant="h6">
          Identification de lot :
        </Typography>
        <Divider />
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          ".css-10wpov9-MuiTypography-root": {
            lineHeight: "normal",
          },
        }}
      >
        <Card
          sx={{
            p: 1,
            pb: 1.8,
          }}
        >
          <Grid container spacing={2} justifyContent={"end"}>
            <Grid item lg={4} xs={6}>
              <Typography variant="subtitle1" fontWeight={"bold"}>
                {data?.souche}
              </Typography>
            </Grid>
            <Grid item lg={4} xs={6}>
              <Stack flexDirection={"row"} gap={1} alignItems={"end"}>
                <Typography color={"textSecondary"} variant="caption">
                  Semaine:
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={"bold"}
                  color="primary"
                >
                  {data?.age}
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={4} xs={6}>
              <Stack flexDirection={"row"} gap={1} alignItems={"end"}>
                <Typography color={"textSecondary"} variant="caption">
                  Né le:
                </Typography>
                <Typography variant="subtitle1"> {data?.birth_date}</Typography>
              </Stack>
            </Grid>
            <Grid item lg={4} xs={6}>
              <Stack flexDirection={"row"} gap={1} alignItems={"end"}>
                <Typography color={"textSecondary"} variant="caption">
                  Effectif départ:
                </Typography>
                <Typography variant="subtitle1">
                  {data?.eff_depart?.replaceAll(" ", ",")}
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={4} xs={6}>
              <Stack flexDirection={"row"} gap={1} alignItems={"end"}>
                <Typography color={"textSecondary"} variant="caption">
                  Mortalité:
                </Typography>
                <Typography variant="subtitle1">
                  {data?.mort_nbr?.toLocaleString()}
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={4} xs={6}>
              <Stack flexDirection={"row"} gap={1} alignItems={"end"}>
                <Typography color={"textSecondary"} variant="caption">
                  Effectif présent:
                </Typography>
                <Typography variant="subtitle1">
                  {data?.eff_present?.replaceAll(" ", ",")}
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={4} xs={6}>
              <Stack flexDirection={"row"} gap={1} alignItems={"end"}>
                <Typography color={"textSecondary"} variant="caption">
                  Production totale:
                </Typography>
                <Typography variant="subtitle1">
                  {data?.production?.toLocaleString()}
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={4} xs={6}>
              <Stack flexDirection={"row"} gap={1} alignItems={"end"}>
                <Typography color={"textSecondary"} variant="caption">
                  Déclassés:
                </Typography>
                <Typography variant="subtitle1">
                  {data?.declassed?.toLocaleString()}
                </Typography>
                <Typography color={"info"} variant="caption">
                  ({data?.declassed_prsnt}%)
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={4} xs={6}>
              <Stack flexDirection={"row"} gap={1} alignItems={"end"}>
                <Typography color={"textSecondary"} variant="caption">
                  Consommation:
                </Typography>
                <Typography variant="subtitle1">
                  {data?.alimentDist?.toLocaleString()}T
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LotIdentification;
