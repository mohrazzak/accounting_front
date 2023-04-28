import React, { useEffect, useState } from "react";
import PageLayout from "../../components/PageLayout";
import TableSubHeader from "../../components/TableSubHeader";
import Box from "@mui/material/Box";
import { number, object, string } from "yup";
import { Field, Form, Formik, useFormikContext } from "formik";
import { Switch, TextField, Select } from "formik-material-ui";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const boxes = [
  { title: "التحويل الشخصي", url: "balance" },
  { title: "التحويل للفواتير", url: "bills" },
];
const TransferPage = () => {
  return (
    <PageLayout>
      <TableSubHeader title="التحويل" />
      <Grid container spacing={3}>
        {boxes.map((page, i) => (
          <Grid
            item
            xs={6}
            key={i}
            sx={{
              justifyContent: "center",
              mb: 2,
              p: 1,
            }}
          >
            <Link to={page.url} style={{ listStyle: "none" }}>
              <Button
                variant="contained"
                sx={{
                  fontSize: "1.5rem",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  height: "80px",
                }}
              >
                <Typography fontSize="1.2rem">{page.title}</Typography>
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};

export default TransferPage;
