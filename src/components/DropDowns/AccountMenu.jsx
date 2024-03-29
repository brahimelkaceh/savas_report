import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { NavLink, useLocation } from "react-router-dom";
import EggIcon from "@mui/icons-material/Egg";
import chicks from "../../../imgs/chick.png";
export default function AccountMenu() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser();
  };
  return (
    <React.Fragment>
      <Box
        sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        className="search-toggle"
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{
                width: 30,
                height: 30,
                background: "#fff",
                color: "#76453B",
                fontWeight: "bold",
              }}
            >
              {currentPath.includes("poussinier") ? (
                <img
                  src={chicks}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              ) : (
                <EggIcon></EggIcon>
              )}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <NavLink
          to={currentPath.includes("poussinier") ? "/" : "/poussiniere"}
          onClick={handleClose}
        >
          <MenuItem
            sx={{
              fontWeight: "bold ",
              color: "#8b4513",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#eee",
                color: "#8b4513",
              }}
            >
              {currentPath.includes("poussinier") ? (
                <EggIcon
                  sx={{
                    color: "#8b4513",
                  }}
                ></EggIcon>
              ) : (
                <img
                  src={chicks}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              )}
            </Avatar>
            {currentPath.includes("poussinier") ? "Production" : "Poussinière"}
          </MenuItem>
        </NavLink>
        <Divider />

        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
