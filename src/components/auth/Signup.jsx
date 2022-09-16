import React from "react";

const Signup = () => {
  return (
    <div className="wrapper px  x-gap screen" style={{ paddingTop: "1rem" }}>
      <div className="container flex col signup grow jubet">
        <div>
          <p className="welcome-text signup">Buat Akun Baru</p>
        </div>

        <div>
          <p className="welcome-text sec">
            Silahkan mengisi data diri sesuai dengan data yang benar karena ini
            akan memengaruhi daftar kehadiran anda
          </p>
        </div>
        <input type="text" placeholder="NISN" name="nisn" className="" />
        <div className="relative">
          <input type="text" placeholder="Nama" name="nama" className="" />
        </div>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="text" name="No Whattsapp" placeholder="No Whattsapp" />
        <input type="text" name="Alamat" placeholder="Alamat" />
        <input type="text" name="Kelas" placeholder="Kelas" />
        <div className="container">
          <button className="welcome-button py round main white ">
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
