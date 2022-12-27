import "./Trip.css";
import React from "react";

function Tripdata(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="imagetrip" src={props.image} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default Tripdata;
