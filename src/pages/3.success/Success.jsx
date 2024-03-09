import React from "react";
import { useLocation } from "react-router-dom";
import OrderSummary from "../../components/orderSummary/OrderSummary";
import Notes from "../../components/notes/Notes";
import MapView from "../../components/mapView/MapView";

function Success() {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="min-h-screen max-w-full bg-myRed">
      <img
        className="mb-8 justify-center m-auto py-4"
        src="../../../Assets/mile1-assets/logo.svg"
      />
      <div className="flex flex-col md:flex-row justify-around ">
        <div className="h-full  flex-col items-center py-10 mx-8 md:mx-0">
          <p className="text-myYellow font-satisfy text-3xl text-center">
            lezzetin yolda
          </p>
          <p
            data-cy="order-user"
            className="text-6xl font-roboto text-center text-white font-extralight  mt-2"
          >
            SİPARİŞ ALINDI! <br /> {data?.name}{" "}
            <span className="text-4xl">✨✨</span>
          </p>
          <hr className="my-10 w-12/12" />
          <div className="flex flex-col justify-center items-center font-barlow text-white">
            <p className="capitalize font-semibold text-xl mb-8 text-center">
              {data.type === "Pizza"
                ? `${data?.doughSize} kenarlı ${data?.pizzaName}`
                : `${data?.pizzaName}`}
            </p>
            <Notes data={data} />

            <OrderSummary
              style="w-48"
              style2="w-48"
              data={data}
              className="mt-10 py-12 md:px-16 sm:px-10 px-4 text-white border border-white rounded-lg font-barlow font-semibold"
            />
          </div>
        </div>
        <div className="h-full  flex-col items-center py-10 mx-8 md:mx-0">
          <MapView />
        </div>
      </div>
    </div>
  );
}

export default Success;
