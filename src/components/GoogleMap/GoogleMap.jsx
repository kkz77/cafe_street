import React from "react";
import "./GoogleMap.css";
const GoogleMap = () => {
  return (
    <div>
      <iframe
        className="map-container"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8215771854047!2d100.77138631023779!3d13.729249697760421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d664a2b9c8ef9%3A0x8d13a1d2e40db4f0!2sKMITL%20Student%20Dormitory!5e0!3m2!1sen!2sth!4v1709562248781!5m2!1sen!2sth"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
