import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/order");
  };
  return (
    <div
      className="w-screen h-screen justify-center flex text-center
    bg-[url('../../../Assets/mile1-assets/home-banner.png')]"
    >
      <div className="mt-32">
        <img
          className="mb-16 m-auto"
          src="../../../Assets/mile1-assets/logo.svg"
        />

        <div>
          <p className="font-specimen text-6xl text-white font-light mb-10">
            KOD ACIKTIRIR <br /> PIZZA, DOYURUR
          </p>
          <button
            onClick={handleOrder}
            className="bg-myYellow py-3 px-14 rounded-full text-black font-medium font-roboto"
          >
            ACIKTIM
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
