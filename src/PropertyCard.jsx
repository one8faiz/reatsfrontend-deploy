import React from "react";
import "./PropertyCard.css";

function ProfileCard({ src,PropertyType,PropertyId,Price,NumofBath,NumofRoom ,Area,City,Country}) {
  return (
    <div className="propertycard">
      <img src={src} alt="" />
      <div className="property__info">
        <h2>Property Type : {PropertyType}</h2>
        <h1>Property ID :{PropertyId}</h1>
        <h1>Price: {Price}</h1>
        <h3> Area: {Area}</h3>
        <h3> City: {City}</h3>
        <h3> Country: {Country}</h3>
         <h3> Bathrooms: {NumofBath}</h3>
         <h3> Bedroom: {NumofRoom}</h3>
      </div>
    </div>
  );
}

export default ProfileCard