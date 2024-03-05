import {
  CaretDownOutlined,
  CaretUpOutlined,
  FallOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import {
  Chip,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Card,
} from "@mui/material";
import React from "react";
import SimpleBar from "simplebar-react";

const BilanGlobal = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const successSX = { color: theme.palette.success.main };
  const errorSX = { color: theme.palette.error.main };
  const infoSX = { color: theme.palette.info.main };
  return (
    <Grid container spacing={2.5}>
      <Divider />
      <Grid item xs={12}>
        {/* <Typography color={"Highlight"} variant="h6">
          Un titre:
        </Typography> */}
        <Divider />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card content={false}>
          <List
            aria-label="main mailbox folders"
            sx={{
              "& svg": {
                width: 25,
                my: -0.75,
                ml: -0.75,
                mr: 0.75,
              },
              "& .css-cveggr-MuiListItemIcon-root": {
                minWidth: "30px",
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
                {data?.mort?.isUp ? (
                  <CaretUpOutlined style={successSX} />
                ) : (
                  <CaretDownOutlined style={errorSX} />
                )}{" "}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={"space-between"}>
                    <Grid item justifyContent={"end"} xs={4}>
                      <Typography variant="caption" color={"GrayText"}>
                        {isMobile ? "∑ mort" : "Mortalité cumulée"}
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={infoSX}>{data?.mort?.reel}%</Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={data?.mort?.isUp ? successSX : errorSX}>
                        {data?.mort?.ecart}
                      </Typography>{" "}
                    </Grid>
                    <Grid container justifyContent={"end"} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.mort?.isUp ? "success" : "error"}
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
              dense
              sx={{
                cursor: "default",
              }}
            >
              <ListItemIcon>
                {data?.noppp?.isUp ? (
                  <CaretUpOutlined style={successSX} />
                ) : (
                  <CaretDownOutlined style={errorSX} />
                )}{" "}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={"space-between"}>
                    <Grid item justifyContent={"end"} xs={4}>
                      <Typography variant="caption" color={"GrayText"}>
                        {isMobile
                          ? "∑ NOPPP"
                          : "Nombre d'œuf par poule présente cumulée"}
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={infoSX}>
                        {data?.noppp?.reel}œuf{" "}
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={data?.noppp?.isUp ? successSX : errorSX}>
                        {data?.noppp?.ecart}
                      </Typography>{" "}
                    </Grid>
                    <Grid container justifyContent={"end"} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.noppp?.isUp ? "success" : "error"}
                        icon={
                          data?.noppp?.isUp ? (
                            <RiseOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          ) : (
                            <FallOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          )
                        }
                        label={`${data?.noppp?.ecart_prsnt}%`}
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
              dense
              sx={{
                cursor: "default",
              }}
            >
              <ListItemIcon>
                {data?.noppd?.isUp ? (
                  <CaretUpOutlined style={successSX} />
                ) : (
                  <CaretDownOutlined style={errorSX} />
                )}{" "}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={"space-between"}>
                    <Grid item justifyContent={"end"} xs={4}>
                      <Typography variant="caption" color={"GrayText"}>
                        {isMobile
                          ? "∑ NOPPD"
                          : "Nombre d'œuf par poule départ cumulé"}
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={infoSX}>
                        {data?.noppd?.reel} œuf
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={data?.noppd?.isUp ? successSX : errorSX}>
                        {data?.noppd?.ecart}
                      </Typography>
                    </Grid>
                    <Grid container justifyContent={"end"} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.noppd?.isUp ? "success" : "error"}
                        icon={
                          data?.noppd?.isUp ? (
                            <RiseOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          ) : (
                            <FallOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          )
                        }
                        label={`${data?.noppd?.ecart_prsnt}%`}
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
              dense
              sx={{
                cursor: "default",
              }}
            >
              <ListItemIcon>
                {data?.moppp?.isUp ? (
                  <CaretUpOutlined style={successSX} />
                ) : (
                  <CaretDownOutlined style={errorSX} />
                )}{" "}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={"space-between"}>
                    <Grid item justifyContent={"end"} xs={4}>
                      <Typography variant="caption" color={"GrayText"}>
                        {isMobile
                          ? "∑ MOPPP"
                          : "Masse d'œuf par poule présente cumulé"}
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={infoSX}>{data?.moppp?.reel}kg</Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={data?.moppp?.isUp ? successSX : errorSX}>
                        {data?.moppp?.ecart}
                      </Typography>
                    </Grid>
                    <Grid container justifyContent={"end"} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.moppp?.isUp ? "success" : "error"}
                        icon={
                          data?.moppp?.isUp ? (
                            <RiseOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          ) : (
                            <FallOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          )
                        }
                        label={`${data?.moppp?.ecart_prsnt}%`}
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
      <Grid item xs={12} md={6}>
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
              "& .css-cveggr-MuiListItemIcon-root": {
                minWidth: "30px",
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
                {data?.moppd?.isUp ? (
                  <CaretUpOutlined style={successSX} />
                ) : (
                  <CaretDownOutlined style={errorSX} />
                )}{" "}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={"space-between"}>
                    <Grid item justifyContent={"end"} xs={4}>
                      <Typography variant="caption" color={"GrayText"}>
                        {isMobile
                          ? "∑ MOPPD"
                          : "masse d'œuf par poule départ cumulé"}
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={infoSX}>{data?.moppd?.reel}kg</Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={data?.moppd?.isUp ? successSX : errorSX}>
                        {data?.moppd?.ecart}
                      </Typography>
                    </Grid>
                    <Grid container justifyContent={"end"} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.moppd?.isUp ? "success" : "error"}
                        icon={
                          data?.moppd?.isUp ? (
                            <RiseOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          ) : (
                            <FallOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          )
                        }
                        label={`${data?.moppd?.ecart_prsnt}%`}
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
              dense
              sx={{
                cursor: "default",
              }}
            >
              <ListItemIcon>
                {data?.aps_cuml?.isUp ? (
                  <CaretUpOutlined style={successSX} />
                ) : (
                  <CaretDownOutlined style={errorSX} />
                )}{" "}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={"space-between"}>
                    <Grid item justifyContent={"end"} xs={4}>
                      <Typography variant="caption" color={"GrayText"}>
                        {isMobile ? "∑ APS" : "Aliment par sujet cumulé"}
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={infoSX}>
                        {data?.aps_cuml?.reel}kg
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography
                        sx={data?.aps_cuml?.isUp ? successSX : errorSX}
                      >
                        {data?.aps_cuml?.ecart}
                      </Typography>
                    </Grid>
                    <Grid container justifyContent={"end"} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.aps_cuml?.isUp ? "success" : "error"}
                        icon={
                          data?.aps_cuml?.isUp ? (
                            <RiseOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          ) : (
                            <FallOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          )
                        }
                        label={`${data?.aps_cuml?.ecart_prsnt}%`}
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
              dense
              sx={{
                cursor: "default",
              }}
            >
              <ListItemIcon>
                {data?.pv?.isUp ? (
                  <CaretUpOutlined style={successSX} />
                ) : (
                  <CaretDownOutlined style={errorSX} />
                )}{" "}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={"space-between"}>
                    <Grid item justifyContent={"end"} xs={4}>
                      <Typography variant="caption" color={"GrayText"}>
                        {isMobile ? "P.corporel" : "Poids corporel"}
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={infoSX}>{data?.pv?.reel}g</Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={data?.pv?.isUp ? successSX : errorSX}>
                        {data?.pv?.ecart}
                      </Typography>
                    </Grid>
                    <Grid container justifyContent={"end"} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.pv?.isUp ? "success" : "error"}
                        icon={
                          data?.pv?.isUp ? (
                            <RiseOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          ) : (
                            <FallOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          )
                        }
                        label={`${data?.pv?.ecart_prsnt}%`}
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
              dense
              sx={{
                cursor: "default",
              }}
            >
              <ListItemIcon>
                {data?.homog?.isUp ? (
                  <CaretUpOutlined style={successSX} />
                ) : (
                  <CaretDownOutlined style={errorSX} />
                )}{" "}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Grid container justifyContent={"space-between"}>
                    <Grid item justifyContent={"end"} xs={4}>
                      <Typography variant="caption" color={"GrayText"}>
                        {"Homogénéité"}
                      </Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={infoSX}>{data?.homog?.reel}%</Typography>
                    </Grid>
                    <Grid container item justifyContent={"start"} md={2} xs={1}>
                      <Typography sx={data?.homog?.isUp ? successSX : errorSX}>
                        {data?.homog?.ecart}
                      </Typography>
                    </Grid>
                    <Grid container justifyContent={"end"} item xs={4}>
                      <Chip
                        variant="outlined"
                        color={data?.homog?.isUp ? "success" : "error"}
                        icon={
                          data?.homog?.isUp ? (
                            <RiseOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          ) : (
                            <FallOutlined
                              style={{ fontSize: "1rem", color: "inherit" }}
                            />
                          )
                        }
                        label={`${data?.homog?.ecart_prsnt}%`}
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

export default BilanGlobal;
