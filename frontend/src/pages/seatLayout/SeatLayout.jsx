import { Checkbox, Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Zoom from "@mui/material/Zoom";
import React from "react";
import ChairIcon from "@mui/icons-material/Chair";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useGetAllSeatQuery } from "../../features/user/bus/seatSlice";

const seatLeft = [
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2",
  "D1",
  "D2",
  "E1",
  "E2",
  "F1",
  "F2",
];
const seatRight = [
  "A3",
  "A4",
  "B3",
  "B4",
  "C3",
  "C4",
  "D3",
  "D4",
  "E3",
  "E4",
  "F3",
  "F4",
];
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.secondary.main,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.secondary.main,
    width: "50px",
    height: "30px",
    fontWeight: "bold",
    fontSize: "16px",
    textAlign: "center",
  },
}));
const SeatLayout = () => {
  const { data } = useGetAllSeatQuery();
  const allSeats = data.data;
  return (
    <Box>
      {allSeats.map((eachSeat) => (
        <Stack
          width={220}
          border={"2px solid #ccc"}
          padding={1}
          paddingY={2}
          margin={5}
          borderRadius={1}
          key={Math.random()}
        >
          <Box className="driver-seat" textAlign={"right"}>
            <Box
              marginBottom={1}
              marginRight={1}
              sx={{ filter: "contrast(20%)" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/950/950497.png"
                alt=""
                width={"25px"}
              />
            </Box>
          </Box>

          <Stack direction={"row"} spacing={5}>
            <Box>
              <Grid container columns={{ xs: 12 }} spacing={1}>
                {eachSeat?.seats?.slice(0, 10).map((seat) => (
                  <Grid item xs={6} key={Math.random()}>
                    <BootstrapTooltip
                      TransitionComponent={Zoom}
                      title={seat.seatNo}
                      arrow
                      placement="top"
                    >
                      <Checkbox
                        {...label}
                        icon={<ChairOutlinedIcon sx={{ color: "#999" }} />}
                        checkedIcon={<ChairIcon />}
                      />
                    </BootstrapTooltip>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box>
              <Grid container columns={{ xs: 12 }} spacing={1}>
                {eachSeat?.seats?.slice(0, 10).map((seat) => (
                  <Grid item xs={6} key={Math.random()}>
                    <BootstrapTooltip
                      TransitionComponent={Zoom}
                      title={seat.seatNo}
                      arrow
                      placement="top"
                    >
                      <Checkbox
                        {...label}
                        icon={<ChairOutlinedIcon sx={{ color: "#999" }} />}
                        checkedIcon={<ChairIcon />}
                      />
                    </BootstrapTooltip>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>
        </Stack>
      ))}
    </Box>
  );
};

export default SeatLayout;
