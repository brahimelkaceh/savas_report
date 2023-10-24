import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import "./popper.css";
// import egge90 from "./egge90";

const HoverPopper = ({ data }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [text, setText] = React.useState(data?.period);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  let replacedText;

  if (text) {
    replacedText =
      text?.replace(":", '<span class="replaced-text">h </span>') +
      "<span class='replaced-text'>m</span>";
  }

  return (
    <div>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: replacedText ? replacedText : "-- : --",
          }}
        ></p>
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>
          {data?.starts_at ? data?.starts_at : "-:- "}~
          {data?.ends_at ? data?.ends_at : " -:- "}
        </Typography>
      </Popover>
    </div>
  );
};

export default HoverPopper;
