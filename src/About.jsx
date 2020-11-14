import React from "react";
import ReactPlayer from "react-player"
function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <ReactPlayer autoplay
        url="https://youtu.be/x79zUdbfKGo"
      />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              Reats is a secure blockchain real estate application which redefines real estate world in a new way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;