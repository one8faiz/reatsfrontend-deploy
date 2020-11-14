import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "170%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  file: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h3">
          Registration
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormLabel component="legend"> Register as </FormLabel>
              <RadioGroup
                row
                aria-label="registeras"
                name="registeras"
                defaultValue="registeras"
              >
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    value="Investor"
                    control={<Radio color="primary" />}
                    label="Investor"
                    labelPlacement="End"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    value="Developer"
                    control={<Radio color="primary" />}
                    label="Developer"
                    labelPlacement="End"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    value="Renter"
                    control={<Radio color="primary" />}
                    label="Renter"
                    labelPlacement="End"
                  />
                </Grid>
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="ID"
                label="Enter your ID"
                name="ID"
                autoComplete="ID"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm password"
                label="Confirm Password"
                type="password"
                id="confirmpassword"
                autoComplete="confirm-password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="dateofbirth"
                type="date"
                name="dateofbirth"
                autoComplete="dateofbirth"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                required
                type="number"
                name="Phone number"
                label="Phone Number"
                id="phone"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="gender"
                defaultValue="male"
              >
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    value="Male"
                    control={<Radio color="primary" />}
                    label="Male"
                    labelPlacement="End"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    value="Female"
                    control={<Radio color="primary" />}
                    label="Female"
                    labelPlacement="End"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControlLabel
                    value="Other"
                    control={<Radio color="primary" />}
                    label="Other"
                    labelPlacement="End"
                  />
                </Grid>
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">Place of Birth</FormLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                required
                name="birthcity"
                label="City"
                id="birthcity"
                autoComplete="birthcity"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                required
                name="BirthCountry"
                label="Country"
                id="Birthcountry"
                autoComplete="Birthcountry"
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">Place of Residence</FormLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                required
                name="residencecity"
                label="City"
                id="residencecity"
                autoComplete="residencecity"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                required
                name="residenceCountry"
                label="Country"
                id="residencecountry"
                autoComplete="residencecountry"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="emiratesidnumber"
                label="Emirates ID Number"
                name="emiratesidnumber"
                autoComplete="emiratesidnumber"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="passportnumber"
                label="Passport Number"
                name="passportnumber"
                autoComplete="passportnumber"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel component="legend">
                {" "}
                Upload Emirates Id Front{" "}
              </FormLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel component="legend">Upload Emirates Id Back </FormLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="file"
                fullWidth
                id="eidfront"
                name="eidfront"
                variant="contained"
                color="primary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="file"
                fullWidth
                id="eidback"
                name="eidback"
                variant="contained"
                color="primary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel component="legend"> Upload Passport </FormLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel component="legend">Upload Visa </FormLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="file"
                fullWidth
                id="passport"
                name="passport"
                variant="contained"
                color="primary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="file"
                fullWidth
                id="visa"
                name="visa"
                variant="contained"
                color="primary"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree with the terms and conditions"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/Login" variant="body2" color="secondary">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
