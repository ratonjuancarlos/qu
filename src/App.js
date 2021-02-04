import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Table from "components/Table";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            Qu Challenge
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.body}>
        <div>
          <Typography variant="h5" className={classes.subtitle}>
            Swapi Planets
          </Typography>
        </div>
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
}
