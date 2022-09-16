import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    if (click === false) {
      setClick(true);
    } else if (click) {
      setClick(false);
    }
  };

  return (
    <div className="wrapper px py screen">
      <div className="container flex col x-gap grow jubet">
        <div className="container flex col x-gap">
          <div>
            <p className="welcome-text main">Selamat Datang!</p>
          </div>
          <div>
            <p className="welcome-text 1rem">
              Silahkan mengisi data diri sesuai dengan data yang benar karena
              ini akan memengaruhi daftar kehadiran anda
            </p>
          </div>
          <input type="text" placeholder="Nama" className="" />
          <div className="relative">
            <input
              type={click ? "text" : "password"}
              placeholder="Kata Sandi"
              className=""
            />
            <FontAwesomeIcon
              icon={click ? faEye : faEyeSlash}
              className="eye-icon"
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="container flex col h-fit">
          <button className="welcome-button py round main white">Masuk</button>
          {/* <Button fontsize="1.15rem" text="Masuk" bgcolor="#5cb2e6" /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
