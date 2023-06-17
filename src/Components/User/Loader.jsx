import * as React from "react";

import CircularProgress from "@mui/material/CircularProgress";
import { Backdrop } from "@mui/material";

export default function Loader() {
  return (
    // backdrop
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 9999999999,
      }}
      open={true}
    >
      {/* circle loader */}
      <CircularProgress color="secondary" />
    </Backdrop>
  );
}
