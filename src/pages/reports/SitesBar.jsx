import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
function SitesBar({ sitesName }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="sites-bar">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force example"
      >
        {sitesName.map((site) => (
          <Tab className="site-button" label={site?.name} key={site.id} />
        ))}
      </Tabs>
    </div>
  );
}

export default SitesBar;
