import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { purple } from "@material-ui/core/colors";
const useStyles = makeStyles((createMuiTheme) => ({
  root: {
    flexGrow: 1,
    color:purple,
  },
  mainButton: {
    marginRight: createMuiTheme.spacing(160),
  },
  title: {
    flexGrow: 1,
    fontWeight: 400,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="purple">
        <Toolbar>
          <Button edge="start" className={classes.mainButton} color="inherit">
          <Typography
            component="h3"
             variant="h4"
            color="primary"
            className={classes.title}
             > 
             REATS</Typography>
             </Button>
                <Button href="/About">
                  About
                </Button>
                <Button href="/Login">
                  Login
                  </Button>
                  <Button href="/SearchPage">
                  Search
                </Button>
                <Button href="/ListProperty">
                  Sell 
                </Button>
                <Button variant="outlined" color="primary" href="/SignUp">
                  Register
                </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
