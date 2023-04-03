import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import LinkBtn from "../buttons/LinkBtn";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import "./userDrop.css";

const data = [
  {
    id: 1,
    name: "Profile",
    icon: <FaUser />,
  },
  {
    id: 2,
    name: "Logout",
    icon: <FiLogOut />,
  },
];
const DropMenu = () => {
  const [menu, setMenu] = useState(data);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <BsPersonCircle className="search-toggle" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="user__drop-container_btns">
          {menu.map((m) => {
            return <LinkBtn key={m.id} {...m} />;
          })}
        </div>
      </Menu>
    </div>
  );
};

export default DropMenu;
