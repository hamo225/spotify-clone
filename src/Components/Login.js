import React from "react";
import { loginUrl } from "../spotify";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
          alt="Sotify Logo"
        />
      </div>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
