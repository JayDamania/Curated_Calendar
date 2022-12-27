import "./Trip.css";
import React from "react";
import Tripdata from "./Tripdata";
import trip1 from "../Asset/11.jpg";
import trip2 from "../Asset/9.jpg";
import trip3 from "../Asset/3.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <Tripdata
          image={trip1}
          heading="Trip in Bali"
          text="Bali is probably the most famous of Indonesia’s islands. Although often crowded with travelers, there is no escaping the fact that this place is beautiful. Try some surfing at Bingin Beach or visit the Pura Besakih, the Mother Temple, which is truly stunning to behold. Make sure you see some traditional Balinese dancing in Ubud too. You can also join a yoga retreat pretty much anywhere on the island and cooking classes are also plentiful and make for a great souvenir."
        />
        <Tripdata
          image={trip2}
          heading="Trip in India"
          text="Naida Caves are the most interesting rock formations in Diu. It is believed that these caves existed naturally earlier, but when the Portuguese took over the region, they used the orange-brown stone from them to make the majestic Diu Fort, leaving behind an interesting structure. These caves are a maze-like formation that are a delight to explore. Located outside the Diu fort, the caves are adorned with an intricate network of tunnels and huge step-like structures that make for a fascinating climb. "
        />
        <Tripdata
          image={trip3}
          heading="Trip in France"
          text="The Eiffel Tower stands on four lattice-girder piers that taper inward and join to form a single large vertical tower. As they curve inward, the piers are connected to each other by networks of girders at two levels that afford viewing platforms for tourists. By contrast, the four semicircular arches at the tower’s base are purely aesthetic elements that serve no structural function."
        />
      </div>
    </div>
  );
}

export default Trip;
