import React from "react";
import "./ProfileCard.css";

function ProfileCard({ src,Type,Name, Id, Email, PhoneNumber, Gender, City , Country,EmiratesID , Passport}) {
  return (
    <div className="profilecard">
      <img src={src} alt="" />
      <div className="profile__info">
        <h1>Name : {Name}</h1>
        <h3>Type :{Type}</h3>
        <h3>Profile ID : {Id}</h3>
         <h4>Email : {Email}</h4>
    <h4>Number : {PhoneNumber}</h4>
  <h4>Gender : {Gender}</h4>
  <h4> City : {City}</h4>
  <h4>Country : {Country}</h4>
  <h4>Emirates ID : {EmiratesID}</h4>
  <h4>Passport Number : {Passport}</h4>
      </div>
    </div>
  );
}

export default ProfileCard;