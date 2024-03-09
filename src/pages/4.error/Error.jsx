import React from "react";
import ButtonComp from "../../components/buttonComp/ButtonComp";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div className="bg-myBeige flex flex-wrap md:h-screen w-screen">
      <img
        className="h-full"
        src="https://live.staticflickr.com/4060/4307940750_3abc3ebe28_b.jpg"
      />
      <div className="flex flex-col items-center text-center justify-center ml-12 mt-8 md:mt-0 md:text-left md:items-start">
        <p className="text-6xl font-roboto font-bold leading-snug">
          Ooops! <br />
          Burada bir dilim bulamadık 🍕
        </p>

        <ButtonComp
          onClick={() => navigate("/")}
          className="py-4 bg-myRed mt-12 px-8 rounded-full"
          containerClass="text-white font-medium font-roboto"
          title="Ana Sayfaya Git"
        />
      </div>
    </div>
  );
}

export default Error;
