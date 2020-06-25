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

const services = [
  {
    name: "no matter",
    iconPath: shampoo,
    iconViewBox: "-20 -20 640.01063 640",
  },
  {
    name: "after something",
    iconPath: haircut,
    iconViewBox: "-20 -20 640 640",
  },
  { name: "while eating", iconPath: color, iconViewBox: "-150 -20 640 640" },
  { name: "at wake up", iconPath: curl, iconViewBox: "-20 -20 640.01038 640" },
  {
    name: "before bed",
    iconPath: straight,
    iconViewBox: "-97 -20 640 640",
  },
];
const getInitialState = () => {
  return services.reduce((obj, item) => {
    obj[item.name] = false;
    return obj;
  }, {});
};
const style = (theme) => ({
  root: {
    padding: 8,
    height: "100%",
    alignItems: "center",
    maxWidth: 400,
    margin: " 0 auto",
  },
  row: { borderBottom: `1px solid ${theme.palette.grey[100]}` },
  icon: {
    fill: theme.palette.grey[700],
    width: 28,
    height: 28,
  },
});
const HowMaster = ({ classes }) => {
  const [serviceSelected, setServiceSelected] = useState(getInitialState());
  const handleChange = (name) => (e) =>
    setServiceSelected({ ...serviceSelected, [name]: e.target.checked });
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const textSelected = Object.keys(serviceSelected)
    .filter((key) => serviceSelected[key])
    .join(", ");

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
      spacing={0}
    >
      {services.map((service, i) => (
        <Grid
          item
          key={service.name}
          container
          justify="space-between"
          alignItems="center"
          className={classes.row}
        >
          <svg
            className={classes.icon}
            viewBox={service.iconViewBox}
            xmlns="http://www.w3.org/2000/svg"
          >
            {service.iconPath}
          </svg>
          <FormControlLabel
            control={
              <Switch
                onChange={handleChange(service.name)}
                value={service.name}
                color="primary"
              />
            }
            label={service.name}
            checked={serviceSelected[service.name]}
            labelPlacement="start"
          />
        </Grid>
      ))}
      <input
        type="text"
        value={textSelected}
        name="selected services"
        style={{ width: 1, height: 1, opacity: 0.1 }}
        readOnly
      />
    </Grid>
  );
};

HowMaster.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(style)(HowMaster);
