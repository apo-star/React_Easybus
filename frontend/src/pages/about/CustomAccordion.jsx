import * as React from "react";
import Accordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";

const MyAccordion = styled(Accordion)(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    "&.Mui-active": {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
}));

export default function CustomAccordion() {
  return <MyAccordion defaultValue={30} />;
}
