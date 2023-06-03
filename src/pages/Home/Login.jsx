import React from "react";
import { Link } from "react-router-dom";

import LoginOverlay from "./LoginOverlay";
export default function Login() {
  return (
    <div className="container-fluid bg-white">
      <div className="container">
        <LoginOverlay />
      </div>
    </div>
  );
}
