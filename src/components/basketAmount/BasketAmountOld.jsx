import React from "react";
import ButtonComp from "../buttonComp/ButtonComp";

function BasketAmount({
  handleIncreaseAmount,
  handleDecreaseAmount,
  orderDetails,
}) {
  return (
    <div className="flex rounded-md justify-center md:justify-start mb-4">
      <ButtonComp
        disabled={orderDetails.amount === 1}
        onClick={handleDecreaseAmount}
        className={"bg-myYellow w-12 h-14 rounded-l-md z-10 font-bold"}
        title={"-"}
      />
      <span className="w-12 h-14 text-center items-center justify-center flex border border-myLightGray border-opacity-50 ">
        {orderDetails.amount}
      </span>
      <ButtonComp
        onClick={handleIncreaseAmount}
        className="bg-myYellow w-12 h-14 rounded-r-md z-10 font-bold"
        title={"+"}
      />
    </div>
  );
}

export default BasketAmount;
