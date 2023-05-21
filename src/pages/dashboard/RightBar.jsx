import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import avatar from "../../assets/avatar.png";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import Button from "@mui/material/Button";

const RightBar = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      // sx={{ width: anchor === "top" || anchor === "right" ? "auto" : "50%" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="right-bar">
        <div className="right-bar-title">Fils d'actualité</div>
        <div className="right-bar-content">
          <div className="right-bar-content-header">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <span className="user-name">Ethan Noah</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            esse sequi aliquam nostrum! Rem, ex?
          </p>
          <div className="user-time">
            <span>Feb 2, 2023 19:28</span>
          </div>
        </div>
        <div className="right-bar-content">
          <div className="right-bar-content-header">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <span className="user-name">Ethan Noah</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            esse sequi aliquam nostrum! Rem, ex?
          </p>
          <div className="user-time">
            <span>Feb 2, 2023 19:28</span>
          </div>
        </div>
        <div className="right-bar-content">
          <div className="right-bar-content-header">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <span className="user-name">Ethan Noah</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            esse sequi aliquam nostrum! Rem, ex?
          </p>
          <div className="user-time">
            <span>Feb 2, 2023 19:28</span>
          </div>
        </div>
        <div className="right-bar-content">
          <div className="right-bar-content-header">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <span className="user-name">Ethan Noah</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            esse sequi aliquam nostrum! Rem, ex?
          </p>
          <div className="user-time">
            <span>Feb 2, 2023 19:28</span>
          </div>
        </div>
        <div className="right-bar-content">
          <div className="right-bar-content-header">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <span className="user-name">Ethan Noah</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            esse sequi aliquam nostrum! Rem, ex?
          </p>
          <div className="user-time">
            <span>Feb 2, 2023 19:28</span>
          </div>
        </div>
        <div className="right-bar-content">
          <div className="right-bar-content-header">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <span className="user-name">Ethan Noah</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            esse sequi aliquam nostrum! Rem, ex?
          </p>
          <div className="user-time">
            <span>Feb 2, 2023 19:28</span>
          </div>
        </div>
        <div className="right-bar-content">
          <div className="right-bar-content-header">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <span className="user-name">Ethan Noah</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            esse sequi aliquam nostrum! Rem, ex?
          </p>
          <div className="user-time">
            <span>Feb 2, 2023 19:28</span>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="rightButton">
            <button onClick={toggleDrawer(anchor, true)} className="">
              <KeyboardArrowLeftIcon />
            </button>
          </div>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default RightBar;
