import React from "react";
import ButtonComp from "../../components/buttonComp/ButtonComp";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div className="bg-myBeige flex flex-wrap h-screen w-screen">
      <img
        className="md:h-full md:w-3/6 h-3/6 w-full"
        src="https://live.staticflickr.com/4060/4307940750_3abc3ebe28_b.jpg"
      />
      <div className="w-5/6 h-3/6 m-auto text-center justify-center items-center flex flex-col md:w-3/6">
        <p className="md:text-6xl text-3xl font-roboto font-bold leading-snug">
          Ooops! <br />
          Burada bir dilim bulamadık 🍕
        </p>

        <ButtonComp
          onClick={() => navigate("/")}
          className="py-4 px-8 bg-myRed md:mt-12 mt-4 md:rounded-full rounded-full"
          containerClass="text-white font-medium font-roboto"
          title="Ana Sayfaya Git"
        />
      </div>
    </div>
  );
}

export default Error;
