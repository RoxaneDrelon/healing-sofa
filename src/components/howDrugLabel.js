import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  withStyles,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from "@material-ui/core";
import { curl, straight, color, haircut, shampoo } from "./iconPaths";

function howDrugLabel() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <Grid item xs={8}>
        <TextField
          hintText="Drug's name"
          floatingLabelText="Drug's name"
          label="enter how the medication should be taken"
          variant="filled"
          value={input}
          onInput={(e) => {
            setInput(e.target.value);
            dispatch({ type: "ADD_HOW", text: input });
          }}
        />
      </Grid>
    </div>
  );
}

export default howDrugLabel;
