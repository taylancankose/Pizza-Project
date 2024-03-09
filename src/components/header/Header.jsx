import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-myRed">
      <div
        className="flex-col m-auto xl:w-4/12
    md:w-8/12 "
      >
        <img
          className="p-5 m-auto"
          src="../../../Assets/mile1-assets/logo.svg"
        />
        {/* <nav className="flex gap-1 mt-4 text-white font-light">
          * Header Nav *
          <Link to={"/"}>Anasayfa -</Link>
          <Link>Seçenekler -</Link>
          <Link className="font-bold">Sipariş Oluştur</Link>
        </nav> */}
      </div>
    </div>
  );
}

export default Header;
