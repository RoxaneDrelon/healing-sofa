import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { Paper, Grid, Typography, withStyles, Button } from "@material-ui/core";
import WizardHeader from "./wizardHeader";
import DrugsMaster from "./drugsMaster";
import HowMaster from "./HowMaster";
import SelectDateDaypart from "./selectDateDaypart";

const style = (theme) => ({
  root: {
    border: `8px solid ${theme.palette.common.white}`,
    margin: "auto",
    padding: "36px 0 0",
    background: `rgba(255,255,255,0.9)`,
    boxShadow: [
      `0px 16px 26px -10px ${theme.palette.primary.main}99`,
      theme.shadows[15],
    ],
    width: "60%",
  },
  navigation: {
    width: 110,
    fontSize: 12,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      width: 90,
    },
  },
  prevBtn: {
    color: theme.palette.grey[700],
    background: theme.palette.common.white,
    boxShadow: theme.shadows[5],
  },
});
const Content = ({ classes }) => {
  const [activeStep, setActiveStep] = useState(0);
  const handleChange = (index) => (e) => setActiveStep(index);
  const nandleNext = () => setActiveStep(activeStep + 1);
  const nandlePrev = () => setActiveStep(activeStep - 1);
  const tabs = ["Drug", "dose", "how"];
  return (
    <Paper style={{}} elevation={1} className={classes.root}>
      <Typography
        variant="h4"
        gutterBottom
        color="primary"
        style={{ padding: "0 8px" }}
      >
        Prescriptor
      </Typography>
      <Typography gutterBottom>
        let's not forget about your medication !
      </Typography>
      <WizardHeader
        tabs={tabs}
        activeStep={activeStep}
        handleChange={handleChange}
      />

      <form
        // action="https://formsapi.jabwn.com/key/<api_key>"
        method="post"
      >
        <SwipeableViews index={activeStep} onChangeIndex={handleChange}>
          <DrugsMaster />
          <SelectDateDaypart />
          <HowMaster />
        </SwipeableViews>
        <Grid
          container
          justify="space-between"
          style={{ padding: "16px 16px" }}
        >
          <Grid item>
            <Button
              disabled={activeStep === 0}
              onClick={nandlePrev}
              variant="contained"
              color="default"
              className={`${classes.navigation} ${classes.prevBtn}`}
            >
              Back
            </Button>
          </Grid>
          {activeStep < tabs.length - 1 && (
            <Grid item>
              <Button
                color="primary"
                className={classes.navigation}
                variant="contained"
                onClick={nandleNext}
              >
                Next
              </Button>
            </Grid>
          )}
          {activeStep === tabs.length - 1 && (
            <Grid item>
              <Button
                color="primary"
                className={classes.navigation}
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
          )}
        </Grid>
      </form>
    </Paper>
  );
};
export default withStyles(style)(Content);
