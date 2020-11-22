import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProfileCard from './ProfileCard';
import PropertyCard from './PropertyCard';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%"
    
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  property:{
    flexDirection: "column",
    alignItems: "center",
    textAlign:"center",
    marginTop:50,
  },
}));

export default function Profile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container component="main" fullheight className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.property} >
    <Typography component="h1" variant="h3">
          My Property
        </Typography>
    <div className="home__section">
    <PropertyCard
    src="https://media.nomadicmatt.com/2018/apartment.jpg"
    PropertyType="Residential"
    PropertyId="RS2568"
    Price="AED 250000"
    Area="Burjuman"
    City="Dubai"
    Country="United Arab Emirates"
    NumofBath="3"
    NumofBedroom="4"
    />
        <PropertyCard
    src="https://media.nomadicmatt.com/2018/apartment.jpg"
    PropertyType="Residential"
    PropertyId="RS2568"
    Price="AED 250000"
    Area="Burjuman"
    City="Dubai"
    Country="United Arab Emirates"
    NumofBath="3"
    NumofBedroom="4"
    />
    </div>
    <div className="home__section">
    <PropertyCard
    src="https://media.nomadicmatt.com/2018/apartment.jpg"
    PropertyType="Residential"
    PropertyId="RS2568"
    Price="AED 250000"
    Area="Burjuman"
    City="Dubai"
    Country="United Arab Emirates"
    NumofBath="3"
    NumofBedroom="4"
    />
        <PropertyCard
    src="https://media.nomadicmatt.com/2018/apartment.jpg"
    PropertyType="Residential"
    PropertyId="RS2568"
    Price="AED 250000"
    Area="Burjuman"
    City="Dubai"
    Country="United Arab Emirates"
    NumofBath="3"
    NumofBedroom="4"
    />

</div>
      </Grid>
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          My Profile
        </Typography>
        <div className="home_section"> 
        <ProfileCard
src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
Name="Mr. John Smith"
Type="Investor"
Id="1532564"
Email="randomme@gmail.com"
PhoneNumber="+97125315231"
Gender = "Male"
City="DUbia"
Country="United Arab Emirates"
EmiratesID="1254321"
Passport="1478as41"
/>
Name="Mr. John Smith"
Type="Investor"
Id="1532564"
Email="randomme@gmail.com"
PhoneNumber="+97125315231"
Gender = "Male"
City="DUbia"
Country="United Arab Emirates"
EmiratesID="1254321"
Passport="1478as41"
/>
        </div>
      </div>
    </Grid>
  </Grid>

  );
}
