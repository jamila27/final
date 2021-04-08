import React from "react";
import ReactDOM from "react-dom";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Fr from "../assets/flags/france.png";
import An from "../assets/flags/us.png";

const countries = [
  {
    label: "Français",
    src: Fr,
    link: " ",
    value: "FR"
  },
  
  {
    label: "Anglais",
    src: An,
    link: " ",
    value: "AN"
  }
];

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(5),
    minWidth: 120,
    backgroundColor: "transparent"
  },
  select: {
    textAlign: "center",
    textDecoration: "none"
  }
}));
export default function LangSelect() {
  const classes = useStyles();
  const [country, setCountry] = React.useState(Fr);
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setCountry(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <form autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="open-select" />
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={country}
          name="country"
          onChange={handleChange}
          inputProps={{
            id: "open-select"
          }}
        >
          {countries.map((option, key) => (
            <MenuItem value={option.src} key={key}>
              <img src={option.src} alt={option.label} />{" "}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
}

