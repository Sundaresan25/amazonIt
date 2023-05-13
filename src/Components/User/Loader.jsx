import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { Backdrop } from "@mui/material";

export default function Loader() {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 9999999999,
      }}
      open={true}
      //   onClick={handleClose}
    >
      {/* <Stack sx={{ color: "grey.500" }} spacing={2} direction="row"> */}
      <CircularProgress color="secondary" />
      {/* </Stack> */}
    </Backdrop>
  );
}
