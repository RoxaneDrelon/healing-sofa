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

const dayparts = ["morning", "noon", "evening", "nomatter"];

const styles = (theme) => {
  return {
    root: {
      padding: theme.spacing.unit * 3,
      height: "100%",
      maxWidth: 450,
      margin: " 10 auto",
    },
    icon: {
      height: 20,
      width: 20,
      fill: theme.palette.grey[500],
    },
  };
};
function SelectDateDaypart({ classes }) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedDaypart, setDaypart] = useState("nomatter");
  const handleDaypartChange = (e) => setDaypart(e.target.value);

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
          row
        >
          {dayparts.map((part) => (
            <FormControlLabel
              key={part}
              value={part}
              control={<Radio color="primary" />}
              label={part}
              labelPlacement="bottom"
              checked={selectedDaypart === part}
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
              value={selectedDate}
              disablePast
              autoOk
              onChange={handleDateChange}
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
              value={selectedDate}
              disablePast
              autoOk
              onChange={handleDateChange}
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
