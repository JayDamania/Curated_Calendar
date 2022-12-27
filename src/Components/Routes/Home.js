import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import homeimg from "../Asset/12.jpg";
import Destination from "../Destination/Destination";
import Trip from "../Trip/Trip";
import Footer from "../Footer/Footer";
function Home() {
  return (
    <Fragment>
      <Navbar />
      <Hero
        cName="hero"
        Heroimg={homeimg}
        title="Your Journey Begins Here"
        text="Choose Your Favourite Destination."
        buttontext="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </Fragment>
  );
}

export default Home;
