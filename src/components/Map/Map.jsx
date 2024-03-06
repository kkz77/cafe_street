import React from "react";
import "./Map.css";
import GoogleMap from "../GoogleMap/GoogleMap";

function Map() {
  return (
    <div className="lma-container">
      <div className="lma-titlesDiv">
        <h2>Contact & Location</h2>
      </div>

      <div className="lma-sectionContainer">
        <div className="singleInfo">
          <span className="number colorOne">Location</span>
          <h6>Address</h6>
          <p>
            1 Thanon Chalong Krung, Lat Krabang, Khet Lat Krabang, Krung Thep
            Maha Nakhon 10520
          </p>
        </div>

        <div className="singleInfo">
          <span className="number colorTwo">Contact</span>
          <h6>Phone number</h6>
          <p>Home: 09987981234 / Office: 0169232532</p>
        </div>

        <div className="singleInfo">
          <span className="number colorThree">Social Platform</span>
          <h6></h6>
          <a href="#">
            <img
              className="social"
              src="https://cdn.pixabay.com/photo/2021/09/25/14/06/social-network-6655050_960_720.png"
            />
          </a>
        </div>
      </div>

      <div className="imgDiv">
        <GoogleMap />
      </div>
    </div>
  );
}

export default Map;
