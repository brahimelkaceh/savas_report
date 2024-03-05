import {
  CaretDownOutlined,
  CaretUpOutlined,
  FallOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import {
  Card,
  Chip,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import SimpleBar from "simplebar-react";

const LastWeek = ({ data }) => {
  const theme = useTheme();

  const successSX = { color: theme.palette.success.main };
  const errorSX = { color: theme.palette.error.main };
  const infoSX = { color: theme.palette.info.main };
  return (
    <Grid container spacing={1.5}>
      <Grid item xs={12}>
        <Typography color={"Highlight"} variant="h6">
          Derniére semaine achevée:
        </Typography>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Card content={false}>
          <List
            aria-label="main mailbox folders"
            sx={{
              "& svg": {
                width: 32,
                my: -0.75,
                ml: -0.75,
                mr: 0.75,
              },
            }}
          >
            <ListItemButton
              sx={{
                cursor: "default",
              }}
              dense
            >
              <ListItemIcon>
                {data?.ponte?.isUp ? (
                  <CaretUpOutlined style={successSX} />
                ) : (
                  <CaretDownOutlined style={errorSX} />
                )}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={"space-between"}>
                    <Grid item justifyContent={"end"} xs={4}>
                      <span>Ponte</span>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={infoSX}>{data?.ponte?.reel}%</Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={data?.ponte?.isUp ? successSX : errorSX}>
                        {data?.ponte?.ecart}
                      </Typography>
                    </Grid>
                    <Grid container justifyContent={"end"} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.ponte?.isUp ? "success" : "error"}
                        icon={
                          data?.ponte?.isUp ? (
                            <RiseOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          ) : (
                            <FallOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          )
                        }
                        label={`${data?.ponte?.ecart_prsnt}%`}
                        sx={{ ml: 0, pl: 1 }}
                        size="small"
                      />
                    </Grid>
                  </Grid>
                }
              />
            </ListItemButton>
            <Divider />
            <ListItemButton
              sx={{
                cursor: "default",
              }}
              dense
            >
              <ListItemIcon>
                {data?.mort?.isUp ? (
                  <CaretUpOutlined style={successSX} />
                ) : (
                  <CaretDownOutlined style={errorSX} />
                )}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={"space-between"}>
                    <Grid item justifyContent={"end"} xs={4}>
                      <span>Mortalité</span>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={infoSX}>{data?.mort?.reel}%</Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={data?.mort?.isUp ? successSX : errorSX}>
                        {data?.mort?.ecart}
                      </Typography>
                    </Grid>
                    <Grid container justifyContent={"end"} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={
                          data?.pmo?.color == "green" ? "success" : "error"
                        }
                        icon={
                          data?.mort?.isUp ? (
                            <RiseOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          ) : (
                            <FallOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          )
                        }
                        label={`${data?.mort?.ecart_prsnt}%`}
                        sx={{ ml: 0, pl: 1 }}
                        size="small"
                      />
                    </Grid>
                  </Grid>
                }
              />
            </ListItemButton>
            <Divider />
            <ListItemButton
              sx={{
                cursor: "default",
              }}
              dense
            >
              <ListItemIcon>
                {data?.pmo?.isUp ? (
                  <CaretUpOutlined style={successSX} />
                ) : (
                  <CaretDownOutlined style={errorSX} />
                )}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={"space-between"}>
                    <Grid item justifyContent={"end"} xs={4}>
                      <span>PMO</span>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={infoSX}>{data?.pmo?.reel}%</Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography
                        sx={data?.pmo?.color == "green" ? successSX : errorSX}
                      >
                        {data?.pmo?.ecart}
                      </Typography>
                    </Grid>
                    <Grid container justifyContent={"end"} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={
                          data?.pmo?.color == "green" ? "success" : "error"
                        }
                        icon={
                          data?.pmo?.isUp ? (
                            <RiseOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          ) : (
                            <FallOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          )
                        }
                        label={`${data?.pmo?.ecart_prsnt}%`}
                        sx={{ ml: 0, pl: 1 }}
                        size="small"
                      />
                    </Grid>
                  </Grid>
                }
              />
            </ListItemButton>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LastWeek;
