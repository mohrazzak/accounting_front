import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ArrowLeft, ArrowRight } from "react-feather";
import { IconButton } from "@mui/material";

const PageHeading = ({ isDaily, title, date, onReduce, onIncrease }) => {
  var months = [
    "يناير",
    "فبراير",
    "مارس",
    "إبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  var days = [
    "اﻷحد",
    "اﻷثنين",
    "الثلاثاء",
    "اﻷربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];
  var delDateString =
    days[date.getDay()] +
    ", " +
    date.getDate() +
    " " +
    months[date.getMonth()] +
    ", " +
    date.getFullYear();

  return (
    <>
      {isDaily ? (
        <Box
          sx={{
            textAlign: "center",
            fontSize: "2rem",
            border: "2px solid dodgerblue",
            borderRadius: "10px",
            color: "black",
            fontWeight: "bold",
            p: 2,
            mb: 3,
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{ bgcolor: "#90ee9047 !important" }}
            onClick={onReduce}
          >
            <ArrowRight />
          </IconButton>
          <Typography sx={{ fontSize: "1.4rem" }}>{delDateString}</Typography>
          <IconButton
            sx={{ bgcolor: "#90ee9047 !important" }}
            onClick={onIncrease}
          >
            <ArrowLeft />
          </IconButton>
        </Box>
      ) : (
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "2rem",
            border: "2px solid dodgerblue",
            borderRadius: "10px",
            color: "black",
            fontWeight: "bold",
            p: 2,
            mb: 3,
          }}
        >
          {title}
        </Typography>
      )}
    </>
  );
};

export default PageHeading;
