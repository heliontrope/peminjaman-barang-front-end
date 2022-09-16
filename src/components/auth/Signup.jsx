import React from "react";

const Signup = () => {
  return (
    <div className="wrapper px x-gap screen">
      <div className="container flex col signup welcome-text">
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
      </div>
      <div className="container flex col h-fit">
        <button className="welcome-button py round main white static">
          Daftar
        </button>
      </div>
    </div>
  );
};

export default Signup;
