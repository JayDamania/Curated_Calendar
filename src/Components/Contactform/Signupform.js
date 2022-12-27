import "./Contactform.css";

import React from "react";

function Signupform() {
  return (
    <div className="form-container">
      <h1>Sign Up To Explore The World!</h1>
      <form>
        <input placeholder="UserName" />
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default Signupform;
