import "./Destination.css";
import React from "react";
import descimg1 from "../Asset/1.jpg";
import descimg2 from "../Asset/2.jpg";
import descimg3 from "../Asset/4.jpg";
import descimg4 from "../Asset/5.jpg";
import descimg5 from "../Asset/6.jpg";
import descimg6 from "../Asset/8.jpg";
import Destinationdata from "./Destinationdata";


function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours gives you the opportunity to see a lot, within a timeframe.</p>
      <Destinationdata
        className="first-dec"
        heading="Taal Volcanos, Batanga"
        text=" Taal Volcano has had several violent eruptions in the past, causing
            deaths on the island and the populated areas surrounding the lake,
            with an overall death toll of about 6,000. Because of its proximity
            to populated areas and its eruptive history, the volcano was
            designated a Decade Volcano, worthy of close study to prevent future
            natural disasters. All volcanoes in the Philippines are part of the
            Ring of Fire."
        img1={descimg1}
        img2={descimg2}
      />
      <Destinationdata
        className="first-dec-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Mount Daguldol hike is considered an easy climb or a level one scale. Most of the trails you will encounter are forest path where trees give enough shade during your hike. There are only a few hard trails or slippery footpath especially when it rains. "
        img1={descimg3}
        img2={descimg4}
      />
      <Destinationdata
        className="first-dec"
        heading="Elafonisi Beach, Crete"
        text="Elafonisi is one of the most breathtaking beaches on Crete Island. Its clear blue waters, pink sand, and its unique landscape attract thousands of visitors every year. It has been ranked as one of the most beautiful beaches in the world. Along with the surrounding shores, it belongs to the Natura network because of its unique natural beauty."
        img1={descimg5}
        img2={descimg6}
      />
     
    </div>
  );
}

export default Destination;
