import React, { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import {
  withStyles,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { calendar, clock } from "./iconPaths";
import { useDispatch } from "react-redux";

const dayparts = ["morning", "noon", "evening", "nomatter"];

const styles = (theme) => {
  return {
    root: {
      padding: theme.spacing.unit * 3,
      height: "100%",
      maxWidth: 450,
      margin: "auto",
      marginTop: "10",
    },
    icon: {
      height: 20,
      width: 20,
      fill: theme.palette.grey[500],
    },
    picker: {
      margin: 10,
    },
    FormControlLabel: {
      margin: 2,
    },
    RadioGroup: {
      flexWrap: "nowrap",
    },
  };
};
function SelectDateDaypart({ classes }) {
  const [selectedStartDate, handleStartDateChange] = useState(new Date());
  const [selectedEndDate, handleEndDateChange] = useState(new Date());

  const [selectedDaypart, setDaypart] = useState("nomatter");
  const handleDaypartChange = (e) => setDaypart(e.target.value);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
          className={classes.icon}
        >
          {clock}
        </svg>
      </Grid>
      <Grid item xs={11} m={4}>
        <RadioGroup
          name="daypart"
          value={selectedDaypart}
          onChange={handleDaypartChange}
          className={classes.RadioGroup}
          row
          xs={12}
        >
          {dayparts.map((part) => (
            <FormControlLabel
              className={classes.FormControlLabel}
              key={part}
              value={part}
              control={<Radio color="primary" />}
              label={part}
              labelPlacement="bottom"
              checked={selectedDaypart === part}
              disableGutters
              onInput={(e) => {
                setInput(e.target.value);
                dispatch({ type: "ADD_TIME_OF_THE_DAY", time: e.target.value });
              }}
            />
          ))}
        </RadioGroup>
      </Grid>

      <Grid item xs={1} gutters>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={classes.icon}
        >
          {calendar}
        </svg>
      </Grid>
      <Grid item xs={11}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className={classes.picker}>
            <DatePicker
              inputProps={{ id: "date" }}
              value={selectedStartDate}
              disablePast
              autoOk
              onChange={(value) => {
                handleStartDateChange(value.toISOString().slice(0, 10));
                dispatch({
                  type: "ADD_START_DAY",
                  date: selectedStartDate,
                });
              }}
              name="date"
              fullWidth
              variant="filled"
            />
          </div>
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={classes.icon}
        >
          {calendar}
        </svg>
      </Grid>
      <Grid item xs={11}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className={classes.picker}>
            <DatePicker
              inputProps={{ id: "date" }}
              value={selectedEndDate}
              disablePast
              autoOk
              onChange={(value) => {
                handleEndDateChange(value.toISOString().slice(0, 10));
                dispatch({
                  type: "ADD_END_DAY",
                  date: selectedEndDate,
                });
              }}
              name="date"
              fullWidth
              variant="filled"
            />
          </div>
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(SelectDateDaypart);
