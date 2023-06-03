import React from "react";
import { Link } from "react-router-dom";

import SignupOverlay from "./SignupOverlay";
export default function Signup() {
  return (
    <div className="container-fluid bg-white">
      <div className="container">
        <SignupOverlay />
      </div>
    </div>
  );
}
