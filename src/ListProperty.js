import React from "react";
import ApartmentIcon from "@material-ui/icons/Apartment";
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
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  file: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl:{
    minWidth:"100%",
  }
}));

export default function ListProperty() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
       <img src="" ></img>
        <Typography component="h1" variant="h3">
          List Your Property
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <FormLabel component="legend">Property Type</FormLabel>
              </Grid>
              <Grid item xs={12} sm={9}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Select Type</InputLabel>
                 <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                  >
                  <MenuItem value="Villa">Villa</MenuItem>
                  <MenuItem value="Apartment">Apartment</MenuItem>
                  <MenuItem value="TownHouse">TownHouse</MenuItem>
                    </Select>
                 </FormControl>
                 </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">Property Details</FormLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Number of Rooms"
                name="NumberofRooms"
                variant="outlined"
                required
                fullWidth
                id="numberofrooms"
                label="Number of Rooms"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Bathroom"
                name="Bathroom"
                variant="outlined"
                required
                fullWidth
                id="bathroom"
                label="Number of Bathroom"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Property ID"
                name="PropertyID"
                variant="outlined"
                required
                fullWidth
                id="PropertyID"
                label="Property ID"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Price"
                name="Price"
                variant="outlined"
                required
                fullWidth
                id="Price"
                label="Price"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">Property Location</FormLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Area"
                name="Area"
                variant="outlined"
                required
                fullWidth
                id="Area"
                label="Area"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                required
                name="propertypincode"
                label="Pin Code"
                id="pincode"
                autoComplete="Pincode"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="City"
                name="City"
                variant="outlined"
                required
                fullWidth
                id="cityproperty"
                label="City"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                required
                name="propertycountry"
                label="Country"
                id="propertycountry"
                autoComplete="propertycountry"
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">Property Documents</FormLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                required
                name="registration number"
                label="Registration Number"
                id="registration Number"
                autoComplete="registrationnumber"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                required
                name="contractnumber"
                label="Contract Number"
                id="contractnumber"
                autoComplete="contractnumber"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel component="legend"> Upload Registration </FormLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormLabel component="legend">Upload Contract </FormLabel>
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="file"
                fullWidth
                id="registration"
                name="registration"
                variant="contained"
                color="primary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                type="file"
                fullWidth
                id="Contract"
                name="Contract"
                variant="conained"
                color="primary"
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <FormLabel component="legend">Upload Photo </FormLabel>
            </Grid>
            <Grid item xs={12} sm={8}>
              <input
                type="file"
                fullWidth
                id="photo"
                name="photo"
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
            Register
          </Button>
          <Grid container justify="flex-end"></Grid>
        </form>
      </div>
    </Container>
  );
}
