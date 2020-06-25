import React, { useState } from "react";
import { withStyles, Grid, Typography, TextField } from "@material-ui/core";

import classNames from "classnames";
import { useDispatch } from "react-redux";

const masters = [
  <TextField hintText="Drug's name" floatingLabelText="Drug's name" />,
];
const style = (theme) => {
  // const active = {
  //   filter: "grayscale(0)",
  //   border: `3px solid ${theme.palette.primary.main}`
  // };
  return {
    root: {},
    mainClass: {
      height: 106,
      width: 106,
      boxShadow: [
        `0px 16px 26px -10px ${theme.palette.primary.main}a5`,
        theme.shadows[5],
      ],
      margin: 8,
      color: theme.palette.primary.light,
      border: `3px solid ${theme.palette.common.white}`,
      filter: "grayscale(1)",
      transition: theme.transitions.create(),
      "&:active": {
        filter: "grayscale(0)",
        border: `3px solid ${theme.palette.primary.main}`,
      },
      "&:hover": {
        filter: "grayscale(0)",
        border: `3px solid ${theme.palette.primary.main}`,
      },
    },
    mainLblClass: {
      color: theme.palette.grey[700],
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 16,
    },
    //class for checked item

    input: {
      height: 106,
      width: 106,
      position: "absolute",
      top: -6,
      left: -6,
      opacity: 0,
    },
  };
};

const DrugsMaster = ({ classes }) => {
  const [checked, setChecked] = useState(-1);
  const handleChecked = (i) => (e) => setChecked(i);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const itemOuterClass = (i) =>
    classNames({
      [classes.mainClass]: true,
      [classes.checked]: checked === i,
    });
  const labelClass = (i) =>
    classNames({
      [classes.mainLblClass]: true,
      [classes.LblChecked]: checked === i,
    });

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <Grid item xs={10}>
        <Typography variant="h4" color="primary" style={{ padding: "0px 8px" }}>
          Drug's name ?
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <TextField
          hintText="Drug's name"
          floatingLabelText="Drug's name"
          label="enter the drug's name"
          variant="filled"
          onInput={(e) => {
            setInput(e.target.value);
            dispatch({ type: "ADD_DRUG_NAME", name: input });
          }}
        />
      </Grid>
      <input
        type="text"
        name="selected master"
        value={checked > -1 ? masters[checked].name : "none"}
        style={{ width: 1, height: 1, opacity: 0.1 }}
        readOnly
      />
    </Grid>
  );
};
export default withStyles(style)(DrugsMaster);
