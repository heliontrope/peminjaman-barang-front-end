import React from "react";
import { Link } from "react-router-dom";
import Button from "./uicomponents/Button";

const Welcome = () => {
  return (
    <div className="wrapper px py screen x-gap">
      <div className="container flex col x-gap welcome-text">
        <div>
          <p className="welcome-text main">Selamat Datang!</p>
        </div>

        <div>
          <p className="welcome-text">
            Silahkan membuat akun anda untuk presensi setiap hari
          </p>
        </div>
      </div>
      <div className="container h-fit flex col x-gap">
        <Link to="/login">
          <button
            className="welcome-button py round main white"
            style={{ textDecoration: "none" }}
          >
            Masuk
          </button>
        </Link>
        <Link to="/signup">
          <button className=" welcome-button round second white">
            Buat akun
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
