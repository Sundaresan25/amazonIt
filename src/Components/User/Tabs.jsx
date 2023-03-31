import * as React from "react";

import clsx from "clsx";
import { Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";

export default function IconTabs(props) {
  const {
    tabs,
    value,
    disabletab,
    position,
    top,
    handleChange = () => {},
  } = props;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <section className="tabs">
      <div className={clsx("d-flex  mt-2 ", position)}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon position tabs example"
          className="rounded d-flex justify-content-center"
          TabIndicatorProps={{
            style: {
              background: "var(--primary)",
              top: top ? "0" : "",
              height: "0.25rem",
            },
          }}
          variant={isSmallScreen ? "scrollable" : "standard"}
          scrollButtons={isSmallScreen ? "auto" : "off"}
        >
          {tabs.map((data, index) => (
            <Tab
              style={{
                background: top ? "#E7E8E8" : "",
                textTransform: "capitalize",
                padding: "0px 40px",
              }}
              key={index}
              icon={data.icon}
              iconPosition="start"
              label={data.label}
              className={"tabStyle"}
              disabled={disabletab}
            />
          ))}
        </Tabs>
      </div>
    </section>
  );
}
